import { useState, useEffect } from 'react';
import { Modal } from '@mui/material';

// Composant EditBookModal pour l'édition des informations d'un livre
const EditBookModal = ({ isOpen, onClose, book, onEditBook }) => {
    // États pour gérer les champs de formulaire
    const [title, setTitle] = useState(book?.title || '');
    const [publicationDate, setPublicationDate] = useState(book?.publicationDate || '');
    const [price, setPrice] = useState(book?.price || '');
    const [authorId, setAuthorId] = useState(book?.authorId || '');
    const [authors, setAuthors] = useState([]); // Liste des auteurs disponibles

    // useEffect pour récupérer la liste des auteurs disponibles
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

    // Mise à jour des champs lorsque le livre sélectionné change
    useEffect(() => {
        setTitle(book?.title || '');
        setPublicationDate(book?.publicationDate || '');
        setPrice(book?.price || '');
        setAuthorId(book?.authorId || '');
    }, [book]);

    // Fonction pour gérer la soumission du formulaire de modification
    const handleEditBook = async () => {
        const editBookData = {
            title,
            publicationDate,
            price: parseFloat(price), // Conversion en nombre flottant
            authorId: parseInt(authorId), // Conversion en entier
        };

        await onEditBook(editBookData); // Envoie les nouvelles données au parent
        onClose(); // Ferme la modale
    };

    return (
        <Modal open={isOpen} onClose={onClose}>
            {/* Fond semi-transparent et centrage de la modale */}
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
                    <h2 className="text-xl font-bold mb-4">Modifier le Livre</h2>
                    
                    {/* Champ de titre */}
                    <input 
                        type="text" 
                        placeholder="Titre" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        className="w-full p-2 border rounded mb-4"
                    />

                    {/* Champ de date de publication */}
                    <input 
                        type="date" 
                        placeholder="Date de publication" 
                        value={publicationDate} 
                        onChange={(e) => setPublicationDate(e.target.value)} 
                        className="w-full p-2 border rounded mb-4"
                    />

                    {/* Champ de prix */}
                    <input 
                        type="number" 
                        placeholder="Prix" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                        className="w-full p-2 border rounded mb-4"
                    />

                    {/* Sélecteur d'auteur */}
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

                    {/* Boutons Enregistrer et Fermer */}
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
