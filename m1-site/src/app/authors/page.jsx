// src/app/authors/page.jsx

"use client";

import React,{ useState } from 'react';
import Layout from '../../components/Layout';
import Breadcrumb from '../../components/Breadcrumb';
import SearchBar from '../../components/SearchBar';
import AuthorCard from '../../components/AuthorCard';
import { Modal, Button } from '@mui/material';

const AuthorsPage = () => {
    const breadcrumbPaths = ['Accueil', 'Liste des auteurs'];
    const [authors, setAuthors] = useState([
        { id: 1, name: "Auteur 1", photo: "/images/auteur1.jpg", bookCount: 3, averageRating: 4.2 },
        { id: 2, name: "Auteur 2", photo: "/images/auteur2.jpg", bookCount: 5, averageRating: 3.8 },
        // Autres auteurs...
    ]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Filtrer les auteurs par recherche
    const filteredAuthors = authors.filter(author =>
        author.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Fonction pour ajouter un nouvel auteur
    const handleAddAuthor = (newAuthor) => {
        setAuthors([...authors, newAuthor]);
        setIsModalOpen(false);
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
                        // Exemple d'ajout de données pour un nouvel auteur
                        const newAuthor = {
                            id: authors.length + 1,
                            name: e.target.name.value,
                            photo: e.target.photo.value,
                        };
                        handleAddAuthor(newAuthor);
                    }}>
                        <input type="text" name="name" placeholder="Nom" required className="w-full mb-2 p-2 border" />
                        <input type="text" name="photo" placeholder="URL de la photo" required className="w-full mb-2 p-2 border" />
                        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Ajouter</button>
                    </form>
                </div>
            </Modal>
        </Layout>
    );
};

export default AuthorsPage;
