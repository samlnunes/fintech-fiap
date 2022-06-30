import styled from "styled-components";

export const Container = styled.a`
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-weight: 400;
    font-size: 14px;
    color: #000000;
  }
`;

export const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #eff1f7;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
