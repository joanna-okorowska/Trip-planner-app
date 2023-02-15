
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import {
    BoxList,
    Global,
    Title,
    TripContainer,
    Boxnavbar,
    Navbar,
    Mytrip,
    Createtrip,
    Logout,
    Icon,
    
  } from "../Styles/Mytrippage.styled";
  import { CreateTripDay } from "./tripday";

  const navigate=useNavigate();
  const navigatetologin= () => {
    navigate("/Signout");
  };
  const navigateToCreate = () => {
    navigate("/create-new-trip");
  };
 
  
  export function Mytrippage() {
    return (
      <TripContainer>
        <Boxnavbar>
        <Navbar>
        <Mytrip ><Icon > </Icon>My trip</Mytrip>
        <Createtrip onClick={() => navigateToCreate()}>Create new trip</Createtrip>
        <Logout onClick={() => navigatetologin()}>Sign out</Logout>
        </Navbar>    
        </Boxnavbar>  
        <Global />
          <Title>Plane my trip</Title>
        <BoxList>
          <CreateTripDay dayNo="1"></CreateTripDay>
          <CreateTripDay dayNo="2"></CreateTripDay>
          <CreateTripDay dayNo="3"></CreateTripDay>
          <CreateTripDay dayNo="4"></CreateTripDay>
          <CreateTripDay dayNo="5"></CreateTripDay>
          <CreateTripDay dayNo="6"></CreateTripDay>
        </BoxList>
      </TripContainer>
    );
  }