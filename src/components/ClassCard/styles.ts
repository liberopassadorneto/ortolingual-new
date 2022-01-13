import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  width: 320px;
  height: 400px;
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
  font-size: 1.2rem;
  color: #01bf71;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 16px;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

export const Divider = styled.div`
  border: 2px solid #01bf71;
  width: 80px;
  border-radius: 40px;
  margin: 16px 0;
`;

export const Topics = styled.ul`
  list-style-type: none;
`;

export const Topic = styled.li`
  font-size: 1.025rem;
  text-align: left;
  margin: 16px 0;

  @media screen and (max-width: 480px) {
    font-size: 0.85rem;
  }
`;
