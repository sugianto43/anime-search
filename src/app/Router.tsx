import { useRoutes } from 'react-router-dom';
import LayoutPage from './Layout';
import { lazy } from 'react';

const HomePage = lazy(() => import('./features/home'));
const SearchPage = lazy(() => import('./features/search'));

const Router = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <LayoutPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: '/search',
          element: <SearchPage />,
        },
      ],
    },
  ]);
  return routes;
};

export default Router;
