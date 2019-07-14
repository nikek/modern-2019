import React from 'react';
import { useRoutes } from 'hookrouter';
import { makeRoutable } from '/core/router/routeManager';

const ServicePage = React.lazy(() => import('/plugins/service/ServicePage'));

const plugin = makeRoutable({
  init(app) {
    app.registerRoute('/service*', ServicePage);
  },
});

export default plugin;

export const ServiceRouter = () => {
  return useRoutes(plugin.routes) || 'nothing here';
};
