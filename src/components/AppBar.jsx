// Core Imports
import React from 'react';
// Secondary Imports
import logo from '../assets/official_logo-transperant-white.png';

const AppBar = () => {
  return (
    <header>
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            padding: '20px 30px',
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ maxHeight: '150px', height: '4vw', minHeight: '40px' }}
          />
          <span
            style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: 'max(25px, 2.5vw)',
              color: 'white',
              overflow: 'clip',
            }}
          >
            Blockchain at IIT Bhilai
          </span>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
