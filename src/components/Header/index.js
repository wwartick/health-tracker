import React from 'react';
import './header.css';
import Clock from '../Clock';
import Weather from '../Weather';

function Header() {
  return (
    <div className="header">
      <div className="left-side">
        <Weather />
      </div>
      <div className="right-side">
        <span className='title'>Start/Finish</span>
        <Clock />
      </div>
    </div>
  );
}

export default Header;
