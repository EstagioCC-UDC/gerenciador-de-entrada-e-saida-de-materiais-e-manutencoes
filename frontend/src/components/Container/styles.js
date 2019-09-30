import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  overflow-x: hidden;
  overflow-y: auto;

  > div {
    border-radius: 8px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    padding: 10px;
    flex: 0 0 100%;
  }
`;
