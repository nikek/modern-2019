import React from 'react';

const routes = {};

function registerRoute(path, Comp) {
  if (routes[path]) {
    throw Error('Route path already registered: ', path);
    return;
  }
  routes[path] = () => (
    <React.Suspense fallback={'loading'}>
      <Comp />
    </React.Suspense>
  );
}

export default { registerRoute, routes };
