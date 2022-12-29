import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import { CountriesProvider, ThemeProvider } from './context';
import { router } from './routes';
import './styles/main.css';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <CountriesProvider>
          <RouterProvider router={router} />
        </CountriesProvider>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
