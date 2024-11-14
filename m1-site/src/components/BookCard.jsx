"use client";
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation'; // Utilisation de `usePathname` pour détecter la page actuelle

// Composant pour afficher les informations d'un livre sous forme de carte
const BookCard = ({ book }) => {
    const pathname = usePathname(); // Récupération du chemin actuel de la page
    const isAuthorPage = pathname.includes('/authors/[id]'); // Vérifie si la carte est affichée dans une page auteur

    return (
        <Link key={book.id} href={`/books/${book.id}`} className="block">
            <div className="border p-4 rounded shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                {/* Titre du livre en gras */}
                <h2 className="font-bold text-lg mb-2">{book.title}</h2>
                {/* Affiche l'auteur si on n'est pas sur la page d'un auteur */}
                {!isAuthorPage && book.author && (
                    <p className="text-gray-700">
                        Auteur : {book.author ? book.author.name : "Non renseigné"}
                    </p>
                )}
                {/* Date de publication du livre */}
                <p className="text-gray-700">Date de publication : {book.publicationDate}</p>
            </div>
        </Link>
    );
};

export default BookCard;
