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
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 30px;
  box-sizing: border-box;
`;
export const Box = styled.div`
padding: 30px;
margin: 40px;
 background-color: #ffffff3c;
  border-radius: 25px;
  display: flex;
  -webkit-box-shadow: -1px 4px 62px -7px rgba(0, 0, 0, 1);
  -moz-box-shadow: -1px 4px 62px -7px rgba(0, 0, 0, 1);
  box-shadow: -1px 4px 62px -7px rgba(0, 0, 0, 1);
`;
export const Attractions = styled.h1`
  margin-left: 10px;
  margin-top: 0;
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
  background-color: #d9d9d99d;
  position: relative;
  border-radius: 20px;
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
  width: 430px;
  height: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const Itemwrapper = styled.div`
  margin-left: 40px;

  position: absolute;
`;
export const Scrollfix = styled.div`
  height: 400px;
  width: 510px;
  background-color: darkgray;

  border-radius: 30px;
  overflow: auto;
`;
export const Separator = styled.div`
  height: 1px;
  width: 400px;
  background-color: black;
`;
export const Photo = styled.img`
  height: 70px;
  width: 90px;
`;
export const Info = styled.div`
  width: 350px;
  display: flex;
  align-items: center;
`;
export const Txt = styled.span`
  margin-left: 10px;
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
  position: relative;
  left: 60px;
  &:hover {
    cursor: pointer;
  }
`;