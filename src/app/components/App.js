import React from 'react';
import AppBar from './AppBar';
import { AppProvider, Router as AppRouter } from '/app/app.plugin';

export default function App() {
  return (
    <AppProvider>
      <AppBar />
      <AppRouter />
    </AppProvider>
  );
}
