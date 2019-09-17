import React from 'react';
import NavItem from '/shared/components/NavItem';

export default function NeedId() {
  return (
    <>
      <div>Need an ID. Try one of these:</div>
      <ul>
        <li>
          <NavItem
            href={`${window.location.pathname.slice(
              0,
              window.location.host.length
            )}nikek`}
          >
            nikek
          </NavItem>
        </li>
      </ul>
    </>
  );
}
