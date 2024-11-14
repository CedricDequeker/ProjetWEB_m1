// Ce composant est une modal permettant d'ajouter un nouveau livre

import { useState, useEffect } from 'react';

const NewBookModal = ({ onClose, onAddBook }) => {
    // Déclare les états pour les champs du formulaire de création de livre
    const [title, setTitle] = useState('');
    const [publicationDate, setPublicationDate] = useState('');
    const [price, setPrice] = useState('');
    const [authorId, setAuthorId] = useState('');
    const [authors, setAuthors] = useState([]); // État pour stocker la liste des auteurs disponibles

    // Utilisation d'un effet pour charger les auteurs dès l'ouverture de la modal
    useEffect(() => {
        const fetchAuthors = async () => {
            try {
                const response = await fetch('http://127.0.0.1:3001/authors');
                if (!response.ok) throw new Error('Erreur lors de la récupération des auteurs');
                const data = await response.json();
                setAuthors(data); // Met à jour la liste des auteurs
            } catch (error) {
                console.error(error);
            }
        };
        fetchAuthors();
    }, []);

    // Fonction déclenchée lors de la soumission du formulaire pour ajouter un livre
    const handleAddBook = async () => {
        const newBookData = {
            title,
            publicationDate,
            price: parseFloat(price), // Conversion du prix en nombre
            authorId: parseInt(authorId), // Conversion de l'ID de l'auteur en nombre
        };
        
        await onAddBook(newBookData); // Appelle la fonction fournie pour ajouter le livre
        onClose(); // Ferme la modal après l'ajout
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Ajouter un Livre</h2>

                {/* Champs de saisie pour le titre */}
                <input 
                    type="text" 
                    placeholder="Titre" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    className="w-full p-2 border rounded mb-4"
                />

                {/* Champs de saisie pour la date de publication */}
                <input 
                    type="date" 
                    placeholder="Date de publication" 
                    value={publicationDate} 
                    onChange={(e) => setPublicationDate(e.target.value)} 
                    className="w-full p-2 border rounded mb-4"
                />

                {/* Champs de saisie pour le prix */}
                <input 
                    type="number" 
                    placeholder="Prix" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} 
                    className="w-full p-2 border rounded mb-4"
                />

                {/* Sélecteur pour choisir l'auteur */}
                <select 
                    value={authorId} 
                    onChange={(e) => setAuthorId(e.target.value)} 
                    className="w-full p-2 border rounded mb-4"
                >
                    <option value="">Sélectionnez un auteur</option>
                    {authors.map(author => (
                        <option key={author.id} value={author.id}>
                            {author.name}
                        </option>
                    ))}
                </select>

                {/* Boutons d'ajout et de fermeture de la modal */}
                <div className="flex justify-between">
                    <button 
                        onClick={handleAddBook} 
                        className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
                    >
                        Ajouter
                    </button>
                    <button 
                        onClick={onClose} 
                        className="p-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition duration-300"
                    >
                        Fermer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewBookModal;
