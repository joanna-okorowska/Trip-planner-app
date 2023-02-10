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
  width: 1200px;
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
  width: 500px;
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
  font-family: "Krub", sans-serif;
  font-size: 13px;
`;
const Item = styled.div`
  width: 430px;
  height: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const Itemwrapper = styled.div`
  margin-left: 40px;

  position: absolute;
`;
const Scrollfix = styled.div`
  height: 400px;
  width: 510px;
  background-color: darkgray;

  border-radius: 30px;
  overflow: auto;
`;
const Separator = styled.div`
  height: 1px;
  width: 400px;
  background-color: black;
`;
const Photo = styled.img`
  height: 70px;
  width: 90px;
`;
const Info = styled.div`
  width: 350px;
  display: flex;
  align-items: center;
`;
const Txt = styled.span`
  margin-left: 10px;
`;
const Readmore = styled.span`
  margin-left: 350px;
  color: #064547;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
const Icon = styled.img`
  height: 30px;
  position: relative;
  left: 60px;
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
              <Scrollfix>
                <Scrolldiv>
                  <Itemwrapper>
                    <Item>
                      <Info>
                        <Photo src="src/assets/Placeholder.png"></Photo>
                        <Txt>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Numquam inventore iure sed dicta totam vero,
                          expedita ipsa, molestiae nisi accusamus quaerat
                          similique est ratione enim.
                        </Txt>
                        <Icon src="src/assets/Add.png"></Icon>
                      </Info>
                      <Readmore>read more...</Readmore>
                      <Separator></Separator>
                    </Item>
                    <Item>
                      <Info>
                        <Photo src="src/assets/Placeholder.png"></Photo>
                        <Txt>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Numquam inventore iure sed dicta totam vero,
                          expedita ipsa, molestiae nisi accusamus quaerat
                          similique est ratione enim.
                        </Txt>
                        <Icon src="src/assets/Add.png"></Icon>
                      </Info>
                      <Readmore>read more...</Readmore>
                      <Separator></Separator>
                    </Item>
                    <Item>
                      <Info>
                        <Photo src="src/assets/Placeholder.png"></Photo>
                        <Txt>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Numquam inventore iure sed dicta totam vero,
                          expedita ipsa, molestiae nisi accusamus quaerat
                          similique est ratione enim.
                        </Txt>
                        <Icon src="src/assets/Add.png"></Icon>
                      </Info>
                      <Readmore>read more...</Readmore>
                      <Separator></Separator>
                    </Item>
                    <Item>
                      <Info>
                        <Photo src="src/assets/Placeholder.png"></Photo>
                        <Txt>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Numquam inventore iure sed dicta totam vero,
                          expedita ipsa, molestiae nisi accusamus quaerat
                          similique est ratione enim.
                        </Txt>
                        <Icon src="src/assets/Add.png"></Icon>
                      </Info>
                      <Readmore>read more...</Readmore>
                      <Separator></Separator>
                    </Item>
                    <Item>
                      <Info>
                        <Photo src="src/assets/Placeholder.png"></Photo>
                        <Txt>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Numquam inventore iure sed dicta totam vero,
                          expedita ipsa, molestiae nisi accusamus quaerat
                          similique est ratione enim.
                        </Txt>
                        <Icon src="src/assets/Add.png"></Icon>
                      </Info>
                      <Readmore>read more...</Readmore>
                      <Separator></Separator>
                    </Item>
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
                    <Item>
                      <Info>
                        <Photo src="src/assets/Placeholder.png"></Photo>
                        <Txt>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Numquam inventore iure sed dicta totam vero,
                          expedita ipsa, molestiae nisi accusamus quaerat
                          similique est ratione enim.
                        </Txt>
                        <Icon src="src/assets/Remove.png"></Icon>
                      </Info>
                      <Readmore>read more...</Readmore>
                      <Separator></Separator>
                    </Item>
                    <Item>
                      <Info>
                        <Photo src="src/assets/Placeholder.png"></Photo>
                        <Txt>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Numquam inventore iure sed dicta totam vero,
                          expedita ipsa, molestiae nisi accusamus quaerat
                          similique est ratione enim.
                        </Txt>
                        <Icon src="src/assets/Remove.png"></Icon>
                      </Info>
                      <Readmore>read more...</Readmore>
                      <Separator></Separator>
                    </Item>
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
