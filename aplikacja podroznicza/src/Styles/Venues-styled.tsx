import styled from "styled-components";

export const Background = styled.div`
  background-image: url("src/assets/VenuesBG.jpg");
  background-repeat: no-repeat;
  backdrop-filter: blur(5px);
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  width: 100vw;
`;
export const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 30px;
  box-sizing: border-box;
`;
export const AttractionContainer = styled.div`
  padding: 30px;
  margin: 40px;
  background-color: #ffffff3c;
  border-radius: 25px;
  width: 80%;
  display: flex;
  -webkit-box-shadow: -1px 4px 62px -7px rgba(0, 0, 0, 1);
  -moz-box-shadow: -1px 4px 62px -7px rgba(0, 0, 0, 1);
  box-shadow: -1px 4px 62px -7px rgba(0, 0, 0, 1);
`;
export const AddContainer = styled.div`
  padding: 30px;
  margin: 40px;
  background-color: #ffffff3c;
  border-radius: 25px;
  width: 20%;
  display: flex;
  -webkit-box-shadow: -1px 4px 62px -7px rgba(0, 0, 0, 1);
  -moz-box-shadow: -1px 4px 62px -7px rgba(0, 0, 0, 1);
  box-shadow: -1px 4px 62px -7px rgba(0, 0, 0, 1);
`;

export const Attractions = styled.h1`
  margin: 0;
  font-family: "Domine", serif;
  font-size: 50px;
`;
export const Added = styled.h1`
  margin-left: 10px;
  margin-top: 0;
  font-family: "Domine", serif;
  font-size: 50px;
`;
export const AttBox = styled.div`
  margin-top: 20px;
`;
export const AddBox = styled.div`
  margin-top: 20px;
`;
export const Scrolldiv = styled.div`
  height: 100%;
  width: 100%;

  position: relative;
  border-radius: 20px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }
  /* ::-webkit-scrollbar-track {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  &::-webkit-scrollbar-thumb {
    background: #5e5d5d;
    border-radius: 5px;
  } */
`;
export const Line = styled.div`
  width: 1px;
  height: 500px;
  background-color: black;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 50px;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 50px;
  font-family: "Krub", sans-serif;
  font-size: 13px;
`;
export const Item = styled.div`
  height: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #ffffff96;
  border-radius: 15px;
`;
export const Itemwrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  gap: 12px;
  margin: 0;
`;
export const Scrollfix = styled.div`
  height: 90%;
  width: 100%;
  /* background-color: darkgray; */

  border-radius: 30px;
  overflow: auto;
`;
export const Separator = styled.div`
  height: 1px;
  width: 400px;
  background-color: black;
`;
export const Photo = styled.img`
  height: 170px;
  width: 218px;
  margin-top: 10px;
`;
export const Info = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;
export const Txt = styled.span`
  margin-left: 10px;
`;

export const Title = styled.h3`
  color: #064547;
  font-family: "Krub", sans-serif;
  font-weight: 600;
  font-size: 14px;
  margin: 0;
  width: 150px;
`;

export const TitleContainer = styled.div`
  color: #064547;
  font-family: "Krub", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 218px;
  height: 30px;
`;

export const Readmore = styled.span`
  margin-left: 350px;
  color: #064547;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
export const Icon = styled.img`
  height: 30px;
  &:hover {
    cursor: pointer;
  }
`;
