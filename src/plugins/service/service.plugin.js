import React from 'react';
import { useRoutes } from 'hookrouter';

const ServicePage = React.lazy(() => import('/plugins/service/ServicePage'));

const routes = {};

export default {
  init(app) {
    app.registerRoute('/service*', ServicePage);
  },
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
};

export const ServiceRouter = () => {
  console.log(routes);
  return useRoutes(routes) || 'nothing here';
};
