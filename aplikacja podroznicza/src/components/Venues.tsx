import { Navbar } from "./navbar";
import {
  Container,
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
  Background,
  Title,
  TitleContainer,
  AttractionContainer,
  AddContainer,
} from "../Styles/Venues-styled";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  DocumentData,
} from "firebase/firestore";
import { db } from "../firebase-config";
import { useState } from "react";
import { Interface } from "node:readline/promises";

interface ICity {
  description: any;
  name: any;
  photo: any;
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

  let all: { description: any; name: any; photo: any } = {
    description: null,
    name: null,
    photo: null,
  };

  const [added, setAdded] = useState<ICity[]>([]);

  docRef.forEach((doc) => {
    info.push(doc.data());
  });

  const mapVenues = info.map(({ description, name, photo }) => (
    <Item key={name}>
      <Info>
        <TitleContainer>
          <Title>{name}</Title>
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
        </TitleContainer>

        <Photo
          src={photo}
          onClick={() => {
            console.log(added, all);
          }}
        ></Photo>
      </Info>
    </Item>
  ));

  let remove = null;

  const mapAdded = added.map(({ name, photo }) => (
    <Item key={name}>
      <Info>
        <Photo
          src={photo}
          onClick={() => {
            console.log(added);
          }}
        ></Photo>
        <Icon
          src="src/assets/Remove.png"
          onClick={() => {
            remove = { name, photo };
            setAdded((current) =>
              current.filter((venue) => venue.name !== name)
            );
          }}
        ></Icon>
      </Info>
    </Item>
  ));

  return (
    <>
      <Background>
        <Container>
          <AttractionContainer>
            <AttBox>
              <Attractions>Attractions:</Attractions>
              <Scrollfix>
                <Scrolldiv>
                  <Itemwrapper>{mapVenues}</Itemwrapper>
                </Scrolldiv>
              </Scrollfix>
            </AttBox>
          </AttractionContainer>
          <AddContainer>
            <AddBox>
              <Added>Added:</Added>
              <Scrollfix>
                <Scrolldiv>
                  <Itemwrapper>{mapAdded}</Itemwrapper>
                </Scrolldiv>
              </Scrollfix>
            </AddBox>
          </AddContainer>
        </Container>
      </Background>
    </>
  );
}
