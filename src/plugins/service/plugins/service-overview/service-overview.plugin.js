import React from 'react';
import { registerRoute } from '/plugins/service/serviceRouter';
const ServiceOverviewPage = React.lazy(() =>
  import('/plugins/service/plugins/service-overview/ServiceOverviewPage')
);

export default {
  init() {
    registerRoute('/', ServiceOverviewPage);
  },
};
