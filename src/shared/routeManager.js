import React from 'react';
import { useRoutes, useRedirect } from 'hookrouter';

// Gives a plugin the ability to register routes.
export function getRoutingCapabilities() {
  const routes = {};
  const redirects = [];
  const routingCapabilities = {
    routes,
    redirects,
    registerRoute(path, To, LazyLoadingFallback) {
      if (routes[path]) {
        throw Error('Route path already registered: ', path);
      }
      routes[path] = fromRouter => fromProps => {
        return (
          <React.Suspense fallback={LazyLoadingFallback || 'Loading..'}>
            <To {...fromRouter} {...fromProps} />
          </React.Suspense>
        );
      };
    },
    registerRedirect(from, to) {
      redirects.push({ from, to });
    },
    Router(props) {
      redirects.forEach(r => useRedirect(r.from, r.to));
      return useRoutes(routes)(props) || 'nothing here 404 or sumthing......';
    },
  };

  return routingCapabilities;
}
