import styled from 'styled-components';

export const StyledForm = styled.form`
  margin: 20px 10px 10px;

  > div {
    &:last-child {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      max-width: 300px;

      > * {
        margin-right: 5px;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
`;
