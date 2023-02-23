import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { Login } from "./login-page";
import { ButtonExplore } from "../Styles/videoBackground-styled";


const GlobalStyleWrapper = createGlobalStyle`
   body {
  margin: 0;
}
`;
const Container = styled.div`
  background-color: black;
  width: 100%;
  height: 100px;
  opacity: 0.7;
  position: absolute;
  z-index: 2;
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
`;
const Logocontainer = styled.div`
  display: flex;
`;
const Usercred = styled.span`
  margin-top: 35px;
  font-family: "Krub", sans-serif;
  color: white;
`;

export function Navbar() {
  const { pathname } = useLocation();

  const log = localStorage.getItem("info");
  const navigate = useNavigate();
  const navigateToCreate = () => {
    navigate("/create-new-trip");
  };
  const navigateToLanding = () => {
    navigate("/");
  };
  const navigateToMyTrips = () => {
    navigate("/myTrips");
  };
  const logout = async () => {
    await signOut(auth);
    localStorage.setItem("isLogged", "false");
    navigateToLanding();
  };

  if (pathname === "/" || pathname === "/signUp" || pathname === "/signIn") {
    return null;
  } else {
    return (
      <div>
        <GlobalStyleWrapper></GlobalStyleWrapper>
        <Container>
          <Logocontainer>
            <Logoimg src="src/assets/triptastic.png"></Logoimg>
            <Logo>TripTastic</Logo>
          </Logocontainer>

          <Usercred>Logged in as: {log}</Usercred>
          <Nav>
            <NavItem>
              <Icon src="src/assets/Mytrips.png"></Icon>
              <Txt onClick={() => navigateToMyTrips()}>My trips</Txt>
            </NavItem>
            <NavItem>
              <Icon src="src/assets/Create.png"></Icon>
              <Txt onClick={() => navigateToCreate()}>Create new trip</Txt>
            </NavItem>
            {localStorage.getItem("isLogged") === "true" ? (
              <NavItem>
                <Icon src="src/assets/Logout.png"></Icon>
                <Txt onClick={() => logout()}>SignOut</Txt>
              </NavItem>
            ) : (
              <NavItem>
                <Icon src="src/assets/Logout.png"></Icon>
                <Txt onClick={() => navigateToLanding()}>SignIn/SignUp</Txt>
              </NavItem>
            )}
          </Nav>
        </Container>
      </div>
    );
  }
}
