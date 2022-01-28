import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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

  const [locale, setLocale] = useState<string>('esp');

  const { pathname } = useLocation();

  useEffect(() => {
    const cwbPathname = pathname.includes('cwb');
    if (cwbPathname) {
      setLocale('ptbr');
    } else {
      setLocale('esp');
    }
  }, []);

  function onHover() {
    setHover(!hover);
  }

  return (
    <HeroContainer id="hero">
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={videoBg} />
      </HeroBg>
      <HeroContent>
        <HeroHeading>
          {locale === 'esp'
            ? `Ortodoncia Lingual y Alineadores in Office`
            : 'Sistema Lingual Prieto em Curitiba'}
        </HeroHeading>
        <HeroSubtitle>
          {locale === 'esp'
            ? 'curso en español - en línea'
            : 'curso presencial'}
        </HeroSubtitle>
        <HeroBtnWrapper>
          <LinkS
            to="about"
            smooth={true}
            duration={700}
            spy={true}
            offset={-80}
          >
            <BtnCta onMouseEnter={onHover} onMouseLeave={onHover}>
              {/* Saber más {hover ? <ArrowForward /> : <ArrowRight />} */}
              {locale === 'esp' ? 'Saber más' : 'Saiba mais'}
            </BtnCta>
          </LinkS>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}
