import { Navbar } from "./navbar";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
const Global = createGlobalStyle`
  html {
   margin: 0;
   padding: 0;
   background-image: url("src/assets/VenuesBG.jpg");
   background-repeat: no-repeat;
   backdrop-filter: blur(5px);
   background-size: cover;
   background-attachment: fixed;
   height: 100vh;  
  }
`;
const Container = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
`;
const Box = styled.div`
  background-color: white;
  height: 600px;
  width: 1000px;
  margin-top: 120px;
  margin-bottom: 120px;
  border-radius: 30px;
  display: flex;
`;
const Attractions = styled.h1`
  margin-left: 10px;
  font-family: "Domine", serif;
  font-size: 50px;
`;
const Added = styled.h1`
  margin-left: 10px;
  font-family: "Domine", serif;
  font-size: 50px;
`;
const AttBox = styled.div`
  margin-top: 20px;
`;
const AddBox = styled.div`
  margin-top: 20px;
`;
const Scrolldiv = styled.div`
  height: 400px;
  width: 400px;
  background-color: darkgray;

  border-radius: 30px;
`;
const Line = styled.div`
  width: 1px;
  height: 500px;
  background-color: black;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 50px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 60px;
`;
export function Venues() {
  return (
    <>
      <Global></Global>
      <Navbar></Navbar>
      <Container>
        <Box>
          <Wrapper>
            <AttBox>
              <Attractions>Attractions:</Attractions>
              <Scrolldiv></Scrolldiv>
            </AttBox>
            <Line></Line>
            <AddBox>
              <Added>Added:</Added>
              <Scrolldiv></Scrolldiv>
            </AddBox>
          </Wrapper>
        </Box>
      </Container>
    </>
  );
}
