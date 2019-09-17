import React from 'react';
import { useRoutes, useRedirect } from 'hookrouter';

// Gives a plugin the ability to register routes.
export function getRoutingCapabilities() {
  const routes = {};
  const subRoutes = {};
  const orphanSubRoutes = {};
  const redirects = [];
  const routingCapabilities = {
    routes,
    subRoutes,
    redirects,
    subRoute(name) {
      if (subRoutes[name]) {
        return subRoutes[name];
      }

      if (!orphanSubRoutes[name]) {
        orphanSubRoutes[name] = getRoutingCapabilities();
      }

      return orphanSubRoutes[name];
    },
    registerSubRoute(name) {
      if (subRoutes[name]) {
        throw new Error('Sub route already registered');
      } else if (orphanSubRoutes[name]) {
        subRoutes[name] = orphanSubRoutes[name];
        delete orphanSubRoutes[name];
      } else {
        subRoutes[name] = getRoutingCapabilities();
      }

      return subRoutes[name];
    },
    registerRoute(path, To, LazyLoadingFallback) {
      if (routes[path]) {
        console.log(path, routes[path]);
        throw Error('Route path already registered: ', path);
      }
      routes[path] = fromRouter => fromProps => {
        return (
          <React.Suspense fallback={LazyLoadingFallback || 'Loading..'}>
            <To {...fromRouter} {...fromProps} />
          </React.Suspense>
        );
      };
      return routingCapabilities;
    },
    registerRedirect(from, to) {
      redirects.push({ from, to });
      return routingCapabilities;
    },
    areThereRouteOrphansLeft(currentName) {
      // collect all orphans of this plus subroutes
      const allOrphanRoutes = {};
      if (Object.entries(orphanSubRoutes).length) {
        allOrphanRoutes[currentName] = orphanSubRoutes;
      }

      Object.assign(
        allOrphanRoutes,
        ...Object.entries(subRoutes).map(([n, r]) =>
          r.areThereRouteOrphansLeft(n)
        )
      );

      return Object.keys(allOrphanRoutes).length;
    },
    Router(props) {
      redirects.forEach(r => useRedirect(r.from, r.to));
      return useRoutes(routes)(props) || 'nothing here 404 or sumthing......';
    },
  };

  return routingCapabilities;
}
