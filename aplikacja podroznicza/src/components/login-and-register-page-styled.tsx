import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  body {
   margin: 0;
   padding: 0;
   background-image: url("src/assets/Background.jpg");
   background-repeat: no-repeat;
   backdrop-filter: blur(5px);
   background-size: cover;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
  }
`;
export const Container = styled.div`
  height: 700px;
  width: 500px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0px 0px 31px 22px rgba(0, 0, 0, 0.3);
`;
export const Logintxt = styled.span`
  font-family: "Domine", serif;
  font-size: 35px;
  padding-top: 50px;
  margin-left: 70px;
  margin-right: 30px;
  display: block;
`;
export const Field = styled.input`
  margin-left: 70px;
  width: 350px;
  height: 50px;
  background-color: #9e9e9e;
  border-radius: 10px;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
  color: white;
  font-family: "Krub", sans-serif;
  font-size: 20px;
`;
export const Name = styled.label`
  margin-left: 80px;
  font-family: "Krub", sans-serif;
  font-size: 20px;
  margin-bottom: -12px;
  display: block;
  margin-top: 30px;
`;
export const Button = styled.input`
  margin-top: 50px;
  margin-left: 70px;
  width: 355px;
  height: 50px;
  background-color: #9e9e9e;
  border-radius: 10px;
  border-style: hidden;
  color: white;
  font-family: "Krub", sans-serif;
  font-size: 20px;
  background-color: #064547;
  box-shadow: 0px 0px 24px 8px rgba(0, 0, 0, 0.42);
  &:hover {
    background-color: #062f30;
    cursor: pointer;
  }
`;
export const Line = styled.div`
  background-color: black;
  height: 1px;
  width: 100px;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
`;
export const Separator = styled.div`
  margin-top: 50px;
  margin-left: 55px;
  display: flex;
`;
export const Septxt = styled.span`
  font-family: "Domine", serif;
`;
export const Google = styled.button`
  display: block;
  width: 355px;
  height: 50px;
  left: 542px;
  top: 556px;
  border-style: hidden;
  background: #b60000;
  border-radius: 10px;
  margin-left: 70px;
  margin-top: 30px;
  color: white;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #670000;
    cursor: pointer;
  }
`;
export const Facebook = styled.button`
  margin-top: 30px;
  display: block;
  width: 355px;
  height: 50px;
  left: 542px;
  top: 556px;
  border-style: hidden;
  background: #0125a8;
  border-radius: 10px;
  margin-left: 70px;
  color: white;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #001049;
    cursor: pointer;
  }
`;
export const Gglimg = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 20px;
  margin-left: -20px;
`;
export const Txt = styled.a``;
export const Fbimg = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 20px;
`