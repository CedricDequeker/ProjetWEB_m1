// src/app/authors/page.jsx

"use client";

import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import SearchBar from '@/components/SearchBar';
import { useState } from 'react';

const AuthorsPage = () => {
    const breadcrumbPaths = [
        { href: '/', label: 'Accueil' },
        { href: '/authors', label: 'Liste des auteurs' }
    ];

    const [searchTerm, setSearchTerm] = useState('');

    // Exemple de données d'auteurs
    const authors = [
        { id: 1, name: 'Auteur 1' },
        { id: 2, name: 'Auteur 2' },
        { id: 3, name: 'Auteur 3' }
    ];

    const filteredAuthors = authors.filter(author =>
        author.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Layout title="Liste des Auteurs"> {/* Passer le titre ici */}
            <Breadcrumb paths={breadcrumbPaths} />
            <SearchBar onSearch={setSearchTerm} />
            <div className="flex flex-wrap">
                {filteredAuthors.map((author) => (
                    <div key={author.id} className="border p-4 m-2">
                        <h2 className="text-lg font-semibold">{author.name}</h2>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default AuthorsPage;
