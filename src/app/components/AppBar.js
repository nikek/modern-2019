import React from 'react';
import Nav from './Nav';
import './AppBar.css';
import image from '/assets/modern-favicon.png';

export default function AppBar() {
  return (
    <div className="appbar">
      <img src={image} height="30" />
      <Nav />
    </div>
  );
}
