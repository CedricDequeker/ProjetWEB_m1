// src/components/NewBookModal.jsx
import { useState } from "react";

const NewBookModal = ({ onClose }) => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = () => {
        // Logique pour ajouter un livre (à adapter avec ton système de gestion)
        console.log({ title, date, author });
        onClose(); // Ferme la modale après soumission
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded w-1/2">
                <h2 className="text-lg font-bold mb-4">Ajouter un nouveau livre</h2>
                <input type="text" placeholder="Titre" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 w-full mb-2" />
                <input type="text" placeholder="Date de publication" value={date} onChange={(e) => setDate(e.target.value)} className="border p-2 w-full mb-2" />
                <input type="text" placeholder="Auteur" value={author} onChange={(e) => setAuthor(e.target.value)} className="border p-2 w-full mb-2" />
                <button onClick={handleSubmit} className="p-2 bg-blue-500 text-white rounded mr-2">Ajouter</button>
                <button onClick={onClose} className="p-2 bg-gray-300 rounded">Annuler</button>
            </div>
        </div>
    );
};

export default NewBookModal;
