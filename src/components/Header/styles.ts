import styled from "styled-components";

export const Container = styled.div`
  height: 100px;
  width: 100%;
  background-color: #1974b9;
  border-radius: 0px 0px 20px 20px;
  padding: 32px 8vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: 700;
    font-size: 32px;
    color: #ffffff;
  }

  button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #043262;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    span {
      font-weight: 700;
      font-size: 20px;
      color: #ffffff;
    }
  }
`;

export const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #1974b9;
  width: 100%;
  height: 100vh;
  padding: 0 8vw;
  z-index: 2;
`;

export const HeaderMenu = styled.div`
  margin-top: 35px;
  width: 100%;
  text-align: end;

  button {
    background-color: transparent;
    border: none;
    padding: 0;
    text-align: center;
  }
`;

export const InfosUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-top: 100px;

  div {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #043262;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-weight: 700;
      font-size: 28px;
      color: #ffffff;
    }
  }

  p {
    font-weight: 700;
    font-size: 18px;
    color: #ffffff;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin-top: 60px;

  a {
    width: 100%;
    text-align: center;
    font-weight: 400;
    font-size: 16px;
    padding: 15px 0;
    background: rgba(79, 184, 255, 0.49);
    border-radius: 8px;
    color: #ffffff;
  }
`;
