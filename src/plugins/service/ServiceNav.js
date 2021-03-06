import React from 'react';
import NavItem from '/shared/components/NavItem';

export default function ServiceNav({ id }) {
  return (
    <nav>
      <NavItem href={`/service/${id}`} disabled={!id}>
        Overview
      </NavItem>
      <NavItem href={`/service/${id}/capacity`} disabled={!id}>
        Capacity
      </NavItem>
    </nav>
  );
}
