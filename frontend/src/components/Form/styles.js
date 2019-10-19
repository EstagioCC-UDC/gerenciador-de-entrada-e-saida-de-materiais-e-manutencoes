import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledForm = styled.form`
  margin: 20px 10px 10px;
  position: relative;

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

export const LoadingContainer = styled.div`
  display: ${({ loading }) => (loading ? `flex` : `none`)};
  position: absolute;
  z-index: 5;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #fafafa;
  opacity: 0.7;
  justify-content: center;
  align-items: center;

  > svg {
    font-size: 30px;
  }

  ${({ loading }) =>
    loading &&
    css`
      > svg {
        animation: ${rotate} 2s ease infinite;
      }
    `}
`;
