import React from 'react';
import Nav from './Nav';
import { useRoutes } from 'hookrouter';
import routeManager from '/core/router/routeManager';

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
