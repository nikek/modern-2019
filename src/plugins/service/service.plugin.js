import React from 'react';

const ServicePage = React.lazy(() => import('/plugins/service/ServicePage'));

export default function servicePlugin(app) {
  app.registerRoute('/service', ServicePage);
}
