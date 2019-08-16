import React from 'react';
import { registerRoute } from '/core/app/appRouter';
import { registerRedirect } from '/core/app/appRouter';

const WebsitePage = React.lazy(() => import('/plugins/website/WebsitePage'));

export default {
  init() {
    registerRedirect('/website', '/website/');
    registerRoute('/website/', WebsitePage);
    registerRoute('/website/:id*', WebsitePage);
  },
};
