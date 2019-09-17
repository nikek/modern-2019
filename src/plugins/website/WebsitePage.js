import React from 'react';
import WebsiteNav from '/plugins/website/WebsiteNav';
import NeedId from '/shared/components/NeedId';
import context from '/app/context';

const WebsiteRouter = context.router.subRoute('website').Router;

export default function WebsitePage({ id }) {
  return (
    <>
      <h2>Website Layoutz</h2>
      <WebsiteNav id={id} />
      {id ? <WebsiteRouter id={id} /> : <NeedId />}
    </>
  );
}
