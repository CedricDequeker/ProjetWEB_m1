"use client";

import React, { useState } from 'react';
import { Modal, Button, TextField } from '@mui/material';

// Le composant NewAuthorModal reçoit deux props : onClose pour fermer la modal, et onAddAuthor pour ajouter un nouvel auteur.
const NewAuthorModal = ({ onClose, onAddAuthor }) => {
    // Utilise l'état local pour stocker les informations du nouvel auteur
    const [newAuthor, setNewAuthor] = useState({
        name: '',
        biography: '',
        photoUrl: ''
    });

    // Gestion des changements dans les champs de saisie
    const handleChange = (e) => {
        const { name, value } = e.target;
        // Met à jour l'état en fonction du champ modifié
        setNewAuthor((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Gestion de la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        // Appelle la fonction onAddAuthor avec les données du nouvel auteur
        onAddAuthor(newAuthor);
        // Réinitialise le formulaire après l'ajout
        setNewAuthor({ name: '', biography: '', photoUrl: '' });
    };

    return (
        // Utilisation du composant Modal de MUI pour afficher une modal.
        <Modal open={true} onClose={onClose}>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg">
                    <h2 className="text-lg font-semibold mb-4">Ajouter un nouvel auteur</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Champ pour le nom de l'auteur */}
                        <TextField
                            name="name"
                            label="Nom"
                            value={newAuthor.name}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                        />
                        {/* Champ pour la biographie de l'auteur */}
                        <TextField
                            name="biography"
                            label="Biographie"
                            value={newAuthor.biography}
                            onChange={handleChange}
                            required
                            multiline
                            rows={4}
                            fullWidth
                            margin="normal"
                        />
                        {/* Champ pour l'URL de la photo de l'auteur */}
                        <TextField
                            name="photoUrl"
                            label="URL de la photo"
                            value={newAuthor.photoUrl}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        {/* Boutons pour soumettre ou annuler */}
                        <div className="mt-4 flex justify-end space-x-2">
                            <Button variant="outlined" onClick={onClose}>Annuler</Button>
                            <Button type="submit" variant="contained" color="primary">Ajouter</Button>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default NewAuthorModal;
