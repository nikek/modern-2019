import React from 'react';
import Nav from '/core/Nav';
import HomePage from '/plugins/home/HomePage';
import AboutPage from '/plugins/about/AboutPage';
import { useRoutes } from 'hookrouter';

const routes = {
  '/': () => <HomePage />,
  '/about': () => <AboutPage />,
};

const Router = () => useRoutes(routes) || 'nothing here';

export default function App() {
  return (
    <>
      <h1>App is alive</h1>
      <Nav />
      <Router />
    </>
  );
}
