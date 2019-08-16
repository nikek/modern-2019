import React from 'react';
import AppBar from './AppBar';
import { Router as AppRouter } from '/core/app/appRouter';

export default function App() {
  return (
    <>
      <AppBar />
      <AppRouter />
    </>
  );
}
