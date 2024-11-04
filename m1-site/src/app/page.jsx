"use client";

import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';

const HomePage = () => {
    const breadcrumbPaths = [{ href: '/', label: 'Accueil' }];

    const popularBooks = [
        {
            title: 'Le Petit Prince',
            author: 'Antoine de Saint-Exupéry',
            description: 'Un conte poétique et philosophique sur un jeune prince qui voyage de planète en planète.',
            imageUrl: 'https://static.fnac-static.com/multimedia/PE/Images/FR/NR/a6/d8/1d/1956006/1507-1/tsp20241002075505/Le-Petit-Prince.jpg'
        },
        {
            title: '1984',
            author: 'George Orwell',
            description: 'Un roman dystopique sur un futur totalitaire où la liberté de pensée est supprimée.',
            imageUrl: 'https://m.media-amazon.com/images/I/71rpa1-kyvL._AC_UF1000,1000_QL80_.jpg'
        },
        {
            title: 'L\'Alchimiste',
            author: 'Paulo Coelho',
            description: 'Un roman inspirant sur un berger andalou qui rêve de découvrir un trésor au pied des pyramides.',
            imageUrl: 'https://m.media-amazon.com/images/I/61QD6IeAA7L._AC_UF1000,1000_QL80_.jpg'
        }
    ];

    return (
        <Layout title="Page d'Accueil">
            <Breadcrumb paths={breadcrumbPaths} />
            <p className="text-lg text-gray-700 mb-4">
                Bienvenue sur notre site. Explorez notre collection de livres et d'auteurs.
            </p>

            <h2 className="text-xl font-bold mt-6">Livres Populaires</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {popularBooks.map((book, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-4">
                        <img src={book.imageUrl} alt={book.title} className="w-full h-48 object-cover rounded-md mb-4" />
                        <h3 className="text-lg font-semibold">{book.title}</h3>
                        <p className="text-gray-600">Par {book.author}</p>
                        <p className="text-gray-700 mt-2">{book.description}</p>
                    </div>
                ))}
            </div>
            
            <h2 className="text-xl font-bold mt-6">À Propos de Nous</h2>
            <p className="text-lg text-gray-700 mt-2">
                Nous sommes une bibliothèque passionnée par les livres et la culture. Notre mission est de promouvoir la lecture et de soutenir les auteurs locaux. 
                Rejoignez-nous pour des événements, des lectures et plus encore !
            </p>

            <h2 className="text-xl font-bold mt-6">Notre Emplacement</h2>
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
