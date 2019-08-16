import React from 'react';
import { A } from 'hookrouter';

const styles = {
  color: '#d5d',
  margin: 10,
};

export default function NavItem({ disabled, href, ...other }) {
  return <A style={styles} {...other} href={disabled ? '' : href} />;
}
