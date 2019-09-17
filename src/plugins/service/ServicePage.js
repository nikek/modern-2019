import React from 'react';
import ServiceNav from './ServiceNav';
import NeedId from '/shared/components/NeedId';
import context from '/app/context';

const ServiceRouter = context.router.subRoute('service').Router;

export default function ServicePage({ id }) {
  return (
    <div>
      <h2>Layout</h2>
      <ServiceNav id={id} />
      {id ? <ServiceRouter id={id} /> : <NeedId />}
    </div>
  );
}
