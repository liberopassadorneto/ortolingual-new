import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  width: 410px;
  height: 460px;
  padding: 32px;
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
  font-size: 1.2rem;
  color: #01bf71;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 16px;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 10px;

  > span {
    font-size: 1rem;
    font-weight: 500;
    color: #4d4d57;
  }

  @media screen and (max-width: 480px) {
    font-size: 2.2rem;
    margin-bottom: 16px;
  }
`;

export const Divider = styled.div`
  border: 2px solid #01bf71;
  width: 80px;
  border-radius: 40px;
  margin: 16px 0;

  @media screen and (max-width: 480px) {
    margin-bottom: 0px;
  }
`;

export const Topics = styled.ul`
  list-style-type: none;
`;

export const Topic = styled.li`
  font-size: 1.125rem;
  font-weight: 500;
  color: #4d4d57;
  text-align: left;
  margin: 24px 0;

  @media screen and (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #4d4d57;
  text-align: center;
  margin-bottom: 16px;

  @media screen and (max-width: 480px) {
    font-size: 0.85rem;
    margin-bottom: 10px;
  }
`;
