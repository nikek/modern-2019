import React from 'react';
import { Router as ServiceRouter } from '/plugins/service/service.plugin';
import ServiceNav from './ServiceNav';
import NeedId from '/shared/components/NeedId';

export default function ServicePage({ id }) {
  return (
    <div>
      <h2>Layout</h2>
      <ServiceNav id={id} />
      {id ? <ServiceRouter id={id} /> : <NeedId />}
    </div>
  );
}
