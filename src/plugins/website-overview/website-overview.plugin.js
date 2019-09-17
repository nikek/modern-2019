import React from 'react';

const WebsiteOverview = React.lazy(() =>
  import('/plugins/website-overview/WebsiteOverview')
);

export default {
  init({ router }) {
    router.subRoute('website').registerRoute('/', WebsiteOverview);
  },
};
