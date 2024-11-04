"use client";
import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Button, Modal, TextField } from '@mui/material';
import Breadcrumb from '../../../components/Breadcrumb';
import BookCard from '../../../components/BookCard';
import Link from 'next/link';

const AuthorDetailPage = () => {
    const { id } = useParams();
    const router = useRouter();
    const [author, setAuthor] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [updatedAuthor, setUpdatedAuthor] = useState({ name: '', biography: '', photoUrl: '' });

    useEffect(() => {
        const fetchAuthor = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:3001/authors/${id}`);
                const authorData = await response.json();
                console.log(authorData);
                setAuthor(authorData);
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
    }, [id]);

    const handleDeleteAuthor = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:3001/authors/${id}`, { method: 'DELETE' });
            if (response.ok) {
                setDeleteModalOpen(false);
                router.push('/authors');
            } else {
                console.error('Erreur lors de la suppression de l\'auteur');
            }
        } catch (error) {
            console.error("Erreur lors de la suppression de l'auteur :", error);
        }
    };

    const handleUpdateAuthor = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://127.0.0.1:3001/authors/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedAuthor),
            });

            if (response.ok) {
                const updatedData = await response.json();
                setAuthor(updatedData);
                setIsEditing(false);
            } else {
                console.error('Erreur lors de la mise à jour de l\'auteur');
            }
        } catch (error) {
            console.error("Erreur lors de la mise à jour de l'auteur :", error);
        }
    };

    if (!author)
        return (
            <div className="flex items-center justify-center h-screen text-gray-500">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
                <p className="ml-4">Chargement...</p>
            </div>
        );

    return (
        <div className="flex flex-col items-center bg-gray-100 p-6 min-h-screen">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
                <div className="flex flex-col items-center mb-4">
                    {author.photoUrl ? (
                        <img src={author.photoUrl} alt={author.name} className="w-32 h-32 rounded-full object-cover border-2 border-gray-300 mb-4" />
                    ) : (
                        <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 mb-4">Pas de photo</div>
                    )}
                    <h1 className="text-2xl font-bold text-blue-600">{author.name}</h1>
                    <p className="text-gray-700 mt-2 text-center">{author.biography}</p>
                    <Button variant="outlined" color="primary" onClick={() => setIsEditing(!isEditing)} className="mt-4 mr-4">
                        {isEditing ? 'Annuler' : 'Modifier'}
                    </Button>
                    <Button variant="outlined" color="error" onClick={() => setDeleteModalOpen(true)} className="mt-2">
                        Supprimer l'auteur
                    </Button>
                    <Link href="/authors" className="text-blue-500 hover:text-blue-700 mt-4 block">Retour à la liste des auteurs</Link>
                </div>

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

            <h2 className="text-xl font-bold mt-6 text-center">Livres écrits par {author.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 justify-items-center">
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
