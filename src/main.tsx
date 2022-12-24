import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import './assets/styles/main.css';
import { Layout } from './components/layout';
import { ThemeProvider } from './context';
import Country from './routes/country';
import Root from './routes/root';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Root />} />

      <Route path='countries'>
        <Route path=':id' element={<Country />} />
        <Route path='logout' />
      </Route>
    </Route>
  )
);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
