import React from 'react';
import { A } from 'hookrouter';

const styles = {
  color: '#d5d',
  margin: 10,
};

export default function ServiceNav() {
  return (
    <nav>
      <A style={styles} href="/service">
        Overview
      </A>
      <A style={styles} href="/service/capacity">
        Capacity
      </A>
    </nav>
  );
}
