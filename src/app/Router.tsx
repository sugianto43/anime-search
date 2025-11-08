import { useRoutes } from 'react-router-dom';
import LayoutPage from './Layout';
import { lazy } from 'react';

const HomePage = lazy(() => import('./features/home'));
const SearchPage = lazy(() => import('./features/search'));
const DetailPage = lazy(() => import('./features/detail'));

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
        {
          path: '/detail/:id',
          element: <DetailPage />,
        },
      ],
    },
  ]);
  return routes;
};

export default Router;
