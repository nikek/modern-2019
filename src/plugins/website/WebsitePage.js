import React from 'react';
import { useRoutes } from 'hookrouter';
import WebsiteNav from '/plugins/website/WebsiteNav';
import { Router as WebsiteRouter } from '/plugins/website/websiteRouter';
import NeedId from '/shared/components/NeedId';

export default function WebsitePage({ id }) {
  console.log('webpage', id, typeof id);
  return (
    <>
      <h2>Website Layoutz</h2>
      <WebsiteNav id={id} />
      {id ? <WebsiteRouter id={id} /> : <NeedId />}
    </>
  );
}
