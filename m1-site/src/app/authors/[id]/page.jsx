// src/app/authors/[id]/page.jsx
"use client";
import { useParams } from 'next/navigation';  // Importer useParams
import { useState, useEffect } from 'react';
import Breadcrumb from '../../../components/Breadcrumb';
import BookCard from '../../../components/BookCard';
import { Modal, Button } from '@mui/material';

const AuthorDetailPage = () => {
    const { id } = useParams();  // Utiliser useParams pour récupérer l'id

    const [author, setAuthor] = useState(null);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        if (id) {
            // Remplacer par la logique de récupération des données pour l'auteur
            setAuthor({
                id,
                name: "Auteur Exemple",
                photoUrl: "/images/auteur.jpg",
                biography: "Biographie de l'auteur..."
            });
            setBooks([
                { id: 1, title: "Livre 1", publicationDate: "2021-01-01" },
                { id: 2, title: "Livre 2", publicationDate: "2022-05-15" }
            ]);
        }
    }, [id]);

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
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default AuthorDetailPage;
