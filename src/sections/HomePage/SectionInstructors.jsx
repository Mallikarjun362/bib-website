import React from 'react';
import InstructorCard from '../../components/InstructorCard';
import { instructors } from '../../data/instructors';
const SectionInstructors = () => {
  return (
    <div>
      <center style={{ color: '#fffa', fontSize: '50px' }}>Instructors</center>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '50px',
          padding: '100px 100px',
        }}
      >
        {Object.values(instructors).map((ele) => (
          <InstructorCard data={ele} />
        ))}
      </div>
    </div>
  );
};

export default SectionInstructors;
