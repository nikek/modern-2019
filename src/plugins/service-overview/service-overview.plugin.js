import React from 'react';
const ServiceOverviewPage = React.lazy(() =>
  import('/plugins/service-overview/ServiceOverviewPage')
);

export default {
  init({ router }) {
    router.subRoute('service').registerRoute('/', ServiceOverviewPage);
  },
};
