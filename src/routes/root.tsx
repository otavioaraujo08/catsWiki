import { createBrowserRouter } from 'react-router-dom';
import { Header } from '../layout/Header';
import { Home } from '../pages/home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
