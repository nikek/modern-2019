import React from 'react';
import { registerRoute, registerRedirect } from '/core/app/appRouter';

const ServicePage = React.lazy(() => import('/plugins/service/ServicePage'));

export default {
  init() {
    registerRedirect('/service', '/service/');
    registerRoute('/service/', ServicePage);
    registerRoute('/service/:id*', ServicePage);
  },
};
