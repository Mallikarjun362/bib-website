import React from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import ReactMarkdown from 'react-markdown';

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
const MyRow = ({ k, v }) => {
  return (
    <tr style={{ fontSize: '18px' }}>
      <td style={{ fontSize: '23px' }}>{k}</td>
      <td style={{ padding: '8px 15px' }}>:</td>
      <td>{v}</td>
    </tr>
  );
};

function getDayDiff(s) {
  const diffTime = Date.now() - new Date(s);
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - 1;

  if (diffDays < 0) {
    diffDays = Math.abs(diffDays);
    if (diffDays == 1) {
      return '(1 day left)';
    } else {
      return `(${diffDays} days left)`;
    }
  } else {
    if (diffDays == 0) {
      return '(Today)';
    } else if (diffDays == 1) {
      return '(Yesterday)';
    } else {
      return `(${diffDays} days ago)`;
    }
  }
  return '';
}

function parseCsvString(s) {
  const rows = s.split('\n');
  const data = rows.map((row) => row.split(','));
  return data;
}

// Main component ===============================================================================================================
const SessionTile = ({ data }) => {
  const csv_str = '';

  // Speaker-name
  const speaker_name = data['Speaker-name'] ? (
    <div className="speaker" style={{ fontSize: '50px' }}>
      {' '}
      {data['Speaker-name']}{' '}
    </div>
  ) : null;
  // Topics-list
  const row_topics_list = data['Topics-list'] ? (
    <MyRow
      k="Topics"
      v={
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {data['Topics-list'].split(',').map((ele) => (
            <div
              style={{
                backgroundColor: '#fff4',
                padding: '5px 10px',
                borderRadius: '20px',
                fontSize: '20px',
              }}
            >
              {ele}
            </div>
          ))}
        </div>
      }
    />
  ) : null;
  // Session-date
  const session_date = data['Session-date'] ? (
    <div
      style={{
        position: 'absolute',
        right: '20px',
        top: '10px',
        fontSize: '20px',
        opacity: '0.8',
      }}
    >
      {data['Session-date']} {getDayDiff(data['Session-date'])}
    </div>
  ) : null;
  const row_video_recording = data['Video-recording-link'] ? (
    <MyRow
      k="Video recording"
      v={<MyLink title={'Video'} url={data['Video-recording-link']} />}
    />
  ) : null;
  const note_markdown = data['Notes-markdown'] ? (
    <div>
      <hr />
      <ReactMarkdown>{data['Notes-markdown']}</ReactMarkdown>
    </div>
  ) : null;
  // Resources table
  const res_list = parseCsvString(data['Resource-table']);
  const row_resources =
    (res_list.length > 0) & data['Resources-table'] ? (
      <MyRow
        k="Resources"
        v={
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            {res_list.map((ele, idx) => (
              <MyLink title={ele[0]} url={ele[1]} key={idx} />
            ))}
          </div>
        }
      />
    ) : null;
  const row_assignment_link = data['Assignment-pdf-link'] ? (
    <MyRow
      k="Assignment"
      v={<MyLink title={'File'} url={data['Assignment-pdf-link']} />}
    />
  ) : null;
  const row_assignment_deadline = data['Assignment-deadline'] ? (
    <MyRow
      k="Assignment deadline"
      v={`${data['Assignment-deadline']} ${getDayDiff(
        data['Assignment-deadline']
      )}`}
    />
  ) : null;
  const row_assignment_submission_link = data['Assignment-submission-link'] ? (
    <MyRow
      k="Submission link"
      v={<MyLink title="Form" url={data['Assignment-submission-link']} />}
    />
  ) : null;
  const div_head = (
    <div
      style={{
        color: 'white',
        fontSize: '25px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
        opacity: '0.7',
      }}
    >
      <div>Week #{data['Week-number']}</div>
      <div style={{ fontWeight: 'bold' }}>Session</div>
      <div style={{ fontSize: '100px' }}>{data['Session-number']}</div>
    </div>
  );
  const div_main = (
    <div style={{ width: '60%' }}>
      {speaker_name}
      <br />
      <table>
        {row_topics_list}
        {row_video_recording}
        {row_resources}
        {row_assignment_link}
        {row_assignment_deadline}
        {row_assignment_submission_link}
      </table>
      {note_markdown}
    </div>
  );
  // Main UI ==========================================================================================================
  return (
    <div
      style={{
        width: '60%',
        padding: '30px 10px',
        backgroundColor: '#fff3',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        gap: '30px',
        position: 'relative',
        color: 'white',
      }}
    >
      {session_date}
      {div_head}
      {div_main}
    </div>
  );
};

export default SessionTile;
