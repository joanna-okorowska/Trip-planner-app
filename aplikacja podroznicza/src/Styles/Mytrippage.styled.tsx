import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  body {
   margin: 0;
   padding: 0;
   background-image: url("src/assets/Background.jpg");
   background-repeat: no-repeat;
   backdrop-filter: blur(5px);
   background-size: cover;
   
   height: 100vh;
   
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-family: "Domine", serif;
  color: white;
  font-size: 40px;
  font-weight: 400;
`;

export const BoxList = styled.div`
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  background-color: #d9d9d949;
  border-radius: 10px;
  height: auto;
  width: 50vh;
  padding: 20px 0;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  
  margin-bottom: auto;
`;

export const TripContainer = styled.div``;

export const Box = styled.div`
  width: 400px;
  height: 100px;
  background-color: white;
  border-radius: 10px;
  color: #064547;
  padding: 10px 20px 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BoxInfo = styled.div``;

export const BoxTitle = styled.h1`
  font-size: 35px;
  margin: 5px;
  font-family: "Domine", serif;
  font-weight: 400;
`;

export const BoxSubtitle = styled.h3`
  padding: 0 10px 10px;
  font-family: "Krub", serif;
  font-size: 17px;
  font-weight: 400;
`;

export const BoxButton = styled.button`
  border: 1px solid #064547;
  width: 42px;
  height: 42px;
  border-radius: 7px;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  font-weight: 400;
  font-family: "Domine", serif;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`
export const Boxnavbar=styled.div`
    width: 100%;
    height: 70px;
    
    display:flex;
    justify-content: end;
`
export const Navbar=styled.div`
    width: 700px;
    height: 80px;
    display: flex;
    justify-content: space-around;
    border:3px solid green;
`
export const Mytrip=styled.div`
    width: 100px;
    height: 40px;
    font-size: 16px;
    color:aquamarine;
    line-height: 70px;
    &:hover{
        cursor: pointer;
        color: blue;
    }
`
export const Createtrip=styled.div`
    width: 100px;
    height: 40px;
    font-size: 16px;
    color:aquamarine;
    line-height: 70px; 
    &:hover{
        cursor: pointer;
        color: blue;
    }
`
;
export const Logout=styled.div`
    width: 100px;
    height: 40px;
    font-size: 15px;
    color:aquamarine;
    line-height: 70px; 
    &:hover{
        cursor: pointer;
        color: blue;
    }

`
export const Icon=styled.div`
    
`
export const List=styled.ol`
    width: 80px;
    height: 50px;
    border: 2px solid black;
`