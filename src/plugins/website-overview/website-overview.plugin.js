import React from 'react';
import { registerRoute } from '/plugins/website/websiteRouter';

const WebsiteOverview = React.lazy(() =>
  import('/plugins/website-overview/WebsiteOverview')
);

export default {
  init() {
    registerRoute('/', WebsiteOverview);
  },
};
