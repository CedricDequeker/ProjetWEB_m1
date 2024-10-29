// src/app/books/page.jsx
"use client";
import { useState } from "react";
import Layout from "../../components/Layout";
import BookCard from "../../components/BookCard";
import SearchBar from "../../components/SearchBar";
import NewBookModal from "../../components/NewBookModal";

const BooksPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("title");
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Exemple de données statiques pour les livres
    const books = [
        { id: 1, title: "Livre A", date: "2021", author: "Auteur 1", rating: 4 },
        { id: 2, title: "Livre B", date: "2020", author: "Auteur 2", rating: 3 },
        // Ajoute d'autres livres ici...
    ];

    // Filtrage et tri des livres
    const filteredBooks = books
        .filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
            if (sortOrder === "title") return a.title.localeCompare(b.title);
            if (sortOrder === "date") return a.date.localeCompare(b.date);
            if (sortOrder === "author") return a.author.localeCompare(b.author);
            return 0;
        });

    return (
        <Layout title="Liste des Livres">
            <div className="flex justify-between items-center mb-4">
                <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
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
                    <BookCard key={book.id} book={book} />
                ))}
            </div>

            {isModalOpen && <NewBookModal onClose={() => setIsModalOpen(false)} />}
        </Layout>
    );
};

export default BooksPage;
