import React from 'react';
import WebsiteNav from '/plugins/website/WebsiteNav';
import { Router as WebsiteRouter } from '/plugins/website/website.plugin';
import NeedId from '/shared/components/NeedId';

export default function WebsitePage({ id }) {
  return (
    <>
      <h2>Website Layoutz</h2>
      <WebsiteNav id={id} />
      {id ? <WebsiteRouter id={id} /> : <NeedId />}
    </>
  );
}
