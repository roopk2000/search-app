import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar" style={{ position: 'fixed', left: 0, top: 0, bottom: 0, width: '200px', backgroundColor: '#fff', zIndex: 999, padding:"15px" }}>
      <h3>BRAND</h3>
      <hr /> {/* Line before BRAND */}
      <input type="checkbox" /> Mango
      <br />
      <input type="checkbox" /> H&M
      <h3>PRICE RANGE</h3>
      <hr /> {/* Line before PRICE RANGE */}
      <input type="checkbox" /> Under 500
      <br />
      <input type="checkbox" /> 1000 To 3000
      <br />
      <input type="checkbox" /> 3000 To 5000
      <br />
      <input type="checkbox" /> 5000 To 8000
      <br />
      <input type="checkbox" /> 8000 To 10000
      <h3>RATINGS</h3>
      <hr /> {/* Line before RATINGS */}
      <input type="checkbox" /> ★★★★★
      <br />
      <input type="checkbox" /> ★★★★
      <br />
      <input type="checkbox" /> ★★★
      <br />
      <input type="checkbox" /> ★★
      <br />
      <input type="checkbox" /> ★
    </div>
  );
};

export default Sidebar;
