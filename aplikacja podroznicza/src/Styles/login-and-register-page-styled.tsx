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

  form {
    display: flex;
    flex-direction:column;
    width: 320px;
  }
`;
export const Container = styled.div`
  height: 460px;
  width: 380px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 0px 31px 22px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  flex-direction: column;

`;
export const Logintxt = styled.span`
  font-family: "Domine", serif;
  font-size: 30px;
  margin-bottom: 20px;
  margin-top: 40px;
  display: block;
  color: #064547;
  text-align: center;
`;
export const Field = styled.input`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
  color: #064547;
  font-family: "Krub", sans-serif;
  font-size: 16px;
`;

export const Fieldset = styled.fieldset`
  border-radius: 5px;
  font-family: "Krub", sans-serif;
  width: 100%;
  color: #064547;
  box-sizing: border-box;
  font-size: 13px;
 
`;


export const Button = styled.input`
  width: 100%;
  height: 50px;
  margin: 30px 0;
  background-color: #9e9e9e;
  border-radius: 10px;
  border-style: hidden;
  color: white;
  font-family: "Krub", sans-serif;
  font-size: 15px;
  background-color: #064547;
  &:hover {
    background-color: #062f30;
    cursor: pointer;
  }
`;
export const Line = styled.div`
  background-color: #062f30;
  height: 0.5px;
  width: 100px;
`;
export const Separator = styled.div`
  display: flex;
  align-items: center;
`;

export const Flex = styled.div`
  display: flex;
  margin-top: 10px;
`


export const Septxt = styled.span`
  font-family: "Domine", serif;
  color:#062f30;
  margin: 10px 5px;
  font-size: 13px;
`;
export const Google = styled.button`
  width: 30px;
  height: 30px;
  background-color:transparent;
  border: none;
  margin-right: 15px;
  &:hover {
    cursor: pointer;
  }
`;
export const Facebook = styled.button`
  width: 30px;
  height: 30px;
  background-color:transparent;
  border: none;
  margin-left: 15px;
  &:hover {
    cursor: pointer;
  }
`;
export const Gglimg = styled.img`
  height: 30px;
  width: 30px;
`;
export const Txt = styled.a`

`;
export const Fbimg = styled.img`
  height: 30px;
  width: 17px;

`