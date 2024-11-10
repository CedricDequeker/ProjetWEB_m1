import { useState, useEffect } from 'react';
import { Modal } from '@mui/material';

const EditBookModal = ({ isOpen, onClose, book, onAddBook }) => {
    const [title, setTitle] = useState(book?.title || ''); // Initialise avec le titre du livre ou une chaîne vide
    const [publicationDate, setPublicationDate] = useState(book?.publicationDate || '');
    const [price, setPrice] = useState(book?.price || '');
    const [authorId, setAuthorId] = useState(book?.authorId || '');
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

    // Réinitialise les valeurs de titre, publicationDate, etc., chaque fois que le livre change
    useEffect(() => {
        setTitle(book?.title || '');
        setPublicationDate(book?.publicationDate || '');
        setPrice(book?.price || '');
        setAuthorId(book?.authorId || '');
    }, [book]);

    const handleEditBook = async () => {
        const editBookData = {
            title,
            publicationDate,
            price: parseFloat(price),
            authorId: parseInt(authorId),
        };

        await onAddBook(editBookData); // Appelle la fonction de mise à jour du parent
        onClose(); // Ferme la modale après l'enregistrement
    };

    return (
        <Modal open={isOpen} onClose={onClose}>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
                    <h2 className="text-xl font-bold mb-4">Modifier le Livre</h2>
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
                            onClick={handleEditBook} 
                            className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
                        >
                            Enregistrer les modifications
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
        </Modal>
    );
};

export default EditBookModal;
