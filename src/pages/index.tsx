import { useState } from 'react';
import { Features } from '../components/Features';
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/HeroSection';
import { InfoSection } from '../components/InfoSection';
import {
  infoObjOne,
  infoObjThree,
  infoObjTwo,
} from '../components/InfoSection/Data';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';

export function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...infoObjOne} />
      <InfoSection {...infoObjTwo} />
      <Features />
      <InfoSection {...infoObjThree} />
      <Footer />
    </>
  );
}
