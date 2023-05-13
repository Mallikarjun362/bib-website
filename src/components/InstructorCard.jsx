import React from 'react';
import { IoLogoLinkedin } from 'react-icons/io';

const InstructorCard = ({ data }) => {
  return (
    <div
      style={{
        width: '350px',
        backgroundColor: '#fff5',
        borderRadius: '20px',
        padding: '20px',
        color: 'white',
        fontSize: '25px',
      }}
    >
      <span style={{ fontSize: '35px', fontWeight: 'bold' }}>{data.name}</span>
      <hr />
      <a href={data.linkedin_url} target="_blank">
        <div
          style={{
            backgroundColor: '#fff4',
            width: 'fit-content',
            padding: '2px 10px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            borderRadius: '50px',
            color: 'white',
            fontSize: '20px',
            border: 'solid 1px',
          }}
        >
          Linkedin
          <IoLogoLinkedin />
        </div>
      </a>
      <p style={{ color: '#fffd' }}>{data.description}</p>
    </div>
  );
};

export default InstructorCard;
