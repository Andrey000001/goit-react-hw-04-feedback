import styled from '@emotion/styled';

export const Button = styled.button`
  padding: 5px 25px;
  margin-top: 20px;
  border-radius: 5px;
  border-color: transparent;
  font-size: 18px;
  position: relative;

  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover {
    background-color: #a5d2e9;
  }
`;
