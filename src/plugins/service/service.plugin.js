import React from 'react';
import {
  registerRoute as regAppRoute,
  registerRedirect as regAppRedirect,
} from '/app/app.plugin';
import { getRoutingCapabilities } from '/shared/routeManager';

const ServicePage = React.lazy(() => import('/plugins/service/ServicePage'));

export const {
  registerRoute,
  registerRedirect,
  Router,
} = getRoutingCapabilities();

export default {
  init() {
    regAppRedirect('/service', '/service/');
    regAppRoute('/service/', ServicePage);
    regAppRoute('/service/:id*', ServicePage);
  },
};
