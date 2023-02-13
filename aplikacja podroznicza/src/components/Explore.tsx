import { Navbar } from "./navbar";
import {
  Global,
  Title,
  Search,
  Header,
  Container,
  Flex,
  CitiesList,
  Bg,
  GhostElement,
  Barcelona,
  Berlin,
  Copenhagen,
  Funchal,
  Lisbon,
  Oslo,
  Madrid,
  Paris,
  Prague,
  Rome,
  Vienna,
  Warsaw,
  // City,
  Name,
} from "../Styles/explore-styled";
import { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import { useNavigate } from "react-router-dom";

export function Explore() {
  // const useCollection = (collection: any) => {
  //   const [city, setCity] = useState([]);
  //   const documentsCollection = (doc: any) => {
  //     return { ...doc.data() };
  //   };
  //   useEffect(() => {
  //     const subscribe = collection.onSnapshot((snapshot: any) => {
  //       const dataFromCollection = snapshot.docs.map(documentsCollection);
  //       setCity(dataFromCollection);
  //     });
  //     return () => subscribe;
  //   }, [collection]);
  //   return city;
  // };

  // const citiesCollection = collection(db, "CitiesList");
  // const cities = useCollection(citiesCollection);

  const navigate = useNavigate();
  const navigateToFunchalPage = () => {
    navigate("/FunchalPage"); // nazwa ścieżki strony o Funchal
  };
  

  return (
    <>
      <Navbar />
      <Global />
      <Flex>
        <Container>
          <Header>
            <GhostElement />
            <Title>explore</Title>
            <Search type="text" placeholder="Search" />
          </Header>
          <CitiesList>
            {/* <Bg>
              {cities.map(({ name, photo }) => (
                <City name={name} photo={photo}  />
              ))}
            </Bg> */}
            <Bg>
              <Barcelona className="city">
                <Name className="inner">Barcelona</Name>
              </Barcelona>
            </Bg>
            <Bg>
              <Berlin className="city">
                <Name className="inner">Berlin</Name>
              </Berlin>
            </Bg>
            <Bg>
              <Copenhagen className="city">
                <Name className="inner">Copenhagen</Name>
              </Copenhagen>
            </Bg>
            <Bg>
              <Funchal onClick={() => navigateToFunchalPage()} className="city">
                <Name className="inner">Funchal</Name>
              </Funchal>
            </Bg>
            <Bg>
              <Lisbon className="city">
                <Name className="inner">Lisbon</Name>
              </Lisbon>
            </Bg>
            <Bg>
              <Madrid className="city">
                <Name className="inner">Madrid</Name>
              </Madrid>
            </Bg>
            <Bg>
              <Oslo className="city">
                <Name className="inner">Oslo</Name>
              </Oslo>
            </Bg>
            <Bg>
              <Paris className="city">
                <Name className="inner">Paris</Name>
              </Paris>
            </Bg>
            <Bg>
              <Prague className="city">
                <Name className="inner">Prague</Name>
              </Prague>
            </Bg>
            <Bg>
              <Rome className="city">
                <Name className="inner">Rome</Name>
              </Rome>
            </Bg>
            <Bg>
              <Vienna className="city">
                <Name className="inner">Vienna</Name>
              </Vienna>
            </Bg>
            <Bg>
              <Warsaw className="city">
                <Name className="inner">Warsaw</Name>
              </Warsaw>
            </Bg>
          </CitiesList>
        </Container>
      </Flex>
    </>
  );
}
