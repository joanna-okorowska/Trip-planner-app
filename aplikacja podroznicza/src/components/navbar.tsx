import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";

const Html = createGlobalStyle`
   body {
  margin: 0;
}
`;
const Container = styled.div`
  background-color: black;
  width: 100vw;
  height: 100px;
  opacity: 0.7;
  position: sticky;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.a`
  font-size: 50px;
  color: white;
  font-family: "Domine", serif;
  margin-left: 10px;
  margin-top: 20px;
  display: block;
`;
const Nav = styled.div`
  display: flex;
  color: white;
  height: 100px;
  margin-right: 30px;
`;
const NavItem = styled.div`
  margin-left: 50px;
  font-family: "Krub", sans-serif;
  display: flex;
  height: 100px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
const Icon = styled.img`
  height: 35px;
  width: 35px;
  margin-right: 15px;
  margin-top: 30px;
`;
const Txt = styled.a`
  margin-top: 7px;
  margin-top: 35px;
`;
const Logoimg = styled.img`
  height: 90px;
  width: 90px;
  margin-top: 5px;
`
const Logocontainer = styled.div`
  display: flex;
`
// const Placeholder = styled.div`
//   background-color: black;
//   height: 4000px;
//   width: 100px;
// `;
export function Navbar() {
  const navigate = useNavigate();
  const navigateToCreate = () => {
    navigate("/create-new-trip");
  };
  return (
    <div>
      <Html></Html>
      <Container>
        <Logocontainer>
        <Logoimg src="src/assets/triptastic.png"></Logoimg>
        <Logo>TripTastic</Logo>
        </Logocontainer>
        <Nav>
          <NavItem>
            <Icon src="src/assets/Mytrips.png"></Icon>
            <Txt>My trips</Txt>
          </NavItem>
          <NavItem>
            <Icon src="src/assets/Create.png"></Icon>
            <Txt onClick={() => navigateToCreate()}>Create new trip</Txt>
          </NavItem>
          <NavItem>
            <Icon src="src/assets/Logout.png"></Icon>
            <Txt>SignOut</Txt>
          </NavItem>
        </Nav>
      </Container>
    </div>
  );
}
