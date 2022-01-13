import { testimonialsData } from './data';
import {
  Iframe,
  TestimonialsContainer,
  TestimonialsHeading,
  TestimonialsWrapper,
  VideoWrapper,
} from './TestimonialsElements';

export function Testimonials() {
  return (
    <TestimonialsContainer id='testimonials'>
      <TestimonialsHeading>Testimonios de estudiantes</TestimonialsHeading>
      <TestimonialsWrapper>
        {testimonialsData.map((item) => (
          <VideoWrapper key={item.id}>
            <Iframe
              src={item.src}
              title={item.title}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
          </VideoWrapper>
        ))}
      </TestimonialsWrapper>
    </TestimonialsContainer>
  );
}
