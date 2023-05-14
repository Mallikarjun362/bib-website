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
            style={{ maxHeight: '200px', height: '5vw', minHeight: '60px' }}
          />
          <span
            className="lg:text-[2.5vw] text-[8vw]"
            style={{
              fontFamily: "'EB Garamond', serif",
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
