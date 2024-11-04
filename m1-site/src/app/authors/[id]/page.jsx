"use client";

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Breadcrumb from '../../../components/Breadcrumb';
import BookCard from '../../../components/BookCard';

const AuthorDetailPage = () => {
    const { id } = useParams();

    const [author, setAuthor] = useState(null);
    const [books, setBooks] = useState([]); // Assurez-vous que books est initialisé en tant que tableau vide

    useEffect(() => {
        const fetchAuthor = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:3001/authors/${id}`);
                const authorData = await response.json();
                setAuthor(authorData);
    
                // Directement utiliser les livres de l'auteur
                if (Array.isArray(authorData.books)) {
                    setBooks(authorData.books);
                } else {
                    console.error("Erreur : Les livres ne sont pas un tableau.", authorData.books);
                }
            } catch (error) {
                console.error("Erreur lors de la récupération des détails de l'auteur :", error);
            }
        };
    
        fetchAuthor();
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
                        {Array.isArray(books) && books.length > 0 ? (
                            books.map((book) => (
                                <BookCard
                                    key={book.id}
                                    title={book.title}
                                    publicationDate={book.publicationDate}
                                    authorName={author.name}
                                />
                            ))
                        ) : (
                            <p>Aucun livre trouvé pour cet auteur.</p>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default AuthorDetailPage;
