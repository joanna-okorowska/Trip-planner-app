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
import { doc, getDoc, collection, getDocs, DocumentData } from "firebase/firestore";
import { db } from "../firebase-config";
import { useState } from "react";
import { Interface } from "node:readline/promises";
import { useParams } from "react-router-dom";

interface ICity{
  description: any,
   name: any,
    photo: any,
}

const citiesRef = collection(
  db,
  "CitiesList",
  "NI91uSn6mYWB2lAVHkq0",
  "Venues"
);
const docRef = await getDocs(citiesRef);

export function Venues() {
  let info: DocumentData[] = [];
  let {tripId, tripName} = useParams();

  let all: { description: any; name: any; photo: any; }  = {description:null, name:null, photo:null, };

  const [added, setAdded] = useState<ICity[] >([]);

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
              current.filter((_venue) => Venues.name !== name)
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
      {tripId}:{tripName}
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
