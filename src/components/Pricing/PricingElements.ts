import styled from 'styled-components';

export const PricingContainer = styled.div`
  height: auto;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: flex-start;
  padding: 100px 0;
  align-items: center;
  background: #010606;

  /* @media screen and (max-width: 768px) {
    height: 3000px;
  }

  @media screen and (max-width: 480px) {
    height: 3600px;
  } */
`;

export const PricingWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
  align-items: center;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const PricingCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  width: 300px;
  height: 380px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    width: 260px;
    height: auto;
  }
`;

export const PricingIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const PricingHeading = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    width: 70vw;
    font-size: 2rem;
    text-align: center;
  }
`;

export const PricingTitle = styled.h1`
  font-size: 2rem;
  color: #000;
  font-weight: 600;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const PricingSubtitle = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const PricingSubtitleNew = styled.h2`
  font-size: 1rem;
  color: #01bf71;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 16px;

  @media screen and (max-width: 480px) {
    font-size: rem;
  }
`;

export const Divider = styled.div`
  border: 2px solid #01bf71;
  width: 80px;
  border-radius: 40px;
  margin: 16px 0;
`;

export const FeaturesDesc = styled.p`
  font-size: 1.2rem;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 0.6rem;
  }
`;

export const FeaturesList = styled.ul`
  list-style-type: none;
`;

export const FeaturesItem = styled.li`
  font-size: 1.025rem;
  text-align: left;
  margin: 16px 0;

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const Container = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  width: 300px;
  height: 380px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    width: 260px;
    height: auto;
  }
`;

// export const FeaturesIcon = styled.img`
//   height: 160px;
//   width: 160px;
//   margin-bottom: 10px;
// `;

export const TopLine = styled.h2`
  font-size: 1rem;
  color: #01bf71;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 16px;

  @media screen and (max-width: 480px) {
    font-size: rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const Topics = styled.ul`
  list-style-type: none;
`;

export const Topic = styled.li`
  font-size: 1.025rem;
  text-align: left;
  margin: 16px 0;

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
