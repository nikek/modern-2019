import React from 'react';

const WebsitePage = React.lazy(() => import('/plugins/website/WebsitePage'));

export default {
  init({ router }) {
    router
      .registerRedirect('/website', '/website/')
      .registerRoute('/website/', WebsitePage)
      .registerRoute('/website/:id*', WebsitePage);

    router.registerSubRoute('website');
  },
};
