// src/components/NewBookModal.jsx
import { useState, useEffect } from 'react';

const NewBookModal = ({ onClose, onAddBook }) => {
    const [title, setTitle] = useState('');
    const [publicationDate, setPublicationDate] = useState('');
    const [price, setPrice] = useState('');
    const [authorId, setAuthorId] = useState('');
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        const fetchAuthors = async () => {
            try {
                const response = await fetch('http://127.0.0.1:3001/authors');
                if (!response.ok) throw new Error('Erreur lors de la récupération des auteurs');
                const data = await response.json();
                setAuthors(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchAuthors();
    }, []);

    const handleAddBook = async () => {
        const newBookData = {
            title,
            publicationDate,
            price: parseFloat(price),
            authorId: parseInt(authorId),
        };
        
        await onAddBook(newBookData);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">Ajouter un Livre</h2>
                <input 
                    type="text" 
                    placeholder="Titre" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    className="w-full p-2 border rounded mb-4"
                />
                <input 
                    type="date" 
                    placeholder="Date de publication" 
                    value={publicationDate} 
                    onChange={(e) => setPublicationDate(e.target.value)} 
                    className="w-full p-2 border rounded mb-4"
                />
                <input 
                    type="number" 
                    placeholder="Prix" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} 
                    className="w-full p-2 border rounded mb-4"
                />
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
