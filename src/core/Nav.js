import React from 'react';
import { css } from 'emotion';
import { A } from 'hookrouter';

const Anchor = styled('a')`
  color: gray;
`;

export default function Nav(p) {
  const styles = css`
    color: #d5d;
    margin: 10px;
    &:hover {
      color: ${p.color || 'lightblue'};
    }
  `;

  return (
    <nav>
      <A className={styles} href="/">
        Home
      </A>
      <A className={styles} href="about">
        About
      </A>
    </nav>
  );
}
