import { styled } from 'styled-components';

export const Button = styled.button`
  border: 2px solid #fff;
  outline: 0;
  background-color: transparent;
  border-radius: 100px;
  color: #fff;
  padding: 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #5188ff;
    transform: scale(1.15);
  }
`;
