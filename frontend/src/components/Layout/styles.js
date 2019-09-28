import styled from 'styled-components';
import { darken } from 'polished';

export const StyledLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-shrink: 0;
  flex-grow: 1;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  background-color: #09caed;
  font-size: 20px;
  font-weight: bold;
  color: white;
  flex: 1;
  height: 100vh;
  transition: 0.8s;
  position: relative;
  overflow: hidden;

  ${props => `min-width: ${props.isMenuOpen ? '300px' : '0'}`}

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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

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

export const ApplicationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
