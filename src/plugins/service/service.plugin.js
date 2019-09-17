import React from 'react';

const ServicePage = React.lazy(() => import('/plugins/service/ServicePage'));

export default {
  init({ router }) {
    router
      .registerRedirect('/service', '/service/')
      .registerRoute('/service/', ServicePage)
      .registerRoute('/service/:id*', ServicePage);

    router.registerSubRoute('service');
  },
};
