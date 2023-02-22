import { Navbar } from "./navbar";
import {
  Container,
  Wrapper,
  AttBox,
  Attractions,
  Scrollfix,
  Scrolldiv,
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
  ContinueButton,
  ItemwrapperAttr,
  ItemwrapperAdd,
  Bg,
  IconContainer,
  AddTitle,
  AddPhoto,
  AddInfo,
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
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

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
  let {tripId, tripName} = useParams();

  let all: { description: any; name: any; photo: any } = {
    description: null,
    name: null,
    photo: null,
  };

  const [added, setAdded] = useState<ICity[]>([]);

  docRef.forEach((doc) => {
    info.push(doc.data());
  });

  const navigate = useNavigate();
  const navigateToCreateTrip = () => {
    navigate("/create-new-trip");
  };

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
      <AddInfo>
        <IconContainer>
          <Icon
            src="src/assets/Remove.png"
            onClick={() => {
              remove = { name, photo };
              setAdded((current) =>
                current.filter((venue) => venue.name !== name)
              );
            }}
          ></Icon>
        </IconContainer>
        <Bg>
          <AddPhoto
            src={photo}
            onClick={() => {
              console.log(added);
            }}
          ></AddPhoto>
          <AddTitle>{name}</AddTitle>
        </Bg>
      </AddInfo>
    </Item>
  ));

  return (
    <>
      <Background>
        <Container>
          <AttractionContainer>
            <AttBox>
              <Attractions>Attractions</Attractions>
              <Scrollfix>
                <Scrolldiv>
                  <ItemwrapperAttr>{mapVenues}</ItemwrapperAttr>
                </Scrolldiv>
              </Scrollfix>
            </AttBox>
          </AttractionContainer>
          <AddContainer>
            <AddBox>
              <Added>Added</Added>
              <Scrollfix>
                <Scrolldiv>
                  <ItemwrapperAdd>{mapAdded}</ItemwrapperAdd>
                </Scrolldiv>
              </Scrollfix>
              <ContinueButton onClick={() => navigateToCreateTrip()}>
                Continue
              </ContinueButton>
            </AddBox>
          </AddContainer>
        </Container>
      </Background>
    </>
  );
}
