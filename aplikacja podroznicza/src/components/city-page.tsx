import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "../firebase-config";
import { CityPageAtr } from "./attractions";
import {
  PageContainer,
  Global,
  Logo,
  LogoContainer,
  LogoImg,
  ImageContainer,
  Txt,
  Param,
  TxtContainer,
  DrpContainer,
  ImgContainer,
} from "../Styles/city-page.styled";
import { useEffect, useState } from "react";

interface ICity {
  id: string;
  name: string;
}
interface ICityAttraction {
  id: string;
  photo: string;
  name: string;
}

export function CityPage() {
  let [city, setCity] = useState<ICity | null>(null);
  let [attractions, setAttractions] = useState<ICityAttraction[] | []>([]);

  useEffect(() => {
    async function getCity() {
      const cityQuery = query(
        collection(db, "CitiesList"),
        where("name", "==", "Funchal"),
        limit(1)
      );

      const cityDocs = await getDocs(cityQuery);
      const cityCity = {
        id: cityDocs.docs[0].id,
        ...cityDocs.docs[0].data(),
      } as ICity;

      const cityVenuesQuery = collection(
        db,
        `CitiesList/${cityCity.id}/Venues`
      );
      const cityVenuesDocs = await getDocs(cityVenuesQuery);
      const cityVenues = cityVenuesDocs.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          } as ICityAttraction)
      );

      setCity(cityCity);
      setAttractions(cityVenues);
    }

    getCity();
  }, []);

  return (
    <PageContainer>
      <Global />
      <LogoContainer>
        <LogoImg src="src/assets/triptastic.png"></LogoImg>
        <Logo>TripTastic</Logo>
      </LogoContainer>
      <ImageContainer src="src/assets/city page/panoramic.jpg"></ImageContainer>
      <TxtContainer>
        <Txt>{city?.name}</Txt>
        <Param>
          Funchal is the capital of Madeira and the most populous out of the
          Portuguese mainland. The city encompasses an area of 76.15 km² and has
          111,892 inhabitants (2011), subdivided into 10 parishes. The view of
          Funchal is magnificent, with its crooked streets that go down the
          mountain side, and in front of the blue sea. This breath-taking
          landscape has captivated visitors from around the world. The city
          gained its name from the impressive amount of fennel (funcho in the
          Portuguese language) growing in this valley, and that led João
          Goncalves Zarco, who arrived here in 1420, to award it the name
          Funchal. <br />
          The climate is subtropical, with mild temperatures throughout the
          year. However, the landscape resembles that of a Mediterranean country
          than the tropics. <br />
          Seen from afar, Funchal is also a sea of colourful vegetation,
          dominated by shades of pink bougainvillea, purple jacaranda trees and
          the spectacular trees with shades of red that line the roads.
          <br />
          The streets branch out from the polarizing centre, the Cathedral,
          built by King Manuel I. In downtown, the old town, we highlight
          several churches and the eighteenth and nineteenth century houses. The
          flowers and fruit markets in the main squares of the city are
          characteristic aspects of Funchal, not forgetting the toboggans that
          descend steeply from Monte to Funchal on a steep descent, directed by
          skilled men, the so-called “carreiros”. Funchal is not only an ancient
          city. Without losing its pristine beauty, many new buildings gave rise
          to big hotels, shops and other attractions addressing the needs of
          modern tourism.
        </Param>
      </TxtContainer>
      <DrpContainer>
        <Txt>Attractions</Txt>
        <ImgContainer>
          {attractions.map((attraction) => (
            <CityPageAtr
              key={attraction.id}
              imgUrl={attraction.photo}
              name={attraction.name}
            />
          ))}
        </ImgContainer>
      </DrpContainer>
    </PageContainer>
  );
}
