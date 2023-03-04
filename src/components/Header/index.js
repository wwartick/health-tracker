import React from 'react';
import './header.css';
import Clock from '../Clock';

function Header() {
    return (
        <div className ="header">
            <span className='Title'>Self-Health Tracker </span>
            <Clock />
        </div>
    );
  }

  export default Header;