"use client";

import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb";
import Link from "next/link";  // Importation du composant Link

const HomePage = () => {
  const [popularBooks, setPopularBooks] = useState([]);

  // Fonction pour récupérer les livres populaires
  const fetchPopularBooks = async () => {
    try {
      // Récupérer la liste des livres
      const booksResponse = await fetch("http://localhost:3001/books");
      const books = await booksResponse.json();

      // Tableau pour stocker les livres avec leurs avis et moyennes
      const booksWithRatings = [];

      for (let book of books) {
        // Récupérer les avis pour chaque livre
        const reviewsResponse = await fetch(`http://localhost:3001/reviews/book/${book.id}`);
        const reviews = await reviewsResponse.json();

        // Calculer la moyenne des avis
        const averageRating = reviews.length
          ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
          : 0;

        booksWithRatings.push({ ...book, averageRating });
      }

      // Trier les livres par moyenne d'avis et ne garder que les 3 meilleurs
      const sortedBooks = booksWithRatings
        .sort((a, b) => b.averageRating - a.averageRating)
        .slice(0, 3);

      setPopularBooks(sortedBooks);
    } catch (error) {
      console.error("Erreur lors de la récupération des livres populaires", error);
    }
  };

  useEffect(() => {
    fetchPopularBooks();
  }, []);

  return (
    <Layout title="Page d'Accueil">
      <p className="text-lg text-gray-700 mb-4">
        Bienvenue sur notre site. <br />
        Explorez notre collection de livres et d'auteurs.
      </p>

      <h2 className="text-xl font-bold mt-6">Nos Livres Populaires :</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {popularBooks.map((book) => (
          <Link href={`/books/${book.id}`} key={book.id}>
            <div className="bg-white shadow-md rounded-lg p-4 cursor-pointer">
              {/* Suppression de l'image de l'auteur */}
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-gray-600">Par {book.author.name}</p>
              <p className="text-gray-700 mt-2">{book.description || "Description non disponible."}</p>
              <p className="text-gray-600 mt-2">
                Note moyenne : {book.averageRating.toFixed(1)} ⭐
              </p>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="text-xl font-bold mt-6">À Propos de Nous :</h2>
      <p className="text-lg text-gray-700 mt-2">
        Nous sommes une bibliothèque passionnée par les livres et la culture. Notre mission est de promouvoir la lecture et de soutenir les auteurs locaux. 
        Rejoignez-nous pour des événements, des lectures et plus encore !
      </p>

      <h2 className="text-xl font-bold mt-6">Notre Emplacement :</h2>
      <div className="mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48364.44504615424!2d-74.02473201279236!3d40.74491425414421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2590099a8a8a9%3A0x3b51df6e509a734c!2sNew%20York%20Public%20Library!5e0!3m2!1sfr!2sfr!4v1730741746502!5m2!1sfr!2sfr"
          width="600"
          height="450"
          className="w-full rounded-md"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </Layout>
  );
};

export default HomePage;
