// src/app/_app.js

import '../styles/global.css'; // Assurez-vous que ce chemin est correct

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
