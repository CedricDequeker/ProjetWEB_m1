// src/app/books/page.jsx

"use client";

import Layout from '@/components/Layout';
import Breadcrumb from '@/components/Breadcrumb';
import SearchBar from '@/components/SearchBar';
import BookCard from '@/components/BookCard';
import { useState } from 'react';

const BooksPage = () => {
    const breadcrumbPaths = [
        { href: '/', label: 'Accueil' },
        { href: '/books', label: 'Liste des livres' }
    ];

    const [searchTerm, setSearchTerm] = useState('');

    const books = [
        { id: 1, title: 'Livre 1', author: 'Auteur 1' },
        { id: 2, title: 'Livre 2', author: 'Auteur 2' },
        { id: 3, title: 'Livre 3', author: 'Auteur 3' }
    ];

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Layout title="Liste des Livres">
            <Breadcrumb paths={breadcrumbPaths} />
            <SearchBar onSearch={setSearchTerm} />
            <div className="flex flex-wrap">
                {filteredBooks.map((book) => (
                    <BookCard key={book.id} title={book.title} author={book.author} />
                ))}
            </div>
        </Layout>
    );
};

export default BooksPage;
