// src/app/books/[id]/page.jsx

"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const BookDetailPage = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            const response = await fetch(`http://127.0.0.1:3001/books/${id}`);
            const data = await response.json();
            setBook(data);
        };
        fetchBook();
    }, [id]);

    if (!book) return <div className="text-center text-gray-500">Chargement...</div>;

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full transform transition-all duration-300 hover:scale-105">
                <h1 className="text-3xl font-bold mb-4 text-blue-600">{book.title}</h1>
                <p className="text-lg text-gray-700 mb-2"><span className="font-semibold">Auteur :</span> {book.author ? book.author.name : "Non renseigné"}</p>
                <p className="text-lg text-gray-700 mb-2"><span className="font-semibold">Date de publication :</span> {book.publicationDate}</p>
                <p className="text-lg text-gray-700 mb-4"><span className="font-semibold">Prix :</span> {book.price} €</p>
                <Link href="/books" className="text-blue-500 hover:text-blue-700">Retour à la liste des livres</Link>
            </div>
        </div>
    );
};

export default BookDetailPage;
