import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  #root {
    height: 100%;
    width: 100%;
  }

  html, body {
    -webkit-font-smoothing: antialiased;
    background-color: #fafafa;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active  {
    box-shadow: 0 0 0 30px #fafafa inset !important;
    -webkit-box-shadow: 0 0 0 30px #fafafa inset !important;
  }

  button {
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  .ripple {
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);
  }

  .ripple:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform .5s, opacity 1s;
  }

  .ripple:active:after {
    transform: scale(0, 0);
    opacity: .3;
    transition: 0s;
  }
`;
