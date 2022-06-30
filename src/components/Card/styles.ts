import styled from "styled-components";

interface Props {
  bgColor?: string;
  fontSize?: string;
  alignItems?: string;
}

export const Container = styled.div<Props>`
  width: 100%;
  height: 100%;
  padding: 20px 2vw;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems && props.alignItems};
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#1974B9")};

  h1 {
    font-weight: 400;
    font-size: ${(props) => (props.fontSize ? "14px" : "17px")};
    color: #ffffff;
    margin-bottom: 7px;
  }

  div {
    display: flex;
    align-items: flex-end;
    gap: 5px;

    h2 {
      font-weight: 700;
      font-size: ${(props) => (props.fontSize ? props.fontSize : "32px")};
      color: #ffffff;
    }

    span {
      font-weight: 400;
      font-size: ${props => props.fontSize ? "13px" : "15px"};
      color: #ffffff;
      margin-bottom: 4px;
    }
  }
`;
