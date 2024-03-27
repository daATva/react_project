// routes.js
import { Home, News } from '../pages/index';
import { CourseDetails } from '../components/index';

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/News',
    element: <News />,
  },
  {
    path: '/courses/:id',
    element: <CourseDetails />,
  },
];
