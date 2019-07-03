import React from 'react';
import { css } from 'emotion';
import Nav from '/core/Nav';
import HomePage from '/plugins/home/HomePage';
import AboutPage from '/plugins/about/AboutPage';

const styles = css`
  height: 100vh;
  width: 100vw;
  background-color: #333;
  font-family: sans-serif;
  color: #ddd;
`;

import { useRoutes } from 'hookrouter';

const routes = {
  '/': () => <HomePage />,
  '/about': () => <AboutPage />,
};

const Router = () => useRoutes(routes) || 'nothing here';

export default function App() {
  return (
    <div className={styles}>
      <h1>App is alive</h1>
      <Nav />
      <Router />
    </div>
  );
}
