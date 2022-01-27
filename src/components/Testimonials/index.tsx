import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { testimonialsData } from './data';
import {
  Iframe,
  TestimonialsContainer,
  TestimonialsHeading,
  TestimonialsWrapper,
  VideoWrapper,
} from './TestimonialsElements';

export function Testimonials() {
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

  return (
    <TestimonialsContainer id="testimonials">
      <TestimonialsHeading>
        {locale === 'esp'
          ? 'Testimonios de estudiantes'
          : 'Depoimentos de ex-alunos'}
      </TestimonialsHeading>
      <TestimonialsWrapper>
        {testimonialsData.map((item) => (
          <VideoWrapper key={item.id}>
            <Iframe
              src={item.src}
              title={item.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </VideoWrapper>
        ))}
      </TestimonialsWrapper>
    </TestimonialsContainer>
  );
}
