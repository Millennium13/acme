import React from 'react';
import { Navigate } from 'react-router-dom';
import Users from '../views/Users/List';
import Home from '../containers/Home';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Home_1 from '../pages/home_1';
import About from '../pages/about';
import Shop from '../pages/shop';
import Donate from '../pages/donate';
import Contact from '../pages/contact';
import Shop_Merch from '../pages/shop_merch';
import Read_Our_Stat from '../pages/read_our_stat';
import Announcement from '../pages/announcement';

export const routes = [
  {
    // element: <Home />,
    children: [
      { index: true, element: <Home /> },
      { path: '/users', element: <Users /> },

      { path: '/home_1', element: <Home_1 /> },
      { path: '/about', element: <About /> },
      { path: '/shop', element: <Shop /> },
      { path: '/donate', element: <Donate /> },
      { path: '/contact', element: <Contact /> },
      { path: '/shop_merch', element: <Shop_Merch /> },
      { path: '/read_our_stat', element: <Read_Our_Stat /> },
      { path: '/announcement', element: <Announcement /> },

      { path: '*', element: <Navigate to='/' /> },
    ],
  },
];
