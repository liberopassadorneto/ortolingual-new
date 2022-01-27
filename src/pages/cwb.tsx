import { useState } from 'react';
import { Features } from '../components/Features';
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/HeroSection';
import { InfoSection } from '../components/InfoSection';
import {
  infoObjFive,
  infoObjFour,
  infoObjSix,
} from '../components/InfoSection/Data';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { Testimonials } from '../components/Testimonials';

export function Cwb() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...infoObjFour} />
      <InfoSection {...infoObjFive} />
      <Testimonials />
      <Features />
      <InfoSection {...infoObjSix} />
      <Footer />
    </>
  );
}
