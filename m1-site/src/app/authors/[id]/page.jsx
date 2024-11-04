"use client";

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Breadcrumb from '../../../components/Breadcrumb';
import BookCard from '../../../components/BookCard';

const AuthorDetailPage = () => {
    const { id } = useParams();
    const [author, setAuthor] = useState(null);
    const [books, setBooks] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [updatedAuthor, setUpdatedAuthor] = useState({ name: '', biography: '', photoUrl: '' });

    useEffect(() => {
        const fetchAuthor = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:3001/authors/${id}`);
                const authorData = await response.json();
                setAuthor(authorData);
                setUpdatedAuthor({
                    name: authorData.name,
                    biography: authorData.biography,
                    photoUrl: authorData.photoUrl || '', // Assure que photoUrl est une chaîne vide si pas définie
                });

                // Récupérer les livres de l'auteur
                const booksResponse = await fetch(`http://127.0.0.1:3001/authors/${id}/books`);
                const booksData = await booksResponse.json();
                setBooks(booksData);
            } catch (error) {
                console.error("Erreur lors de la récupération des livres de l'auteur :", error);
            }
        };

        fetchAuthor();
    }, [id]);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUpdatedAuthor((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`http://127.0.0.1:3001/authors/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedAuthor),
            });
            if (response.ok) {
                const updatedData = await response.json();
                setAuthor(updatedData);
                setIsEditing(false); // Fermer le formulaire après la mise à jour
            } else {
                console.error('Erreur lors de la mise à jour de l\'auteur');
            }
        } catch (error) {
            console.error("Erreur lors de la mise à jour de l'auteur :", error);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <Breadcrumb paths={['Accueil', 'Liste des auteurs', author?.name || 'Auteur']} />

            {author && (
                <>
                    <div className="flex flex-col items-center mb-6">
                        {author.photoUrl ? (
                            <img src={author.photoUrl} alt={author.name} className="w-32 h-32 rounded-full object-cover border-2 border-gray-300" />
                        ) : (
                            <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center text-gray-700">Pas de photo disponible</div>
                        )}
                        <h1 className="text-2xl font-bold mt-4">{author.name}</h1>
                        <p className="text-gray-700 text-center mt-2">{author.biography}</p>
                        <button 
                            onClick={handleEditToggle} 
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                        >
                            {isEditing ? 'Annuler' : 'Modifier'}
                        </button>
                    </div>

                    {isEditing && (
                        <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded shadow-md mb-6">
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Nom:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={updatedAuthor.name}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Biographie:</label>
                                <textarea
                                    name="biography"
                                    value={updatedAuthor.biography}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">URL de la photo:</label>
                                <input
                                    type="text"
                                    name="photoUrl"
                                    value={updatedAuthor.photoUrl}
                                    onChange={handleChange}
                                    placeholder="https://exemple.com/photo.jpg"
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                                />
                            </div>
                            <button type="submit" className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200">
                                Sauvegarder
                            </button>
                        </form>
                    )}

                    <h2 className="text-xl font-bold mb-4">Livres écrits par {author.name}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Array.isArray(books) && books.length > 0 ? (
                            books.map((book) => (
                                <BookCard
                                    key={book.id}
                                    book={book}
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
