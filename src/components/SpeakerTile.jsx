import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGlobe2 } from 'react-icons/bs';

const SpeakerTile = ({ name, linkedin, image_url, website, intro }) => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '30px',
      }}
    >
      {/* Image */}
      {image_url ? (
        <div
          className="w-[20vw] h-[20vw] lg:w-[20%] lg:h-[20%]"
          style={{
            minHeight: '100px',
            minWidth: '100px',
            padding: '3px',
            borderRadius: '50%',
            borderWidth: '5px',
            border: 'solid white',
          }}
        >
          <div
            className="w-[100%] h-[100%]"
            style={{
              borderRadius: '50%',
              overflow: 'hidden',
            }}
          >
            <img src={image_url} alt="" />
          </div>
        </div>
      ) : null}

      <div
        className="details"
        style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}
      >
        <div className="text-[6vw] lg:text-[40px]">{name}</div>
        <div>{intro}</div>
        <div className="speaker-links" style={{ display: 'flex', gap: '10px' }}>
          <style>
            {`
                .speaker-links a{
                    padding:10px;
                    background-color:#fff7;
                    border-radius: 50%;
                }
                `}
          </style>
          {linkedin ? (
            <a href={linkedin}>
              <FaLinkedinIn />
            </a>
          ) : null}
          {website ? (
            <a href={website}>
              <BsGlobe2 />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SpeakerTile;
