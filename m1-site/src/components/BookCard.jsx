// src/components/BookCard.jsx

"use client";
import Link from 'next/link';

const BookCard = ({ book }) => {
    console.log(book);
    return (
        <Link key={book.id} href={`/books/${book.id}`} className="block">
            <div className="border p-4 rounded shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                <h2 className="font-bold text-lg mb-2">{book.title}</h2>
                <p className="text-gray-700">Auteur : {book.author ? book.author.name : "Non renseigné"}</p>
                <p className="text-gray-700">Date de publication : {book.publicationDate}</p>
            </div>
        </Link>
    );
};


export default BookCard;
