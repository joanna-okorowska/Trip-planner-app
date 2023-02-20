import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
body {
    margin: 0;
    font-family: "Krub", sans-serif;
    color: white;
  }
  img {
    width: 40px;
  }
  img:hover {
    cursor: pointer;
    filter: invert(20%);
  }
  p {
    margin: 10px;
  }
`;
export const Container = styled.div`
  background-color: #053737;
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icons = styled.div`
  width: 25px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;

export const LinksSection = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
`;

export const Link = styled.p`
  &:hover {
    cursor: pointer;
    color: rgb(213, 213, 213);
  }
`;

export const Copyright = styled.div`
  font-size: 12px;
  text-align: center;
  color: #5a8888;
`;
