import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const Html = createGlobalStyle`
   body {
  margin: 0;
}
`;
const Container = styled.div`
  background-color: #062f30;
  width: 100vw;
  height: 100px;
  opacity: 0.7;
  position: fixed;
`;
const Logo = styled.a`
  font-size: 50px;
  color: white;
  font-family: "Domine", serif;
  margin-left: 30px;
  margin-top: 20px;
  display: block;
`;
const Nav
// const Placeholder = styled.div`
//   background-color: black;
//   height: 4000px;
//   width: 100px;
// `;
export function Navbar() {
  return (
    <div>
      <Html></Html>
      <Container>
        <Logo>TripTastic</Logo>
        <Nav></Nav>
      </Container>
    </div>
  );
}
