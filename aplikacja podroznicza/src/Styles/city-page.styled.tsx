import styled, { createGlobalStyle } from "styled-components";
import { Attractions } from "./Venues-styled";

export const Global = createGlobalStyle`
  body {
   margin: 0;
   padding: 0;
   background-color: #064547;
   background-repeat: no-repeat;
   background-size: cover;
  }
`;

export const CityPage = styled.div`
    
`
export const PageContainer = styled.div`
    width: 100%;
`


export const Logo = styled.div`
font-size: 50px;
  color: white;
  font-family: "Domine", serif;
  margin-left: 10px;
  margin-top: 20px;
  display: block;
`
export const LogoContainer = styled.div`
display: flex;
    
`

export const LogoImg = styled.img`
  height: 90px;
  width: 90px;
  margin-top: 5px;
`

export const ImageContainer = styled.img`
    height: 50vh;
    width: 100%;
    margin-top: 60px;
`

export const Txt = styled.span`
    font-size: 50px;
  color: white;
  font-family: "Domine", serif;
  margin: 100px 0;
  display: flex;
  align-items: center;
  justify-content: center;  

`
export const Param = styled.span`
    
    color: #ffffff68;
    font-size: 20px;
    font-weight: 100;
    width: 100vh;
`
export const TxtContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const DrpContainer = styled.div`
    margin: 100px 0;
    

`
export const Img = styled.img`
    height: 200px;
    width: 300px;
    border-radius: 7px 7px 0 0;
    border-bottom: 1px solid white;
    
    `
export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
    
    `

export const IslandCnt = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 370px;
    border-radius: 7px;
    border: 1px solid #FFF;
    margin-bottom: 30px;
    background-color: #ffffff30;
    margin-right: 10px;
    `

export const TxtIld = styled.span`
    color: white;
    font-size: 20px;
    font-family: "Domine", serif;    
  display: flex;
  align-items: center;
  justify-content: center; 
  text-align: center;
  margin-bottom: 7px;
`
export const ParamIld = styled.span`
    color: white;
    font-size: 10px;
    max-width: 300px;
    text-align: center;
    padding: 0 20px;
`

export const Input = styled.input`
    width: 120px;
    height: 25px;
    border: 1px solid white;
    margin-top: 10px;
    border-radius: 7px;
    background-color: #ffffff2b;
    margin-bottom: 5px;

    &::placeholder {
        color: #064547;
        text-align: center;
        font-size: 12px;
        text-align: start;
        padding-left: 5px;
        
    }
`
export const AttractionCard = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex-grow: 1;
    padding: 20px;
    align-items: center;
    
`
export const AttractionInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`
