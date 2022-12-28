import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components';
import { CountriesProvider, ThemeProvider } from './context';
import { Country, countryLoader, ErrorPage, Home } from './routes';
import './styles/main.css';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        // loader: homeLoader,
      },
      {
        path: 'countries/:countryId',
        element: <Country />,
        loader: countryLoader,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <CountriesProvider>
        <RouterProvider router={router} />
      </CountriesProvider>
    </ThemeProvider>
  </React.StrictMode>
);
