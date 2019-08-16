import React from 'react';
import { registerRoute } from '/plugins/service/serviceRouter';
const CapacityPage = React.lazy(() =>
  import('/plugins/service/plugins/capacity/CapacityPage')
);

export default {
  init() {
    registerRoute('/capacity', CapacityPage);
  },
};
