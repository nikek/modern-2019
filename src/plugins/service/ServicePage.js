import React from 'react';
import { ServiceRouter } from '/plugins/service/service.plugin';
import ServiceNav from './ServiceNav';

export default function ServicePage() {
  return (
    <div>
      <h2>Layout</h2>
      <ServiceNav />
      <ServiceRouter />
    </div>
  );
}
