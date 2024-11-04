"use client";

import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import SearchBar from '../../components/SearchBar';
import AuthorCard from '../../components/AuthorCard';
import { Modal, Button } from '@mui/material';

const AuthorsPage = () => {
    const breadcrumbPaths = ['Accueil', 'Liste des auteurs'];
    const [authors, setAuthors] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Récupérer la liste des auteurs depuis l'API
    useEffect(() => {
        const fetchAuthors = async () => {
            try {
                const response = await fetch('http://127.0.0.1:3001/authors');
                const data = await response.json();
                setAuthors(data);
            } catch (error) {
                console.error("Erreur lors de la récupération des auteurs :", error);
            }
        };

        fetchAuthors();
    }, []);

    // Filtrer les auteurs par recherche
    const filteredAuthors = authors.filter(author =>
        author.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Fonction pour ajouter un nouvel auteur
    const handleAddAuthor = async (newAuthor) => {
        try {
            const response = await fetch('http://127.0.0.1:3001/authors', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newAuthor),
            });
            const createdAuthor = await response.json();
            setAuthors([...authors, createdAuthor]);
            setIsModalOpen(false);
        } catch (error) {
            console.error("Erreur lors de l'ajout d'un auteur :", error);
        }
    };

    return (
        <Layout title="Liste des Auteurs">
            <Breadcrumb paths={breadcrumbPaths} />
            <SearchBar onSearch={setSearchTerm} placeholder="Rechercher un auteur..." />

            <div className="space-y-4 mt-4">
                {filteredAuthors.map(author => (
                    <AuthorCard
                        key={author.id}
                        name={author.name}
                        id={author.id}
                        photo={author.photo}
                        bookCount={author.bookCount}
                        averageRating={author.averageRating}
                    />
                ))}
            </div>

            {/* Bouton pour ouvrir la modale d'ajout d'auteur */}
            <Button variant="contained" color="primary" onClick={() => setIsModalOpen(true)}>
                Ajouter un nouvel auteur
            </Button>

            {/* Modale d'ajout d'auteur */}
            <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="p-4 bg-white rounded-md max-w-md mx-auto mt-24">
                    <h2>Ajouter un auteur</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        const newAuthor = {
                            name: e.target.name.value,
                            biography: e.target.biography.value,
                            // Ajoutez un champ pour la photo si nécessaire
                        };
                        handleAddAuthor(newAuthor);
                    }}>
                        <input type="text" name="name" placeholder="Nom" required className="w-full mb-2 p-2 border" />
                        <input type="text" name="biography" placeholder="Biographie" required className="w-full mb-2 p-2 border" />
                        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Ajouter</button>
                    </form>
                </div>
            </Modal>
        </Layout>
    );
};

export default AuthorsPage;
