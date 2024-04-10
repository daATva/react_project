// routes.tsx
import React from 'react';
import { Home, News } from '../pages/index';
import { CourseDetails } from '../components/index';

interface RouteType {
  path: string;
  element: React.ReactNode;
}

export const routes: RouteType[] = [
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
