import styled from 'styled-components';

interface ButtonProps {
  primary: boolean;
  big: boolean;
  dark: boolean;
  fontBig: boolean;
}

export const Button = styled.button<ButtonProps>`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#01bf71' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  font-weight: 500;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2 ease-in-out;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#01bf71')};
  }
`;
