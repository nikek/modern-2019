import React from 'react';

const CapacityPage = React.lazy(() =>
  import('/plugins/service/plugins/capacity/CapacityPage')
);

export default {
  init(app) {
    app.plugins.service.registerRoute('/capacity', CapacityPage);
  },
};
