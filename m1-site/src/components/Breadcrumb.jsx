import Link from 'next/link';

// Composant Breadcrumb pour afficher une navigation hiérarchique
const Breadcrumb = ({ paths }) => {
    return (
        <nav className="text-gray-600 mb-4">
            <ol className="list-decimal list-inside">
                {paths.map((path, index) => (
                    <li key={index} className="inline">
                        {/* Lien vers chaque élément du breadcrumb */}
                        <Link href={path.href || '#'} className="hover:underline">
                            {path.label}
                        </Link>
                        {/* Affiche le séparateur " > " entre les éléments, sauf pour le dernier */}
                        {index < paths.length - 1 && ' > '}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
