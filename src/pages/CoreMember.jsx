import React from 'react';
import './CoreMember.css';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
const members = [
  {
    id: 1,
    name: 'Ujjwal Raj',
    Discipline: ' CSE 2026',
    image: require('../assets/Members/Ujjwal Raj.jpg'),
  },
  {
    id: 3,
    name: 'Mallikarjun',
    Discipline: ' DSAI 2024',
    image: require('../assets/Members/Mallikarjun.jpg'),
  },
  {
    id: 4,
    name: 'Mohit Kumar Meena',
    Discipline: 'ME 2024',
    image: require('../assets/Members/Mohit.jpg'),
  },
  {
    id: 5,
    name: 'Abhayveer',
    Discipline: ' EE 2025',
    image: require('../assets/Members/Abhayveer.jpeg'),
  },
  {
    id: 6,
    name: 'Atharva Kalbande',
    Discipline: ' ME 2026',
    image: require('../assets/Members/Atharva Kalbande.jpg'),
  },
  {
    id: 7,
    name: 'Patel Janmay Gaurav',
    Discipline: ' CSE 2026',
    image: require('../assets/Members/PATEL JANMAY GAURAV.jpeg'),
  },
  {
    id: 8,
    name: 'Mitul Vardhan',
    Discipline: ' CSE 2025',
    image: require('../assets/Members/Mitul.jpeg'),
  },
  {
    id: 9,
    name: 'Nikhil Kumar Shrey',
    Discipline: ' DSAI 2025',
    image: require('../assets/Members/Nikhil.jpeg'),
  },
  {
    id: 10,
    name: 'Pranay Thapak',
    Discipline: ' ME 2026',
    image: require('../assets/Members/Pranay.jpeg'),
  },
  {
    id: 11,
    name: 'Shashank Pant',
    Discipline: ' CSE 2026',
    image: require('../assets/Members/Shashank pant.jpeg'),
  },
];

const CoreMember = () => {
  return (
    <div className="full-page" style={{ width: '100%', overflow: 'hidden' }}>
      <AppBar />
      <main style={{ minHeight: '100vh' }}>
        <div className="CoreMemberContainer">
          <h1>Society Members</h1>
          <div className="memberWrapper">
            <img
              src={require('../assets/Members/Anand.jpeg')}
              alt="Anand Kumar"
            />
            <div>
              <p>BIB Secretary</p>
              <h2>Anand Kumar</h2>
              <p>ME 2024</p>
            </div>
          </div>
          <div className="membersGrid">
            {members.map((member) => (
              <div key={member.id} className="memberCard">
                <img src={member.image} alt={member.name} />
                <h2>{member.name}</h2>
                <p>{member.Discipline}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CoreMember;
