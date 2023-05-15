import React from 'react';
import landing_page_vector from '../../assets/landingpage.png';
import { title, subtitle, description } from '../../data/data';
const SectionTop = () => {
  return (
    <div
      className="lg:flex lg:justify-center lg:items-center"
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      {/* Div 1 */}
      <div className="lg:w-[50%] lg:p-[3vw] sm: p-[50px]">
        <span
          className="lg:text-[5vw] text-[10vw]"
          style={{
            fontFamily: "'Roboto Slab', serif",
          }}
        >
          {title}
        </span>
        <br />
        <br />
        <br />
        <span style={{ color: '#fff8' }} className="lg:text-[30px] text-[6vw]">
          {description}
        </span>
      </div>
      {/* Div 2 */}
      <div className="lg:w-[50%] ">
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
