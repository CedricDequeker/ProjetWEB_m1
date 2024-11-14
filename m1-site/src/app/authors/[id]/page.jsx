"use client";
import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Button, Modal, TextField } from '@mui/material';
import Breadcrumb from '../../../components/Breadcrumb';
import BookCard from '../../../components/BookCard';
import Link from 'next/link';

// Composant principal de la page de détail d'un auteur
const AuthorDetailPage = () => {
    // Récupération de l'ID de l'auteur depuis les paramètres de l'URL
    const { id } = useParams();
    // Hook de navigation pour redirection
    const router = useRouter();
    const { pathname } = router;
    // État pour stocker les données de l'auteur
    const [author, setAuthor] = useState(null);
    // État pour contrôler le mode édition
    const [isEditing, setIsEditing] = useState(false);
    // État pour gérer l'ouverture du modal de suppression
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    // État pour stocker les modifications de l'auteur
    const [updatedAuthor, setUpdatedAuthor] = useState({ name: '', biography: '', photoUrl: '' });

    // Chargement des données de l'auteur lors du montage du composant
    useEffect(() => {
        const fetchAuthor = async () => {
            try {
                // Appel API pour récupérer les données de l'auteur
                const response = await fetch(`http://127.0.0.1:3001/authors/${id}`);
                const authorData = await response.json();
                console.log(authorData);
                setAuthor(authorData); // Mise à jour de l'état `author`
                setUpdatedAuthor({
                    name: authorData.name,
                    biography: authorData.biography,
                    photoUrl: authorData.photoUrl || '',
                });
            } catch (error) {
                console.error("Erreur lors de la récupération des données :", error);
            }
        };

        fetchAuthor();
    }, [id]); // Dépendance de l'ID pour recharger les données si l'ID change

    // Fonction de suppression de l'auteur
    const handleDeleteAuthor = async () => {
        try {
            // Appel API pour supprimer l'auteur
            const response = await fetch(`http://127.0.0.1:3001/authors/${id}`, { method: 'DELETE' });
            if (response.ok) {
                setDeleteModalOpen(false); // Fermeture du modal de suppression
                router.push('/authors'); // Redirection vers la liste des auteurs
            } else {
                console.error('Erreur lors de la suppression de l\'auteur');
            }
        } catch (error) {
            console.error("Erreur lors de la suppression de l'auteur :", error);
        }
    };

    // Fonction de mise à jour de l'auteur
    const handleUpdateAuthor = async (e) => {
        e.preventDefault(); // Empêche le rechargement de la page au submit
        try {
            // Appel API pour mettre à jour les données de l'auteur
            const response = await fetch(`http://127.0.0.1:3001/authors/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedAuthor),
            });

            if (response.ok) {
                const updatedData = await response.json();
                setAuthor(updatedData); // Mise à jour de l'état avec les données modifiées
                setIsEditing(false); // Sort du mode édition
            } else {
                console.error('Erreur lors de la mise à jour de l\'auteur');
            }
        } catch (error) {
            console.error("Erreur lors de la mise à jour de l'auteur :", error);
        }
    };

    // Affichage d'un indicateur de chargement si les données de l'auteur ne sont pas disponibles
    if (!author)
        return (
            <div className="flex items-center justify-center h-screen text-gray-500">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
                <p className="ml-4">Chargement...</p>
            </div>
        );

    return (
        <div className="flex flex-col items-center bg-gray-100 p-6 min-h-screen">
            <div className="absolute top-0 left-0 p-4 mb-10">
            <Breadcrumb paths={[
                { label: 'Accueil', href: '/' },
                { label: 'Auteurs', href: '/authors' },
                { label: author.name, href: pathname }
            ]} />
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
                <div className="flex flex-col items-center mb-4">
                    {/* Affichage de la photo de l'auteur ou d'un espace réservé si absent */}
                    {author.photoUrl ? (
                        <img src={author.photoUrl} alt={author.name} className="w-32 h-32 rounded-full object-cover border-2 border-gray-300 mb-4" />
                    ) : (
                        <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 mb-4">Pas de photo</div>
                    )}
                    {/* Affichage du nom et de la biographie de l'auteur */}
                    <h1 className="text-2xl font-bold text-blue-600">{author.name}</h1>
                    <p className="text-gray-700 mt-2 text-center">{author.biography}</p>
                    {/* Boutons pour modifier ou supprimer l'auteur */}
                    <Button variant="outlined" color="primary" onClick={() => setIsEditing(!isEditing)} className="mt-4 mr-4">
                        {isEditing ? 'Annuler' : 'Modifier'}
                    </Button>
                    <Button variant="outlined" color="error" onClick={() => setDeleteModalOpen(true)} className="mt-2">
                        Supprimer l'auteur
                    </Button>
                    <Link href="/authors" className="text-blue-500 hover:text-blue-700 mt-4 block">Retour à la liste des auteurs</Link>
                </div>

                {/* Formulaire d'édition pour mettre à jour les informations de l'auteur */}
                {isEditing && (
                    <form className="mt-4" onSubmit={handleUpdateAuthor}>
                        <TextField
                            label="Nom"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={updatedAuthor.name}
                            onChange={(e) => setUpdatedAuthor({ ...updatedAuthor, name: e.target.value })}
                        />
                        <TextField
                            label="Biographie"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            multiline
                            rows={4}
                            value={updatedAuthor.biography}
                            onChange={(e) => setUpdatedAuthor({ ...updatedAuthor, biography: e.target.value })}
                        />
                        <TextField
                            label="URL de la photo"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={updatedAuthor.photoUrl}
                            onChange={(e) => setUpdatedAuthor({ ...updatedAuthor, photoUrl: e.target.value })}
                        />
                        <div className="flex justify-end space-x-2 mt-4">
                            <Button type="submit" variant="contained" color="primary">Sauvegarder</Button>
                            <Button onClick={() => setIsEditing(false)} variant="outlined">Annuler</Button>
                        </div>
                    </form>
                )}

                {/* Modal de confirmation de suppression */}
                <Modal open={isDeleteModalOpen} onClose={() => setDeleteModalOpen(false)}>
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white rounded-lg p-4 max-w-sm w-full shadow-lg">
                            <h2 className="text-lg font-semibold mb-2">Confirmer la suppression</h2>
                            <p>Voulez-vous vraiment supprimer cet auteur ? Cette action est irréversible.</p>
                            <div className="mt-4 flex justify-end space-x-2">
                                <Button onClick={() => setDeleteModalOpen(false)} variant="outlined">Annuler</Button>
                                <Button onClick={handleDeleteAuthor} variant="contained" color="error">Supprimer</Button>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>

            {/* Liste des livres de l'auteur */}
            <h2 className="text-xl font-bold mt-6 text-center">Livres écrits par {author.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 justify-items-center">
                {/* Affiche les livres si l'auteur en a, sinon un message d'absence */}
                {author.books && author.books.length > 0 ? author.books.map((book) => (
                    <BookCard key={book.id} book={book} />
                )) : (
                    <p className="text-gray-500">Aucun livre trouvé pour cet auteur.</p>
                )}
            </div>
        </div>
    );
};

export default AuthorDetailPage;
