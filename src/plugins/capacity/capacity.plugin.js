import React from 'react';
import { registerRoute as serviceRegRoute } from '/plugins/service/service.plugin';
import { registerRoute as websiteRegRoute } from '/plugins/website/website.plugin';
const CapacityPage = React.lazy(() => import('/plugins/capacity/CapacityPage'));

export default {
  init() {
    serviceRegRoute('/capacity', CapacityPage);
    websiteRegRoute('/capacity', CapacityPage);
  },
};
