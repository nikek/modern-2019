import React from 'react';

const AboutPage = React.lazy(() => import('/plugins/about/AboutPage'));

export default {
  init({ router }) {
    router.registerRoute('/about', AboutPage);
  },
};
