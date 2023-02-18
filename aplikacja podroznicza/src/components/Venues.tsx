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
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { useState } from "react";
const citiesRef = collection(
  db,
  "CitiesList",
  "NI91uSn6mYWB2lAVHkq0",
  "Venues"
);
const docRef = await getDocs(citiesRef);

export function Venues() {
  let info = [];

  let all = null;

  const [added, setAdded] = useState([]);

  docRef.forEach((doc) => {
    info.push(doc.data());
  });

  const mapVenues = info.map(({ description, name, photo }) => (
    <Item key={name}>
      <Info>
        <Photo
          src={photo}
          onClick={() => {
            console.log(added, all);
          }}
        ></Photo>
        <Txt>{description}</Txt>
        <Icon
          src="src/assets/Add.png"
          onClick={() => {
            const posts = JSON.stringify(added);
            const post = JSON.stringify(description);
            if (posts.includes(post)) {
              alert("Atrakcja już dodana !");
            } else {
              all = { description, name, photo };
              setAdded((current) => [...current, all]);
            }
          }}
        ></Icon>
      </Info>
      <Readmore>read more...</Readmore>
      <Separator></Separator>
    </Item>
  ));

  let remove = null;

  const mapAdded = added.map(({ description, name, photo }) => (
    <Item key={name}>
      <Info>
        <Photo
          src={photo}
          onClick={() => {
            console.log(added);
          }}
        ></Photo>
        <Txt>{description}</Txt>
        <Icon
          src="src/assets/Remove.png"
          onClick={() => {
            remove = { description, name, photo };
            setAdded((current) =>
              current.filter((venue) => venue.name !== name)
            );
          }}
        ></Icon>
      </Info>
      <Readmore>read more...</Readmore>
      <Separator></Separator>
    </Item>
  ));

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
                  <Itemwrapper>{mapVenues}</Itemwrapper>
                </Scrolldiv>
              </Scrollfix>
            </AttBox>
            <Line></Line>
            <AddBox>
              <Added>Added:</Added>
              <Scrollfix>
                <Scrolldiv>
                  <Itemwrapper>{mapAdded}</Itemwrapper>
                </Scrolldiv>
              </Scrollfix>
            </AddBox>
          </Wrapper>
        </Box>
      </Container>
    </>
  );
}
