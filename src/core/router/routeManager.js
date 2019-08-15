import React from 'react';

export function makeRoutable(plugin) {
  const routes = {};
  return Object.assign({}, plugin, {
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
}
