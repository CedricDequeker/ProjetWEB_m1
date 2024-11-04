"use client";

import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import SearchBar from '../../components/SearchBar';
import AuthorCard from '../../components/AuthorCard';
import NewAuthorModal from '../../components/NewAuthorModal'; // Créez ce composant si nécessaire
import { Modal, Button } from '@mui/material';

const AuthorsPage = () => {
    const breadcrumbPaths = ['Accueil', 'Liste des auteurs'];
    const [authors, setAuthors] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Récupérer la liste des auteurs depuis l'API
    const fetchAuthors = async () => {
        try {
            const response = await fetch('http://127.0.0.1:3001/authors');
            if (!response.ok) throw new Error("Erreur lors de la récupération des auteurs");
            const data = await response.json();
            setAuthors(data);
        } catch (error) {
            console.error("Erreur lors de la récupération des auteurs :", error);
        }
    };

    useEffect(() => {
        fetchAuthors();
    }, []);

    // Fonction pour ajouter un nouvel auteur
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

            const updatedAuthors = await fetchAuthors(); // Actualiser la liste après l'ajout
            setAuthors(updatedAuthors);
            setIsModalOpen(false);
        } catch (error) {
            console.error("Erreur lors de l'ajout d'un auteur :", error);
        }
    };

    // Filtrer les auteurs par recherche
    const filteredAuthors = authors.filter(author =>
        author.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Layout title="Liste des Auteurs">
            <div className="flex justify-between items-center mb-4">
                <SearchBar value={searchTerm} onSearch={setSearchTerm} placeholder="Rechercher un auteur..." />
                <Button variant="contained" color="primary" onClick={() => setIsModalOpen(true)}>
                    Ajouter un auteur
                </Button>
            </div>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredAuthors.map(author => (
                    <AuthorCard
                        key={author.id}
                        name={author.name}
                        id={author.id}
                        photo={author.photoUrl}
                        bookCount={author.books ? author.books.length : 0}
                        averageRating={author.averageRating || 'N/A'}
                    />
                ))}
            </div>

            {isModalOpen && (
                <NewAuthorModal
                    onClose={() => setIsModalOpen(false)}
                    onAddAuthor={handleAddAuthor}
                />
            )}
        </Layout>
    );
};

export default AuthorsPage;
