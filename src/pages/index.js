import React, { useState } from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, social } from '../components/Data';
import Navbar from '../components/Navbar';
import Portfolio from '../components/Portfolio';
import Sidebar from '../components/Sidebar';
import Skills from '../components/Skills';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} social={social}/>
      <HeroSection />
      <InfoSection { ...homeObjOne } />
      <Skills { ...homeObjTwo } />
      <Portfolio />
      <Footer social={social}/>
    </>
  )
}

export default Home;
