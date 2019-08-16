import React from 'react';
import Nav from './Nav';
import { Router as AppRouter } from '/core/app/appRouter'; // because JSX will not parse a lowercase variable correctly

export default function App() {
  return (
    <>
      <h1>The App</h1>
      <Nav />
      <AppRouter />
    </>
  );
}
