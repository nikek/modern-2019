import React from 'react';
import {
  registerRoute as regAppRoute,
  registerRedirect as regAppRedirect,
} from '/app/app.plugin';
import { getRoutingCapabilities } from '/shared/routeManager';
const WebsitePage = React.lazy(() => import('/plugins/website/WebsitePage'));

export const {
  registerRoute,
  registerRedirect,
  Router,
} = getRoutingCapabilities();

export default {
  init() {
    regAppRedirect('/website', '/website/');
    regAppRoute('/website/', WebsitePage);
    regAppRoute('/website/:id*', WebsitePage);
  },
};
