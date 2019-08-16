import React from 'react';
import { useRoutes } from 'hookrouter';

// Gives a plugin the ability to register routes.
export function getRoutingCapabilities() {
  const routes = {};
  const routingCapabilities = {
    routes,
    registerRoute(path, Comp, LazyLoadingFallback) {
      if (routes[path]) {
        throw Error('Route path already registered: ', path);
      }

      routes[path] = args => (
        <React.Suspense fallback={LazyLoadingFallback || 'Loading..'}>
          <Comp {...args} />
        </React.Suspense>
      );
    },
    Router() {
      return useRoutes(routes) || 'nothing here 404 or sumthing......';
    },
  };

  return routingCapabilities;
}
