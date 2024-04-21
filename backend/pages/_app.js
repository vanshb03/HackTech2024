// _app.js (or _app.tsx for TypeScript)

import React from 'react';
// import '../styles/globals.css'; // Import global styles

function MyApp({ Component, pageProps }) {
  // Add layout or context providers here if needed
  return <Component {...pageProps} />;
}

export default MyApp;
