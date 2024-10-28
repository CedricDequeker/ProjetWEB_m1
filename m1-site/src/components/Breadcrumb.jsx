// src/components/Breadcrumb.jsx

import Link from 'next/link';

const Breadcrumb = ({ paths }) => {
    return (
        <nav className="text-gray-600 mb-4">
            <ol className="list-decimal list-inside">
                {paths.map((path, index) => (
                    <li key={index} className="inline">
                        <Link href={path.href} className="hover:underline">
                            {path.label}
                        </Link>
                        {index < paths.length - 1 && ' > '} {/* Affiche " > " entre les éléments */}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
