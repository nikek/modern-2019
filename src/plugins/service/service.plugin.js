import React from 'react';
import { registerRoute } from '/core/app/appRouter';

const ServicePage = React.lazy(() => import('/plugins/service/ServicePage'));

export default {
  init() {
    registerRoute('/service*', ServicePage);
  },
};
