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
        <VideoWrapper>
          <Iframe
            src='https://www.youtube.com/embed/SeOhX1ezzvs?rel=0'
            title='Dr Carlos Rueda'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </VideoWrapper>
        <VideoWrapper>
          <Iframe
            src='https://www.youtube.com/embed/RkYPPjGtwGI?rel=0'
            title='Dr Andrés'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </VideoWrapper>
        <VideoWrapper>
          <Iframe
            src='https://www.youtube.com/embed/gP25COeY2Nk?rel=0'
            title='Dra Daniela Guerrero'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </VideoWrapper>
        <VideoWrapper>
          <Iframe
            src='https://www.youtube.com/embed/n3dux3IKTfg?rel=0'
            title='Dr Tommy'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          />
        </VideoWrapper>
      </TestimonialsWrapper>
    </TestimonialsContainer>
  );
}
