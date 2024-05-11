// Sidebar.js

import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar" style={{ position: 'fixed', left: 0, top: 0, bottom: 0, width: '200px', backgroundColor: '#fff', zIndex: 999 }}>
      <h3>Brand</h3>
      <ul>
        <li>Mango</li>
        <li>H&M</li>
      </ul>
      <h3>Price Range</h3>
      <ul>
        <li>Under 500</li>
        <li>1000 To 3000</li>
      </ul>
    </div>
  );
};

export default Sidebar;
