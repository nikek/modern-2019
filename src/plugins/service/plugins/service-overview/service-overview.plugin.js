import React from 'react';

const ServiceOverviewPage = React.lazy(() =>
  import('/plugins/service/plugins/service-overview/ServiceOverviewPage')
);

export default {
  init(app) {
    console.log(app);
    app.plugins.service.registerRoute('/', ServiceOverviewPage);
  },
};
