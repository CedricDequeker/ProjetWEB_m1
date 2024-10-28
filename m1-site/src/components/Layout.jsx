// src/components/Layout.jsx

import Link from 'next/link';

const Layout = ({ children, title }) => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <header className="bg-blue-600 text-white p-4 shadow-md">
                <nav className="container mx-auto">
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/" className="hover:underline">Accueil</Link>
                        </li>
                        <li>
                            <Link href="/books" className="hover:underline">Liste des livres</Link>
                        </li>
                        <li>
                            <Link href="/authors" className="hover:underline">Liste des auteurs</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="flex-grow container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">{title}</h1>
                {children}
            </main>
            <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
                &copy; {new Date().getFullYear()} Votre Nom
            </footer>
        </div>
    );
};

export default Layout;
