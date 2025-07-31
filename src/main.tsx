import { createRoot } from 'react-dom/client'
import React from 'react';
import App from './App.tsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <HelmetProvider>
            <App />
        </HelmetProvider>
  </React.StrictMode>
);
