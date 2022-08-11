import React from 'react';

import { useRoutes } from 'react-router-dom';
import { routes } from '../../routes/routes';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default () => {
  const content = useRoutes(routes);
  return <><Navbar />{content}<Footer /></>;
};