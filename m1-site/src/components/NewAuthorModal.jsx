"use client";

import React, { useState } from 'react';
import { Modal, Button, TextField } from '@mui/material';

const NewAuthorModal = ({ onClose, onAddAuthor }) => {
    const [newAuthor, setNewAuthor] = useState({
        name: '',
        biography: '',
        photoUrl: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewAuthor((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddAuthor(newAuthor); // Appelle la fonction pour ajouter l'auteur
        setNewAuthor({ name: '', biography: '', photoUrl: '' }); // Réinitialise le formulaire
    };

    return (
        <Modal open={true} onClose={onClose}>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg">
                    <h2 className="text-lg font-semibold mb-4">Ajouter un nouvel auteur</h2>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            name="name"
                            label="Nom"
                            value={newAuthor.name}
                            onChange={handleChange}
                            required
                            fullWidth
                            margin="normal"
                        />
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
                        <TextField
                            name="photoUrl"
                            label="URL de la photo"
                            value={newAuthor.photoUrl}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
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
