import React from 'react';
import { A } from 'hookrouter';

const styles = {
  color: '#d5d',
  margin: 10,
};

export default function Nav() {
  return (
    <nav>
      <A style={styles} href="/">
        Home
      </A>
      <A style={styles} href="/about">
        About
      </A>
      <A style={styles} href="/service">
        Service
      </A>
      <A style={styles} href="/website">
        Website
      </A>
    </nav>
  );
}
