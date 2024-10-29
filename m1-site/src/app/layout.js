// src/app/layout.js
import "../app/styles/global.css";

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body>
                {children}
            </body>
        </html>
    );
}