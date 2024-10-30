"use client";
import { useState,useEffect } from "react";
import Layout from "../../components/Layout";
import BookCard from "../../components/BookCard";
import SearchBar from "../../components/SearchBar";
import NewBookModal from "../../components/NewBookModal";
import Link from 'next/link';

const BooksPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("title");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        try {
            const response = await fetch('http://127.0.0.1:3001/books');
            if (!response.ok) throw new Error('Failed to fetch books');
            const data = await response.json();
            setBooks(data);
        } catch (error) {
            console.error("Erreur lors de la récupération des livres :", error);
        }
    };
    // Charger les livres au montage du composant
    useEffect(() => {
        fetchBooks();
    }, []);

    const handleAddBook = async (newBookData) => {
        try {
            const response = await fetch('http://127.0.0.1:3001/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newBookData),
            });

            if (!response.ok) {
                throw new Error('Erreur lors de l\'ajout du livre');
            }

            // Récupérer les livres après ajout
            const updatedBooks = await fetchBooks();
            setBooks(updatedBooks);
        } catch (error) {
            console.error(error);
        }
    };

    const filteredBooks = books
        .filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
            if (sortOrder === "title") return a.title.localeCompare(b.title);
            if (sortOrder === "date") return a.publicationDate.localeCompare(b.publicationDate);
            return 0;
        });

    return (
        <Layout title="Liste des Livres">
            <div className="flex justify-between items-center mb-4">
                <SearchBar value={searchTerm} onSearch={(value) => setSearchTerm(value)} />
                <select
                    className="p-2 border rounded"
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="title">Titre</option>
                    <option value="date">Date</option>
                    <option value="author">Auteur</option>
                </select>
                <button onClick={() => setIsModalOpen(true)} className="p-2 bg-blue-500 text-white rounded">
                    Ajouter un Livre
                </button>
            </div>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {filteredBooks.map(book => (
                    <Link key={book.id} href={`/books/${book.id}`} className="block">
                        <BookCard book={book} />
                    </Link>
                ))}
            </div>

            {isModalOpen && (
                <NewBookModal
                    onClose={() => setIsModalOpen(false)} 
                    onAddBook={handleAddBook} // Passer la fonction ici
                />
            )}
        </Layout>
    );
};

export default BooksPage;
