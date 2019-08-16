import React from 'react';
import { registerRoute } from '/core/app/appRouter';

const AboutPage = React.lazy(() => import('/plugins/about/AboutPage'));

export default {
  init() {
    registerRoute('/about', AboutPage);
  },
};
