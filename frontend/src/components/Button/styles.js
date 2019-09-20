import styled, { keyframes, css } from 'styled-components';
import { lighten } from 'polished';

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
  backgroundColor: props.backgroundColor,
}))`
  border: 0;
  padding: 5px 25px;
  border-radius: 16px;
  color: #fff;
  font-size: 25px;
  ${props => `background: ${props.backgroundColor};`}
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
      svg {
        animation: ${rotate} 2s ease-out infinite;
      }
    `}

  &:hover {
    ${props => ` background: ${lighten(0.15, props.backgroundColor)};`}
  }
`;

export { StyledButton };
