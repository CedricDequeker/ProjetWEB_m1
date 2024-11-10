// src/app/books/[id]/page.jsx

"use client";
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Drawer, Button, IconButton, Modal, Rating } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EditBookModal from '../../../components/EditBookModal';

const BookDetailPage = () => {
    const { id } = useParams();
    const router = useRouter();
    const [book, setBook] = useState(null);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchBook = async () => {
            const response = await fetch(`http://127.0.0.1:3001/books/${id}`);
            const data = await response.json();
            setBook(data);

            // Initialiser les champs d'édition
            setTitle(data.title);
            setPublicationDate(data.publicationDate);
            setPrice(data.price);
            setAuthorId(data.author?.id);

            // Charger les avis du livre
            const reviewsResponse = await fetch(`http://127.0.0.1:3001/reviews/book/${id}`);
            const reviewsData = await reviewsResponse.json();
            setReviews(reviewsData);

        };
        fetchBook();
    }, [id]);

    // Charger les avis lorsque le livre est récupéré
    useEffect(() => {
        const fetchReviews = async () => {
            const response = await fetch(`http://127.0.0.1:3001/books/${id}/reviews`);
            const data = await response.json();
            setReviews(data);
            };

            if (book) {
                fetchReviews();

        }
    }, [book, id]); // Dépend des changements de `book` et `id`


    const handleDeleteBook = async () => {
        await fetch(`http://127.0.0.1:3001/books/${id}`, {
            method: 'DELETE',
        });
        setDeleteModalOpen(false);
        router.push('/books');
    };

    const handleEditBook = async (editBookData) => {
        const response = await fetch(`http://127.0.0.1:3001/books/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editBookData),
        });
    
        if (!response.ok) {
            console.error("Erreur lors de la mise à jour du livre");
            return;
        }
    
        // Met à jour localement les données du livre après la modification
        const updatedBook = await response.json();
        setBook(updatedBook); 
        router.push(`/books/${id}`); 
    };

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
            <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
                <h1 className="text-3xl font-bold mb-4 text-blue-600">{book.title}</h1>
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
                <p className="text-lg text-gray-700 mb-2"><span className="font-semibold">Date de publication :</span> {book.publicationDate}</p>
                <p className="text-lg text-gray-700 mb-4"><span className="font-semibold">Prix :</span> {book.price} €</p>

                <Button variant="outlined" color="primary" onClick={() => setEditModalOpen(true)} style={{ marginRight: '10px' }}>
                    Modifier le livre
                </Button>

                <Button variant="outlined" color="error" onClick={() => setDeleteModalOpen(true)}>
                    Supprimer le livre
                </Button>
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

                <EditBookModal
                    isOpen={isEditModalOpen}
                    onClose={() => setEditModalOpen(false)}
                    book={book} 
                    onEditBook={handleEditBook} 
                />

                <Button variant="outlined" color="primary" onClick={() => setDrawerOpen(true)}>
                    Voir les avis
                </Button>

                <Link href="/books" className="text-blue-500 hover:text-blue-700 mt-4 block">Retour à la liste des livres</Link>
            </div>
            {/* Drawer pour afficher les avis */}
            <Drawer anchor="right" open={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
                <div className="w-80 p-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold">Avis</h2>
                        <IconButton onClick={() => setDrawerOpen(false)}>
                            <CloseIcon />
                        </IconButton>
                    </div>
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
                </div>
            </Drawer>
        </div>
    );
};

export default BookDetailPage;