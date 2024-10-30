// src/app/authors/[id]/page.jsx
"use client";
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Modal, Button } from '@mui/material';
import Breadcrumb from '../../components/Breadcrumb';
import BookCard from '../../components/BookCard';

const AuthorDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;

    // État pour stocker les informations de l'auteur et sa liste de livres
    const [author, setAuthor] = useState(null);
    const [books, setBooks] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (id) {
            // Fetch des données de l'auteur et de ses livres ici
            // Simuler des données pour l'exemple
            setAuthor({
                id,
                name: "Auteur Exemple",
                photoUrl: "/images/auteur.jpg",
                biography: "Biographie de l'auteur..."
            });
            setBooks([
                { id: 1, title: "Livre 1", publicationDate: "2021-01-01" },
                { id: 2, title: "Livre 2", publicationDate: "2022-05-15" },
                // Autres livres...
            ]);
        }
    }, [id]);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleDeleteAuthor = () => {
        // Logique de suppression de l'auteur avec confirmation
        closeModal();
    };

    if (!id) {
        return <p>Chargement...</p>; // Affiche un message pendant le chargement de `id`
    }

    return (
        <div className="author-detail-page">
            <Breadcrumb paths={['Accueil', 'Liste des auteurs', author?.name || 'Auteur']} />
            
            {author && (
                <>
                    <div className="author-header">
                        <img src={author.photoUrl} alt={author.name} className="author-photo" />
                        <h1>{author.name}</h1>
                        <p>{author.biography}</p>
                    </div>

                    <h2>Livres écrits par {author.name}</h2>
                    <div className="books-list">
                        {books.map((book) => (
                            <BookCard
                                key={book.id}
                                title={book.title}
                                publicationDate={book.publicationDate}
                                authorName={author.name}
                                onClick={() => router.push(`/books/${book.id}`)}
                            />
                        ))}
                    </div>

                    <Button onClick={openModal} color="secondary">
                        Supprimer cet auteur
                    </Button>
                    <Modal open={isModalOpen} onClose={closeModal}>
                        <div className="modal-content">
                            <p>Êtes-vous sûr de vouloir supprimer cet auteur ?</p>
                            <Button onClick={handleDeleteAuthor} color="error">Confirmer</Button>
                            <Button onClick={closeModal}>Annuler</Button>
                        </div>
                    </Modal>
                </>
            )}
        </div>
    );
};

export default AuthorDetailPage;
