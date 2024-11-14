import React from 'react';
import { useRouter } from 'next/navigation';

// Composant pour afficher une carte d'auteur avec ses informations de base
const AuthorCard = ({ id, name, photo, bookCount, averageRating }) => {
    const router = useRouter(); // Initialisation de useRouter pour la navigation

    return (
        <div className="flex flex-col items-center p-4 border rounded-lg shadow hover:scale-105 hover:shadow-lg transition min-h-[200px] min-w-[250px]">
            {/* Affichage de la photo de l'auteur si disponible */}
            {photo ? (
                <img src={photo} alt={`${name} photo`} className="w-24 h-24 rounded-full mb-2" />
            ) : (
                // Placeholder pour les auteurs sans photo
                <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-gray-700">
                    Pas de photo
                </div>
            )}
            {/* Informations textuelles sur l'auteur */}
            <div className="ml-4 flex-grow">
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="text-gray-600">Livres écrits : {bookCount}</p>
                {/* Affiche la note moyenne, avec une décimale, ou "N/A" si non disponible */}
                <p className="text-gray-600">
                    Note moyenne : {averageRating !== 'N/A' ? parseFloat(averageRating).toFixed(1) : 'N/A'}
                </p>
            </div>
            {/* Bouton pour accéder à la page des détails de l'auteur */}
            <button
                onClick={() => router.push(`/authors/${id}`)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
            >
                Voir Détails
            </button>
        </div>
    );
};

export default AuthorCard;
