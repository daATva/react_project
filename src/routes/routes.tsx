import React from 'react';
import { Home, News, Test, Shop } from '../pages/index';
import TestDetails from '../components/TestDetails/TestDetails';
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
    path: '/shop',
    element: <Shop />,
  },
  {
    path: '/courses/:id',
    element: <CourseDetails />,
  },
  {
    path: '/test',
    element: <Test />,
  },
  {
    path: '/test/:id',
    element: <TestDetails />,
  },
];
