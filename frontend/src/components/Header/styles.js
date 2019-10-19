import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  background: #e1ad62;
  font-size: 20px;
  font-weight: bold;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 0 0 60px;
  padding: 0 20px;
  z-index: 50;

  button {
    &:first-child {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: inherit;
      border: 1px solid white;
      color: white;
      font-size: inherit;
      border-radius: 5px;
      padding: 8px;
      outline: none;
    }

    &:last-child {
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
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;
