
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
    Boxitem,
    Buttonedit
    
    
  } from "../Styles/Mytrippage.styled";
  import { CreateTripDay } from "./tripday";

  interface IMytrippage {
    currentTrip: {day_1: [], day_2: [], day_3: [], day_4: [], day_5: [], day_6: []}
  }
  
  
  export function Mytrippage({currentTrip} : IMytrippage) {
    const navigate=useNavigate();
  const navigatetologin= () => {
    navigate("/signIn");
  };
  const navigateToCreate = () => {
    navigate("/create-new-trip");
  };

    return (
      <TripContainer>
        <Boxnavbar>
        <Navbar>
      <Boxitem>  <Icon src="src/assets/Mytrips.png"></Icon><Mytrip >My trip</Mytrip></Boxitem>
      <Boxitem> <Icon src="src/assets/Create.png"></Icon><Createtrip onClick={() => navigateToCreate()}>Create new trip</Createtrip></Boxitem>
      <Boxitem> <Icon src="src/assets/Logout.png"></Icon><Logout onClick={() => navigatetologin()}>Sign out</Logout></Boxitem>
        </Navbar>    
        </Boxnavbar>  
        <Global />
          <Title>Plan my trip</Title>
        <BoxList>
          <CreateTripDay dayNo="1" items={currentTrip.day_1}></CreateTripDay>
          <CreateTripDay dayNo="2" items={currentTrip.day_2}></CreateTripDay>
          <CreateTripDay dayNo="3" items={currentTrip.day_3}></CreateTripDay>
          <CreateTripDay dayNo="4" items={currentTrip.day_4}></CreateTripDay>
          <CreateTripDay dayNo="5" items={currentTrip.day_5}></CreateTripDay>
          <CreateTripDay dayNo="6" items={currentTrip.day_6}></CreateTripDay>
        </BoxList>
        <Buttonedit onClick={() => navigateToCreate()}>Edit your trip</Buttonedit>
      </TripContainer>
    );
  }