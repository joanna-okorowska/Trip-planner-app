import { Navbar } from "./navbar";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Separator } from "../Styles/login-and-register-page-styled";
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
  -webkit-box-shadow: -1px 4px 62px -7px rgba(0, 0, 0, 1);
  -moz-box-shadow: -1px 4px 62px -7px rgba(0, 0, 0, 1);
  box-shadow: -1px 4px 62px -7px rgba(0, 0, 0, 1);
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
  position: relative;
  border-radius: 30px;
  overflow: auto;

  &::-webkit-scrollbar {
    background-color: darkgray;
    width: 10px;
    height: 100px;
    border-radius: 30px;
  }
  ::-webkit-scrollbar-track {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  &::-webkit-scrollbar-thumb {
    background: #5e5d5d;
    border-radius: 5px;
    width: 5px;
  }
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
  margin-left: 50px;
`;
const Item = styled.div`
  width: 320px;
  height: 100px;
  background-color: white;
  margin-bottom: 30px;
`;
const Itemwrapper = styled.div`
  margin-left: 40px;
  margin-top: 10px;
  position: absolute;
`;
const Scrollfix = styled.div`
  height: 400px;
  width: 410px;
  background-color: darkgray;
  position: relative;
  border-radius: 30px;
  overflow: auto;
`;
const Separator = styled.div`
  height: 1px;
  width: 400px;
  
`
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
              <Scrollfix>
                <Scrolldiv>
                  <Itemwrapper>
                    <Item></Item>
                    <Separator></Separator>
                    <Item></Item>
                    <Item></Item>
                    <Item></Item>
                    <Item></Item>
                  </Itemwrapper>
                </Scrolldiv>
              </Scrollfix>
            </AttBox>
            <Line></Line>
            <AddBox>
              <Added>Added:</Added>
              <Scrollfix>
                <Scrolldiv>
                  <Itemwrapper>
                    <Item></Item>
                    <Item></Item>
                    <Item></Item>
                    <Item></Item>
                    <Item></Item>
                  </Itemwrapper>
                </Scrolldiv>
              </Scrollfix>
            </AddBox>
          </Wrapper>
        </Box>
      </Container>
    </>
  );
}
