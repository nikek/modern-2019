import React from 'react';
import { registerRoute } from '/app/app.plugin';

const AboutPage = React.lazy(() => import('/plugins/about/AboutPage'));

export default {
  init() {
    registerRoute('/about', AboutPage);
  },
};
