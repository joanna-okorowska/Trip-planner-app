import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export function Main() {
  return (
    <div>
      <Html></Html>
      <Container>
        <Logo>TripTastic</Logo>
        <Nav>
          <NavItem>
            <Icon src="src/assets/Mytrips.png"></Icon>
            <Txt>My trips</Txt>
          </NavItem>
          <NavItem>
            <Icon src="src/assets/Explore.png"></Icon>
            <Txt>Explore</Txt>
          </NavItem>
          <NavItem>
            <Icon src="src/assets/Create.png"></Icon>
            <Txt href="/create-new-trip">Create new trip</Txt>
          </NavItem>
        </Nav>
      </Container>
    </div>
  );
}
