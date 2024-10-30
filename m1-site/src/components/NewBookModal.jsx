// src/components/NewBookModal.jsx
import { useState, useEffect } from 'react';

const NewBookModal = ({ onClose, onAddBook }) => {
    const [title, setTitle] = useState('');
    const [publicationDate, setPublicationDate] = useState('');
    const [price, setPrice] = useState('');
    const [authorId, setAuthorId] = useState(''); // État pour l'ID de l'auteur
    const [authors, setAuthors] = useState([]); // État pour la liste des auteurs

    // Récupérer la liste des auteurs
    useEffect(() => {
        const fetchAuthors = async () => {
            try {
                const response = await fetch('http://127.0.0.1:3001/authors'); // Vérifiez cette route
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
                type="date" 
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
            <select 
                value={authorId} 
                onChange={(e) => setAuthorId(e.target.value)}
            >
                <option value="">Sélectionnez un auteur</option>
                {authors.map(author => (
                    <option key={author.id} value={author.id}>
                        {author.name} {/* Affichez le nom de l'auteur */}
                    </option>
                ))}
            </select>
            <button onClick={handleAddBook}>Ajouter</button>
            <button onClick={onClose}>Fermer</button>
        </div>
    );
};

export default NewBookModal;
