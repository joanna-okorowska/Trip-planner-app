import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
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
const Container = styled.div`
  height: 700px;
  width: 500px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0px 0px 31px 22px rgba(0, 0, 0, 0.3);
`;
const Logintxt = styled.span`
  
`
export function Login() {
  return (
    <div>
      <GlobalStyle />
      <Container><Logintxt>hej</Logintxt></Container>
    </div>
  );
}
