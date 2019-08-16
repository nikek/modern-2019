import React from 'react';
import NavItem from '/shared/components/NavItem';

export default function WebsiteNav({ id }) {
  return (
    <nav>
      <NavItem href={`/website/${id}`} disabled={!id}>
        Overview
      </NavItem>
      <NavItem href={`/website/${id}/capacity`} disabled={!id}>
        Capacity
      </NavItem>
    </nav>
  );
}
