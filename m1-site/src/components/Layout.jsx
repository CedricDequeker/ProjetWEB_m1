import "../app/styles/global.css";
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Utilisation de usePathname
import Breadcrumb from './Breadcrumb'; 

const Layout = ({ title, children }) => {
    const pathname = usePathname(); // Récupérer le chemin actuel

    // Fonction pour générer les chemins de breadcrumb en fonction de la route actuelle
    const generateBreadcrumbs = () => {
        // Découper le pathname pour créer un tableau de chemins
        const paths = pathname.split('/').filter(Boolean);

        // Ajouter un objet pour chaque segment du chemin
        const breadcrumbPaths = paths.map((path, index) => {
            const href = '/' + paths.slice(0, index + 1).join('/');
            return { label: path.charAt(0).toUpperCase() + path.slice(1), href }; // Capitaliser le premier caractère
        });

        // Ajouter un élément pour la page d'accueil (la racine)
        if (pathname !== '/') {
            breadcrumbPaths.unshift({ label: 'Accueil', href: '/' });
        }

        // Gérer le cas de la page des livres avec un ID (ex. /books/123)
        if (pathname.includes('/books/')) {
            const bookId = pathname.split('/').pop(); // Extraire l'ID du livre
            breadcrumbPaths.push({ label: `Livre ${bookId}`, href: pathname });
        }

        return breadcrumbPaths;
    };

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
            
            {/* Ajout du breadcrumb ici */}
            {pathname !== '/' && (
                <div className="container mx-auto px-6 py-2">
                    <Breadcrumb paths={generateBreadcrumbs()} />
                </div>
            )}

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
