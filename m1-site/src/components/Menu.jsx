// src/components/Menu.jsx

import Link from 'next/link';

const Menu = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4">
                <li>
                    <Link href="/" className="text-white hover:text-gray-300">Accueil</Link>
                </li>
                <li>
                    <Link href="/books" className="text-white hover:text-gray-300">Liste des livres</Link>
                </li>
                <li>
                    <Link href="/authors" className="text-white hover:text-gray-300">Liste des auteurs</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
