import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledButton = styled.button.attrs(props => ({
  disabled: props.loading,
}))`
  border: 0;
  padding: 10px 12px;
  border-radius: 14px;
  color: #fff;
  font-size: 16px;
  transition: 0.3s;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
  }

  > svg {
    font-size: 25;
  }

  ${props =>
    props.loading &&
    css`
      > svg {
        animation: ${rotate} 2s ease infinite;
      }
    `}
`;

export { StyledButton };
