"use client";

import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import SearchBar from '../../components/SearchBar';
import AuthorCard from '../../components/AuthorCard';
import NewAuthorModal from '../../components/NewAuthorModal';
import { Modal, Button } from '@mui/material';

// Composant principal de la page des auteurs
const AuthorsPage = () => {
    // Chemin de navigation pour le composant Breadcrumb
    const breadcrumbPaths = ['Accueil', 'Liste des auteurs'];
    // État pour stocker la liste des auteurs
    const [authors, setAuthors] = useState([]);
    // État pour stocker le terme de recherche entré par l'utilisateur
    const [searchTerm, setSearchTerm] = useState('');
    // État pour contrôler l'ouverture et la fermeture du modal d'ajout d'auteur
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Fonction asynchrone pour récupérer la liste des auteurs depuis une API
    const fetchAuthors = async () => {
        try {
            const response = await fetch('http://127.0.0.1:3001/authors');
            if (!response.ok) throw new Error("Erreur lors de la récupération des auteurs");
            const data = await response.json();
            console.log(data);

            // Calcul du nombre de livres et de la note moyenne pour chaque auteur
            const authorsWithRatings = data.map(author => {
                if (author.books && author.books.length > 0) {
                    // Calcul du total des notes et de la moyenne
                    const totalRating = author.books.reduce((sum, book) => {
                        const bookRatings = book.reviews.map(review => review.rating); // Obtenir les évaluations de chaque livre
                        return sum + (bookRatings.reduce((a, b) => a + b, 0) || 0); // Addition des évaluations
                    }, 0);

                    const totalReviews = author.books.reduce((count, book) => count + book.reviews.length, 0); // Compte des avis
                    console.log(`Author: ${author.name}, Total Reviews: ${totalReviews}, Total Rating: ${totalRating}`);

                    const averageRating = totalReviews > 0 ? (totalRating / totalReviews).toFixed(1) : 'N/A'; // Calcul de la note moyenne
                    console.log(`Average Rating for ${author.name}: ${averageRating}`);
                    return {
                        ...author,
                        bookCount: author.books.length, // Nombre de livres de l'auteur
                        averageRating: averageRating // Mise à jour de la note moyenne
                    };
                } else {
                    return {
                        ...author,
                        bookCount: 0, // Aucun livre
                        averageRating: 'N/A' // Pas de note moyenne
                    };
                }
            });

            setAuthors(authorsWithRatings); // Mise à jour de l'état `authors` avec les données transformées
        } catch (error) {
            console.error("Erreur lors de la récupération des auteurs :", error);
        }
    };

    // Chargement des auteurs lors du montage initial du composant
    useEffect(() => {
        fetchAuthors();
    }, []);

    // Fonction pour ajouter un nouvel auteur via un appel API
    const handleAddAuthor = async (newAuthorData) => {
        try {
            const response = await fetch('http://127.0.0.1:3001/authors', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newAuthorData),
            });

            if (!response.ok) {
                throw new Error("Erreur lors de l'ajout de l'auteur");
            }

            // Rafraîchit la liste des auteurs après l'ajout
            await fetchAuthors();
            setIsModalOpen(false); // Ferme le modal
        } catch (error) {
            console.error("Erreur lors de l'ajout d'un auteur :", error);
        }
    };

    // Filtrage des auteurs en fonction du terme de recherche
    const filteredAuthors = authors.filter(author =>
        author.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Layout title="Liste des Auteurs">
            <div className="flex justify-between items-center mb-4">
                {/* Barre de recherche avec le terme de recherche et le gestionnaire de changement */}
                <SearchBar value={searchTerm} onSearch={setSearchTerm} placeholder="Rechercher un auteur..." />
                {/* Bouton pour ouvrir le modal d'ajout d'auteur */}
                <Button variant="contained" color="primary" onClick={() => setIsModalOpen(true)}>
                    Ajouter un auteur
                </Button>
            </div>

            {/* Affichage de la liste filtrée des auteurs */}
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredAuthors.map(author => (
                    <AuthorCard
                        key={author.id} // Clé unique pour chaque auteur
                        name={author.name} // Nom de l'auteur
                        id={author.id} // ID de l'auteur
                        photo={author.photoUrl} // URL de la photo de l'auteur
                        bookCount={author.books ? author.books.length : 0} // Nombre de livres
                        averageRating={author.averageRating || 'N/A'} // Note moyenne de l'auteur
                    />
                ))}
            </div>

            {/* Modal pour ajouter un nouvel auteur */}
            {isModalOpen && (
                <NewAuthorModal
                    onClose={() => setIsModalOpen(false)} // Fermeture du modal
                    onAddAuthor={handleAddAuthor} // Gestionnaire d'ajout d'un nouvel auteur
                />
            )}
        </Layout>
    );
};

export default AuthorsPage;
