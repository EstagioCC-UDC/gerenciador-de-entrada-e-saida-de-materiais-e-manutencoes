import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  > div {
    max-height: 500px;
    border: 1px solid #bbb;
    padding: 15px 15px;
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: border-box;
    margin: 20px 0;

    -webkit-box-shadow: 10px 9px 5px -4px rgba(170, 170, 170, 1);
    -moz-box-shadow: 10px 9px 5px -4px rgba(170, 170, 170, 1);
    box-shadow: 10px 9px 5px -4px rgba(170, 170, 170, 1);

    > h2 {
      max-width: 80%;
      text-align: center;
      margin-bottom: 20px;
    }

    > img {
      height: 150px;
      margin-bottom: 40px;
      margin-top: 10px;
    }

    > form {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      > div {
        display: flex;
        justify-content: left;
        align-items: center;

        border: 1px solid #bbb;
        margin-bottom: 15px;
        padding: 15px 10px;
        font-size: 18px;
        width: 300px;
        border-radius: 15px;

        svg {
          border-right: solid 1px #000;
          padding-right: 10px;
          display: flex;
          font-size: 30px;
        }

        input {
          border: none;
          background-color: inherit;
          margin-left: 10px;
          display: block;
          width: 100%;
          font-size: 18px;
          line-height: 18px;
        }
      }
    }
  }
`;
