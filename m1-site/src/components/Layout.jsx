// src/components/Layout.jsx
import "../app/styles/global.css";


import Link from 'next/link';

const Layout = ({ title, children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <header className="bg-blue-600 text-white">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-lg font-semibold">
                        <Link href="/" className="text-white hover:text-blue-200">
                            Ma Bibliothèque
                        </Link>
                    </div>
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="/" className="hover:text-blue-300 transition">Accueil</Link>
                        </li>
                        <li>
                            <Link href="/books" className="hover:text-blue-300 transition">Liste des livres</Link>
                        </li>
                        <li>
                            <Link href="/authors" className="hover:text-blue-300 transition">Liste des auteurs</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="flex-grow container mx-auto p-6">
                {title && <h1 className="text-2xl font-bold mb-4">{title}</h1>}
                {children}
            </main>
            <footer className="bg-gray-800 text-white text-center p-4">
                &copy; {new Date().getFullYear()} Ma Bibliothèque
            </footer>
        </div>
    );
};

export default Layout;
