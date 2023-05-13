// Core imports
import React from 'react';
// Secondary imports
import './HomePage.css';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
// Importing Sections
import CustomeHead from '../components/CustomeHead';
import SectionTop from '../sections/HomePage/SectionTop';
import SectionTimeline from '../sections/HomePage/SectionTimeline';
// Page UI and logic
const HomePage = () => {
  return (
    <div className="full-page" style={{ width: '100%', overflow: 'hidden' }}>
      <CustomeHead />
      <AppBar />
      <main style={{ minHeight: '100vh' }}>
        <SectionTop />
        <SectionTimeline />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
