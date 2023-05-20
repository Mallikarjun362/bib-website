// Core Imports
import React from 'react';
// Secondary Imports
import logo from '../assets/official_logo-transperant-white.png';

const AppBar = () => {
  return (
    <header
      className="flex-row lg:flex"
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0px 30px',
      }}
    >
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            padding: '20px 0px',
            userSelect: 'none',
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
      <style>
        {`.nav-urls a{
          padding: 5px 15px;
          background-color:#fff7;
          border-radius:20px;
        }`}
      </style>
      <div
        className="nav-urls"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          padding: '0px 50px',
          color: 'white',
        }}
      >
        <a href="/">Home</a>
        <a href="/core-members">Core Members</a>
      </div>
    </header>
  );
};

export default AppBar;
