// src/components/NewBookModal.jsx
import { useState } from 'react';

const NewBookModal = ({ onClose, onAddBook }) => {
    const [title, setTitle] = useState('');
    const [publicationDate, setPublicationDate] = useState('');
    const [price, setPrice] = useState('');
    const [authorId, setAuthorId] = useState(''); // Si vous avez besoin d'un auteur

    const handleAddBook = async () => {
        const newBookData = {
            title,
            publicationDate,
            price: parseFloat(price),
            authorId: parseInt(authorId), // Assurez-vous que cela correspond à votre modèle
        };
        
        // Appelle la fonction pour ajouter le livre
        await onAddBook(newBookData);
        onClose(); // Ferme la modal après l'ajout
    };

    return (
        <div className="modal">
            <h2>Ajouter un Livre</h2>
            <input 
                type="text" 
                placeholder="Titre" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Date de publication" 
                value={publicationDate} 
                onChange={(e) => setPublicationDate(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder="Prix" 
                value={price} 
                onChange={(e) => setPrice(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder="ID Auteur" 
                value={authorId} 
                onChange={(e) => setAuthorId(e.target.value)} 
            />
            <button onClick={handleAddBook}>Ajouter</button>
            <button onClick={onClose}>Fermer</button>
        </div>
    );
};

export default NewBookModal;
