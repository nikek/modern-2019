import React from 'react';
import { registerRoute, registerRedirect } from '/app/app.plugin';

const WebsitePage = React.lazy(() => import('/plugins/website/WebsitePage'));

export default {
  init() {
    registerRedirect('/website', '/website/');
    registerRoute('/website/', WebsitePage);
    registerRoute('/website/:id*', WebsitePage);
  },
};
