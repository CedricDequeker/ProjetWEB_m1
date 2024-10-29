// src/components/AuthorCard.jsx
import React from 'react';

const AuthorCard = ({ name, photo, bookCount, averageRating }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4">
            <img src={photo} alt={`Photo de ${name}`} className="w-16 h-16 rounded-full object-cover" />
            <div>
                <h3 className="text-lg font-semibold">{name}</h3>
                <p>Livres écrits : {bookCount}</p>
                <p>Note moyenne : {averageRating} ⭐</p>
            </div>
        </div>
    );
};

export default AuthorCard;
