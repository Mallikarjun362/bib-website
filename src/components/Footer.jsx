import React from 'react';
import { RxTwitterLogo } from 'react-icons/rx';
import { FaLinkedinIn } from 'react-icons/fa';

const IconUrl = ({ url = '', icon }) => {
  return (
    <a href={url} target="_blank">
      <div
        style={{
          backgroundColor: '#fff4',
          width: '50px',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50px',
          color: 'white',
          fontSize: '30px',
          border: 'solid 1px',
        }}
      >
        {icon}
      </div>
    </a>
  );
};

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          height: '200px',
          backgroundColor: '#fff2',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '50px',
        }}
      >
        <IconUrl
          icon={<RxTwitterLogo />}
          url="https://twitter.com/BlockchainIITBH/"
        />
        <IconUrl
          icon={<FaLinkedinIn />}
          url="https://www.linkedin.com/company/blockchain-at-iit-bhilai/"
        />
      </div>
    </footer>
  );
};

export default Footer;
