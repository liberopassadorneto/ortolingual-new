import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`;

export const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    height: 80%;
  }

  @media screen and (max-width: 360px) {
    height: 90%;
  }
`;

export const Icon = styled(LinkR)`
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 32px;
  margin-top: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-right: 8px;
  }
`;

export const CardWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 24px;
  }

  @media screen and (max-width: 360px) {
    padding: 32px;
  }
`;

export const CardContainer = styled.div`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
`;

export const CardHeading = styled.h1`
  color: #e1e1e6;
  font-size: 40px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 18px;
`;

export const CardSubtitle = styled.span`
  text-align: center;
  color: #01bf71;
  font-size: 16px;
  font-weight: 500;
`;

export const CardDivider = styled.div`
  margin: 48px 0;
  border: 1px solid #323238;
`;

export const CardText = styled.span`
  text-align: center;
  color: #e1e1e6;
  font-size: 16px;
  margin-bottom: 24px;
`;

export const LinkBtn = styled.a`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardBtn = styled.button`
  background: #01bf71;
  padding: 18px 48px;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2 ease-in-out;

  @media screen and (max-width: 480px) {
    padding: 12px 24px;
  }

  &:hover {
    transition: all 0.2 ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
