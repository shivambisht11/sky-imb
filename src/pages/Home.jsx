import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Courses from '../components/Courses';
import Experience from '../components/Experience';
import WhatYouGet from '../components/WhatYouGet';
import Verification from '../components/Verification';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Home = () => {
  return (
    <div className="bg-dark text-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Experience />
        <WhatYouGet />
        <Verification />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};


export default Home;
