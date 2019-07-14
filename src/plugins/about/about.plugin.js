import React from 'react';

const AboutPage = React.lazy(() => import('/plugins/about/AboutPage'));

export default function aboutPlugin(app) {
  app.registerRoute('/about', AboutPage);
}
