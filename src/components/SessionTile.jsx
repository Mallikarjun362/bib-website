import React from 'react';
import MyLink from './MyLink';
import ReactMarkdown from 'react-markdown';
import SpeakerTile from './SpeakerTile';

const MyRow = ({ k, v }) => {
  return (
    <div
      style={{ fontSize: '18px', margin: '10px 0px' }}
      className="lg:flex flex-row"
    >
      <div
        style={{
          minWidth: '200px',
          marginRight: '20px',
          fontSize: '23px',
          display: 'flex',
          alignContent: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        <span>{k}</span>
        <span>:</span>
      </div>
      <div className="sm: flex-wrap">{v}</div>
    </div>
  );
};

function getDayDiff(s) {
  const diffTime = Date.now() - new Date(s);
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - 1;

  if (diffDays < 0) {
    diffDays = Math.abs(diffDays);
    if (diffDays === 1) {
      return '(1 day left)';
    } else {
      return `(${diffDays} days left)`;
    }
  } else {
    if (diffDays === 0) {
      return '(Today)';
    } else if (diffDays === 1) {
      return '(Yesterday)';
    } else {
      return `(${diffDays} days ago)`;
    }
  }
}

function parseCsvString(s) {
  const rows = s.split('\n');
  const data = rows.map((row) => row.split(','));
  return data;
}

// Main component ===============================================================================================================
const SessionTile = ({ data }) => {
  // Topics-list
  const row_topics_list = data['Topics-list'] ? (
    <MyRow
      k="Topics"
      v={
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
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
  const _date = new Date(data['Session-date']);
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
      {_date.getDate()}-{_date.getMonth()}-{_date.getFullYear()} {getDayDiff(data['Session-date'])}
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
    res_list.length > 0 && data['Resource-table'] !== '' ? (
      <MyRow
        k="Resources"
        v={
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
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
      className="lg: sm:"
      style={{
        color: 'white',
        fontSize: '25px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: '0.7',
      }}
    >
      <div>Week #{data['Week-number']}</div>
      <div style={{ fontWeight: 'bold' }}>Session</div>
      <div style={{ fontSize: '100px' }}>{data['Session-number']}</div>
    </div>
  );
  const div_main = (
    <div className="sm:w-[100%] lg:w-[70%]">
      <SpeakerTile
        name={data['Speaker-name']}
        image_url={data['Speaker-image-url']}
        intro={data['Speaker-intro']}
        linkedin={data['Speaker-linkedin-url']}
        website={data['Speaker-website']}
      />
      <table
        style={{
          borderCollapse: 'separate',
          borderSpacing: '10px 10px',
          width: '100%',
        }}
      >
        <tbody style={{ width: '100%' }}>
          {row_topics_list}
          {row_video_recording}
          {row_resources}
          {row_assignment_link}
          {row_assignment_deadline}
          {row_assignment_submission_link}
        </tbody>
      </table>
      {note_markdown}
    </div>
  );
  // Main UI ==========================================================================================================
  return (
    <div
      className="sm:w-[90vw] p-[25px] sm:pt-[50px] flex justify-around flex-col lg:flex-row lg:w-[60vw] "
      style={{
        paddingTop: '50px',
        backgroundColor: '#fff3',
        borderRadius: '10px',
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
