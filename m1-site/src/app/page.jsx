// src/app/page.jsx

"use client";

import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';

const HomePage = () => {
    const breadcrumbPaths = [{ href: '/', label: 'Accueil' }];

    return (
        <Layout title="Page d'Accueil">
            <Breadcrumb paths={breadcrumbPaths} />
            <p className="text-lg text-gray-700">
                Bienvenue sur notre site. Explorez notre collection de livres et d'auteurs.
            </p>
        </Layout>
    );
};

export default HomePage;
