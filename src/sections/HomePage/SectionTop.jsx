import React from 'react';
import landing_page_vector from '../../assets/landingpage.png';
import { title, subtitle, description } from '../../data/data';
const SectionTop = () => {
  return (
    <div
      style={{
        display: 'flex',
        color: 'white',
        alignItems: 'center',
      }}
    >
      <div style={{ width: '50%', padding: '5vw' }}>
        <span
          style={{
            fontFamily: "'Roboto Slab', serif",
            fontSize: '5.5vw',
          }}
        >
          {title}
        </span>
        <br />
        <br />
        <br />
        <span style={{ fontSize: '2vw', color: '#fff8' }}>{description}</span>
      </div>
      <div
        style={{
          width: '50%',
          display: 'flex',
          justifyContent: 'center',
          paddingRight: '3vw',
        }}
      >
        <img
          src={landing_page_vector}
          alt=""
          style={{ maxWidth: '100%', objectFit: 'contain', scale: '0.9' }}
        />
      </div>
    </div>
  );
};

export default SectionTop;
