"use client";

import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import BookCard from "../../components/BookCard";
import SearchBar from "../../components/SearchBar";
import NewBookModal from "../../components/NewBookModal";
import Link from 'next/link';

// Composant pour afficher la liste des livres
const BooksPage = () => {
    // Déclaration des états pour la gestion de la recherche, tri, modal et liste des livres
    const [searchTerm, setSearchTerm] = useState("");         // terme de recherche
    const [sortOrder, setSortOrder] = useState("title");      // ordre de tri, par défaut "title"
    const [isModalOpen, setIsModalOpen] = useState(false);    // contrôle d'affichage du modal d'ajout de livre
    const [books, setBooks] = useState([]);                   // état pour stocker la liste des livres

    // Fonction pour récupérer les livres depuis l'API
    const fetchBooks = async () => {
        try {
            const response = await fetch('http://127.0.0.1:3001/books');
            if (!response.ok) throw new Error('Failed to fetch books');
            const data = await response.json();
            setBooks(data); // Mise à jour de l'état "books" avec les données récupérées
            return data;    // Retourne les livres pour une utilisation potentielle
        } catch (error) {
            console.error("Erreur lors de la récupération des livres :", error);
            return [];      // Retourne un tableau vide en cas d'erreur
        }
    };

    // useEffect pour charger les livres au montage du composant
    useEffect(() => {
        fetchBooks();
    }, []);

    // Fonction pour gérer l'ajout d'un nouveau livre
    const handleAddBook = async (newBookData) => {
        try {
            const response = await fetch('http://127.0.0.1:3001/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newBookData), // Envoie les données du nouveau livre au backend
            });

            if (!response.ok) {
                throw new Error('Erreur lors de l\'ajout du livre');
            }

            // Met à jour l'état des livres après l'ajout
            const updatedBooks = await fetchBooks();
            setBooks(updatedBooks);
            
        } catch (error) {
            console.error(error);
        }
    };

    // Filtrage et tri des livres en fonction du terme de recherche et de l'ordre de tri
    const filteredBooks = books
    .filter(book => book && book.title && book.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
        if (sortOrder === "title") return a.title.localeCompare(b.title);
        if (sortOrder === "date") return a.publicationDate.localeCompare(b.publicationDate);
        return 0; // Retour par défaut si aucun critère de tri ne correspond
    });

    return (
        <Layout title="Liste des Livres">
            {/* Barre de recherche, sélection du tri et bouton pour ajouter un nouveau livre */}
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
                <button onClick={() => setIsModalOpen(true)} className="p-2 bg-blue-600 text-white rounded shadow-lg hover:bg-blue-700 transition duration-300">
                    Ajouter un Livre
                </button>
            </div>

            {/* Affichage de la liste des livres filtrés sous forme de cartes */}
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredBooks.map(book => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>

            {/* Modal pour ajouter un nouveau livre */}
            {isModalOpen && (
                <NewBookModal
                    onClose={() => setIsModalOpen(false)} // Fermeture du modal d'ajout de livre
                    onAddBook={handleAddBook}           // Appelle handleAddBook pour ajouter un nouveau livre
                />
            )}
        </Layout>
    );
};

export default BooksPage;
