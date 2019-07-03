import React from 'react';
import Nav from './Nav';
import HomePage from '/plugins/home/HomePage';
import AboutPage from '/plugins/about/AboutPage';
import { useRoutes } from 'hookrouter';
import routeManager from '../routeManager';

routeManager.registerRoute('/', () => <HomePage />);
routeManager.registerRoute('/about', () => <AboutPage />);

const Router = () => useRoutes(routeManager.routes) || 'nothing here';

export default function App() {
  return (
    <>
      <h1>App is alive</h1>
      <Nav />
      <Router />
    </>
  );
}
