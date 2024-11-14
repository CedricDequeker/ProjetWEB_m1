"use client";

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Drawer, Button, IconButton, Modal, Rating } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EditBookModal from '../../../components/EditBookModal';
import Breadcrumb from '../../../components/Breadcrumb';

// Composant principal pour la page de détails du livre
const BookDetailPage = () => {
    // Récupération de l'ID du livre depuis les paramètres d'URL
    const { id } = useParams();
    // Utilisation du hook de navigation
    const router = useRouter();
    const { pathname } = router;

    // États pour stocker les informations du livre, avis, et autres informations d'affichage
    const [book, setBook] = useState(null);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false); // contrôle d'affichage du modal de suppression
    const [isEditModalOpen, setEditModalOpen] = useState(false);     // contrôle d'affichage du modal d'édition
    const [isDrawerOpen, setDrawerOpen] = useState(false);           // contrôle d'affichage du drawer des avis
    const [reviews, setReviews] = useState([]);                      // liste des avis du livre

    // États pour gérer l'ajout de commentaire
    const [newComment, setNewComment] = useState(''); // commentaire en cours de saisie
    const [rating, setRating] = useState(0);          // note en cours de saisie
    const [error, setError] = useState('');           // gestion des erreurs

    // Chargement des données du livre et des avis au montage initial du composant
    useEffect(() => {
        const fetchBook = async () => {
            // Récupère les informations du livre via une requête API
            const response = await fetch(`http://127.0.0.1:3001/books/${id}`);
            const data = await response.json();
            setBook(data);

            // Récupère les avis pour le livre via une requête API
            const reviewsResponse = await fetch(`http://127.0.0.1:3001/reviews/book/${id}`);
            const reviewsData = await reviewsResponse.json();
            setReviews(reviewsData);
        };
        fetchBook();
    }, [id]);

    // Suppression d'un livre et redirection vers la liste des livres après suppression
    const handleDeleteBook = async () => {
        await fetch(`http://127.0.0.1:3001/books/${id}`, { method: 'DELETE' });
        setDeleteModalOpen(false); // fermeture du modal de suppression
        router.push('/books');     // redirection vers la page des livres
    };

    // Ajout d'un commentaire pour le livre
    const handleAddComment = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:3001/reviews/book/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ comment: newComment, rating }), // envoi du commentaire et de la note
            });

            if (response.ok) {
                const addedReview = await response.json();
                setReviews([...reviews, addedReview]); // mise à jour de la liste des avis
                setNewComment(''); // réinitialisation du champ de commentaire
                setRating(0);      // réinitialisation de la note
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Une erreur est survenue.');
            }
        } catch (error) {
            console.error(`Erreur lors de l'ajout du commentaire :`, error);
            setError('Une erreur est survenue.');
        }
    };

    // Mise à jour des informations d'un livre
    const handleEditBook = async (editBookData) => {
        const response = await fetch(`http://127.0.0.1:3001/books/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editBookData), // envoi des données de mise à jour
        });

        if (!response.ok) {
            console.error("Erreur lors de la mise à jour du livre");
            return;
        }

        const updatedBook = await response.json();
        setBook(updatedBook); // mise à jour de l'état du livre
        router.push(`/books/${id}`); // redirection vers la page mise à jour
    };

    // Affiche un indicateur de chargement si les données du livre ne sont pas encore disponibles
    if (!book) {
        return (
          <div className="flex items-center justify-center h-screen text-gray-500">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
            <p className="ml-4">Chargement...</p>
          </div>
        );
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="absolute top-0 left-0 p-4">
            <Breadcrumb paths={[
                { label: 'Accueil', href: '/' },
                { label: 'Livres', href: '/books' },
                { label: book.title, href: pathname }
            ]} />
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
                {/* Titre du livre */}
                <h1 className="text-3xl font-bold mb-4 text-blue-600">{book.title}</h1>
                
                {/* Informations sur l'auteur du livre */}
                <p className="text-lg text-gray-700 mb-2">
                    <span className="font-semibold">Auteur :</span>{" "}
                    {book.author ? (
                        <Link href={`/authors/${book.author.id}`} className="text-blue-500 hover:text-blue-700">
                            {book.author.name}
                        </Link>
                    ) : (
                        "Non renseigné"
                    )}
                </p>
                
                {/* Informations supplémentaires du livre */}
                <p className="text-lg text-gray-700 mb-2"><span className="font-semibold">Date de publication :</span> {book.publicationDate}</p>
                <p className="text-lg text-gray-700 mb-4"><span className="font-semibold">Prix :</span> {book.price} €</p>

                {/* Boutons pour modifier et supprimer le livre */}
                <Button variant="outlined" color="primary" onClick={() => setEditModalOpen(true)} style={{ marginRight: '10px' }}>
                    Modifier le livre
                </Button>
                <Button variant="outlined" color="error" onClick={() => setDeleteModalOpen(true)}>
                    Supprimer le livre
                </Button>

                {/* Modal de confirmation de suppression */}
                <Modal open={isDeleteModalOpen} onClose={() => setDeleteModalOpen(false)}>
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white rounded-lg p-4 max-w-sm w-full">
                            <h2 className="text-lg font-semibold">Confirmer la suppression</h2>
                            <p>Voulez-vous vraiment supprimer ce livre ? Cette action est irréversible.</p>
                            <div className="mt-4 flex justify-end space-x-2">
                                <Button onClick={() => setDeleteModalOpen(false)} variant="outlined">
                                    Annuler
                                </Button>
                                <Button onClick={handleDeleteBook} variant="contained" color="error">
                                    Supprimer
                                </Button>
                            </div>
                        </div>
                    </div>
                </Modal>

                {/* Modal pour l'édition du livre */}
                <EditBookModal
                    isOpen={isEditModalOpen}
                    onClose={() => setEditModalOpen(false)}
                    book={book} 
                    onEditBook={handleEditBook} 
                />

                {/* Bouton pour afficher les avis dans un drawer */}
                <Button variant="outlined" color="primary" onClick={() => setDrawerOpen(true)}>
                    Voir les avis
                </Button>

                {/* Lien de retour à la liste des livres */}
                <Link href="/books" className="text-blue-500 hover:text-blue-700 mt-4 block">Retour à la liste des livres</Link>
            </div>

            {/* Drawer pour afficher les avis et ajouter un commentaire */}
            <Drawer anchor="right" open={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
                <div className="w-80 p-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold">Avis</h2>
                        <IconButton onClick={() => setDrawerOpen(false)}>
                            <CloseIcon />
                        </IconButton>
                    </div>

                    {/* Liste des avis existants */}
                    {reviews.length > 0 ? (
                        <div>
                            {reviews.map((review) => (
                                <div key={review.id} className="border-b py-2">
                                    <Rating value={review.rating} readOnly />
                                    <p className="text-gray-600">{review.comment || "Pas de commentaire"}</p>
                                    <p className="text-sm text-gray-400">
                                        {new Date(review.createdAt).toLocaleDateString()}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500">Aucun avis pour ce livre.</p>
                    )}

                    {/* Formulaire d'ajout de commentaire */}
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold mb-2">Ajouter un commentaire</h3>
                        <textarea
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Écrivez votre commentaire ici..."
                            className="w-full p-2 border rounded mb-2"
                        />
                        <div className="mb-2">
                            <Rating
                                value={rating}
                                onChange={(e, newValue) => setRating(newValue)}
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <button
                            onClick={handleAddComment}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Publier
                        </button>
                    </div>
                </div>
            </Drawer>
        </div>
    );
};

export default BookDetailPage;
