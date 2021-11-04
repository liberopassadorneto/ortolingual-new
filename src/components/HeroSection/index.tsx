import { useState } from 'react';
import { BtnCta } from '../Button';
import {
  ArrowForward,
  ArrowRight,
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
        <HeroHeading>Virtual Banking Made Easy</HeroHeading>
        <HeroSubtitle>
          Sign up for a new account today and receive $250 in credit.
        </HeroSubtitle>
        <HeroBtnWrapper>
          <BtnCta onMouseEnter={onHover} onMouseLeave={onHover}>
            <>Get started {hover ? <ArrowForward /> : <ArrowRight />}</>
          </BtnCta>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}
