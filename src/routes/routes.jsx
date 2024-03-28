// routes.js
import { Home, News } from '../pages/index';
import { CourseDetails } from '../components/index';

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/news',
    element: <News />,
  },
  {
    path: '/courses/:id',
    element: <CourseDetails />,
  },
];
