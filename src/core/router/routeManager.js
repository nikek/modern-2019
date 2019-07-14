import React from 'react';

export const makeRoutable = o => {
  const routes = {};
  return Object.assign({}, o, {
    routes,
    registerRoute(path, Comp) {
      if (routes[path]) {
        throw Error('Route path already registered: ', path);
      }
      routes[path] = () => (
        <React.Suspense fallback={'loading'}>
          <Comp />
        </React.Suspense>
      );
    },
  });
};
