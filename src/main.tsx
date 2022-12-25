import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components';
import { ThemeProvider } from './context';
import { Country, countryLoader, ErrorPage, Root, rootLoader } from './routes';
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
        element: <Root />,
        loader: rootLoader,
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
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
