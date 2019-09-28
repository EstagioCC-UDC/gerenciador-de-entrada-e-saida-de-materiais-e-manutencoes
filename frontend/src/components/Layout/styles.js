import styled from 'styled-components';
import { darken } from 'polished';

export const StyledLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  flex-grow: 1;

  header {
    flex: 1;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  max-width: 300px;
  background-color: #09caed;
  font-size: 20px;
  font-weight: bold;
  color: white;
  flex: 1;
  height: 100vh;

  a {
    text-decoration: none;
    color: white;
  }

  > span {
    text-align: center;

    > h3 {
      margin: 16px 0;
    }
  }
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: flex-start;
  padding: 15px 20px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;

  &:last-child {
    border-top: 1px solid white;
  }

  svg {
    margin-right: 10px;
  }

  &:hover {
    background-color: ${darken(0.04, '#09caed')};
  }
`;
