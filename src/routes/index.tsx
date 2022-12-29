import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { Layout } from '../components';
import { ErrorPage } from './404';
import { Country, countryLoader } from './country';
import { Home } from './home';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='countries'>
        <Route path=':countryId' element={<Country />} loader={countryLoader} />
      </Route>

      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
);
