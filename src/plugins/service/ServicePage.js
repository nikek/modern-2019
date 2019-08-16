import React from 'react';
import { Router as ServiceRouter } from '/plugins/service/serviceRouter';
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
