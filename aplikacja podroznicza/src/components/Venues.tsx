import { Navbar } from "./navbar";
import {
  Global,
  Container,
  Box,
  Wrapper,
  AttBox,
  Attractions,
  Scrollfix,
  Scrolldiv,
  Itemwrapper,
  Item,
  Info,
  Photo,
  Txt,
  Icon,
  Readmore,
  Separator,
  Line,
  AddBox,
  Added,
} from "../Styles/Venues-styled";

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
