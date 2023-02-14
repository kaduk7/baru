import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Cards2 from '../Cards2';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards2 />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
