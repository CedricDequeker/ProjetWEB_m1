// src/components/BookCard.jsx

"use client";
import Link from 'next/link';

const BookCard = ({ book }) => {
    return (
        <Link key={book.id} href={`/books/${book.id}`} className="block">
            <div className="border p-4 rounded shadow-md">
                <h2 className="font-bold">{book.title}</h2>
                {/* Vérifiez si l'auteur existe et affichez son nom */}
                <p>Auteur : {book.author ? book.author.name : 'Inconnu'}</p>
                <p>Date : {book.publicationDate}</p>
                {/* Ajoutez d'autres informations sur le livre si nécessaire */}
            </div>
        </Link>
    );
};

export default BookCard;
