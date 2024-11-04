import React from 'react';
import { useRouter } from 'next/navigation';

const AuthorCard = ({ id, name, photo, bookCount, averageRating }) => {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center p-4 border rounded-lg shadow hover:scale-105 hover:shadow-lg transition min-h-[200px] min-w-[250px]">
            {photo ? (
                <img src={photo} alt={`${name} photo`} className="w-24 h-24 rounded-full mb-2" />
            ) : (
                <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-gray-700">Pas de photo</div>
            )}
            <div className="ml-4 flex-grow">
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="text-gray-600">Livres écrits : {bookCount}</p>
                <p className="text-gray-600">Note moyenne : {averageRating !== 'N/A' ? parseFloat(averageRating).toFixed(1) : 'N/A'}</p>
            </div>
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
