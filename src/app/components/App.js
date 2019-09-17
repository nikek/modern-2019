import React from 'react';
import AppBar from './AppBar';
import context from '/app/context';

// function useRouter(routeName) {
//   const context = useContext(AppContext);

//   if (!routerName || routerName === '' || routerName === 'app')
//     return context.router.Router;

//   const names = routeName.split('.');

//   if (!names.length) {
//     throw new Error('useRouter requires a dot separated path to the sub route');
//   }

//   let currentRoute;
//   while (names.length) {
//     names.unshift();
//     currentRoute = context.router.subRoutes[names[0]];
//   }

//   return currentRoute;
// }

const AppRouter = context.router.Router;
const AppProvider = context.providers.AppProvider;
export default function App() {
  return (
    <AppProvider>
      <AppBar />
      <AppRouter />
    </AppProvider>
  );
}
