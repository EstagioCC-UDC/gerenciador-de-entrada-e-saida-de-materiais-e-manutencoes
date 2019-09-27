import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  background: #14d4f6;
  font-size: 20px;
  font-weight: bold;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 50;

  button {
    display: flex;
    justify-content: baseline;
    align-items: center;
    background-color: inherit;
    border: none;
    color: inherit;
    font-size: inherit;

    svg {
      margin-left: 10px;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;
