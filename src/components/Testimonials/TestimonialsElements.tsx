import styled from 'styled-components';

export const TestimonialsContainer = styled.div`
  height: auto;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: flex-start;
  padding: 100px 0;
  align-items: center;
  background: #121214;

  /* @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  } */
`;

export const TestimonialsWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 60px;
  row-gap: 60px;
  align-items: center;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px 40px;
  }
`;

export const VideoWrapper = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const Iframe = styled.iframe`
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const TestimonialsHeading = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    padding: 0 10px;
  }
`;

export const TestimonialsSubtitle = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const TestimonialsDesc = styled.p`
  font-size: 1.2rem;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 0.6rem;
  }
`;
