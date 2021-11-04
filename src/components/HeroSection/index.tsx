import { useState } from 'react';
import { Link as LinkS } from 'react-scroll';
import { BtnCta } from '../Button';
import {
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroHeading,
  HeroSubtitle,
  VideoBg,
} from './HeroElements';
import videoBg from '/assets/videos/videoBg.mp4';

export function HeroSection() {
  const [hover, setHover] = useState<boolean>(false);

  function onHover() {
    setHover(!hover);
  }

  return (
    <HeroContainer id='hero'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={videoBg} />
      </HeroBg>
      <HeroContent>
        <HeroHeading>Ortodoncia Lingual en Ecuador</HeroHeading>
        <HeroSubtitle>Dr. Prof. Marcos Prieto</HeroSubtitle>
        <HeroBtnWrapper>
          <LinkS
            to='about'
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            <BtnCta onMouseEnter={onHover} onMouseLeave={onHover}>
              {/* Saber más {hover ? <ArrowForward /> : <ArrowRight />} */}
              Saber más
            </BtnCta>
          </LinkS>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}
