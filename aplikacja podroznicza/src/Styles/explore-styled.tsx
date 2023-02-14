import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
body {
    background-image: url("src/assets/Background2.jpg");
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    color: white;
    height: 100vh;
  }
.city {
height: 186px;
  width: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.city:hover .inner {
    opacity: 0;
}
`;
export const Title = styled.h1`
  font-family: "Krub", sans-serif;
  font-size: 60px;
  font-weight: 200;
  margin: 0;
`;

export const Search = styled.input`
  height: 30px;
  width: 292px;
  background-color: #ffffff6c;
  border-radius: 15px;
  border: none;
  ::placeholder {
    padding-left: 10px;
    font-family: "Krub", sans-serif;
    font-size: 15px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 10px;
`;

export const Container = styled.div`
  width: 1000px;
`;
export const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

export const CitiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  height: 700px;
`;

export const Bg = styled.div`
  height: 220px;
  width: 300px;
  background-color: #ffffff6c;
  border-radius: 15px;
  margin-bottom: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GhostElement = styled.div`
  width: 300px;
`;

// const CityImage = styled.img`
// height: 186px;
//   width: 260px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;


// export const City = ({ name, photo }) => {
//   return <CityImage src={photo} alt={name} />;
// };

export const Barcelona = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("src/assets/Barcelona.jpg");
  &:hover {
    cursor: pointer;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
      url("src/assets/Barcelona.jpg");
  }
`;
export const Berlin = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("src/assets/Berlin.jpg");
  &:hover {
    cursor: pointer;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
      url("src/assets/Berlin.jpg");
  }
`;
export const Copenhagen = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("src/assets/Copenhagen.jpg");
  &:hover {
    cursor: pointer;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
      url("src/assets/Copenhagen.jpg");
  }
`;
export const Funchal = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("src/assets/Funchal.jpg");
  &:hover {
    cursor: pointer;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
      url("src/assets/Funchal.jpg");
  }
`;
export const Lisbon = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("src/assets/Lisbon.jpg");
  &:hover {
    cursor: pointer;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
      url("src/assets/Lisbon.jpg");
  }
`;
export const Oslo = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("src/assets/Oslo.jpg");
  &:hover {
    cursor: pointer;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
      url("src/assets/Oslo.jpg");
  }
`;
export const Madrid = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("src/assets/Madrid.jpg");
  &:hover {
    cursor: pointer;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
      url("src/assets/Madrid.jpg");
  }
`;
export const Paris = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("src/assets/Paris.jpg");
  &:hover {
    cursor: pointer;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
      url("src/assets/Paris.jpg");
  }
`;
export const Prague = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("src/assets/Prague.jpg");
  &:hover {
    cursor: pointer;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
      url("src/assets/Prague.jpg");
  }
`;
export const Rome = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("src/assets/Rome.jpg");
  &:hover {
    cursor: pointer;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
      url("src/assets/Rome.jpg");
  }
`;
export const Vienna = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("src/assets/Vienna.jpg");
  &:hover {
    cursor: pointer;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
      url("src/assets/Vienna.jpg");
  }
`;
export const Warsaw = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("src/assets/Warsaw.jpg");
  &:hover {
    cursor: pointer;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
      url("src/assets/Warsaw.jpg");
  }
`;
export const Name = styled.h2`
  color: white;
  font-family: "Domine", serif;
  font-weight: 200;
  font-size: 30px;
`;

