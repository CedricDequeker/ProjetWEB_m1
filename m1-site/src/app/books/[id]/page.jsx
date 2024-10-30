
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const BookDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

    // Exemple de données
    const books = [
        { id: 1, title: 'Livre A', price: 20, publicationYear: 2021, author: { name: 'Auteur 1', id: 1 } },
        { id: 2, title: 'Livre B', price: 25, publicationYear: 2020, author: { name: 'Auteur 2', id: 2 } },
    ];

    // Cherche le livre correspondant à l'ID
    const book = books.find(book => book.id === Number(id));

    const reviews = [
        { id: 1, stars: 5, comment: 'Super livre !', date: '2023-10-01' },
        { id: 2, stars: 4, comment: 'Très intéressant', date: '2023-09-15' },
    ];

    if (!book) return <p>Chargement...</p>; // Gérer le cas où le livre n'est pas trouvé

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold">{book.title}</h1>
            <p>Prix : {book.price}€</p>
            <p>Année de publication : {book.publicationYear}</p>
            <p>
                Auteur :{' '}
                <Link href={`/authors/${book.author.id}`}>
                    <a className="text-blue-500 hover:underline">{book.author.name}</a>
                </Link>
            </p>

            <Button color="error" onClick={() => setModalOpen(true)}>
                Supprimer
            </Button>
            <Modal open={isModalOpen} onClose={() => setModalOpen(false)}>
                <div className="p-4 bg-white rounded shadow-lg">
                    <h2>Confirmer la suppression</h2>
                    <p>Êtes-vous sûr de vouloir supprimer ce livre ?</p>
                    <Button color="error" onClick={() => {
                        // Logique pour supprimer le livre
                        setModalOpen(false);
                    }}>
                        Confirmer
                    </Button>
                    <Button onClick={() => setModalOpen(false)}>Annuler</Button>
                </div>
            </Modal>

            <Button variant="outlined" onClick={() => setDrawerOpen(true)}>
                Voir les avis
            </Button>
            <Drawer anchor="right" open={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
                <div className="p-4 w-80">
                    <h2 className="text-xl font-semibold">Avis</h2>
                    {reviews.map(review => (
                        <div key={review.id} className="border-b pb-2 mb-2">
                            <p>Note : {review.stars} étoiles</p>
                            {review.comment && <p>Commentaire : {review.comment}</p>}
                            <p>Date : {review.date}</p>
                        </div>
                    ))}
                </div>
            </Drawer>
        </div>
    );
};

export default BookDetailPage;
