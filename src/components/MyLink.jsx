import { AiOutlineLink } from 'react-icons/ai';

const MyLink = ({ title, url }) => {
  return (
    <a href={url} target="_blank">
      <div
        style={{
          width: 'fit-content',
          alignItems: 'center',
          display: 'flex',
          gap: '10px',
          backgroundColor: '#fff4',
          padding: '5px 10px',
          borderRadius: '50px',
        }}
      >
        <AiOutlineLink /> {title}
      </div>
    </a>
  );
};

export default MyLink;
