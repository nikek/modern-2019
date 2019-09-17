import React from 'react';
const CapacityPage = React.lazy(() => import('/plugins/capacity/CapacityPage'));

export default {
  init({ router }) {
    router.subRoute('service').registerRoute('/capacity', CapacityPage);
    router.subRoute('website').registerRoute('/capacity', CapacityPage);
  },
};
