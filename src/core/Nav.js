import React from 'react';
import styled from 'styled-components';
import { A, usePath } from 'hookrouter';

const NavA = styled(A)`
  color: ${p => (p.current === p.href ? 'teal' : '#d5d')};
  text-decoration: ${p => (p.current === p.href ? 'none' : 'undeline')};
  margin: 10px;
`;

export default function Nav(p) {
  const path = usePath();
  return (
    <nav>
      <NavA href="/" current={path}>
        Home
      </NavA>
      <NavA href="/about" current={path}>
        About
      </NavA>
    </nav>
  );
}
