import { SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BoxList,
  Global,
  Title,
  TripContainer,
  TripContent,
  StyledTripListItems,
  
} from "../Styles/create-trip.styled";
import { CreateTripDay } from "./create-trip-day";
import { Navbar } from "./navbar";



interface IItem {
  id: string,
  name: string
}

interface CreateTripProps {
  currentTrip: {},
  addToTrip: ({dayNumber, data} : {dayNumber: string,data:IItem[] })=>void
}

export function CreateTrip({addToTrip, currentTrip} : CreateTripProps) {
  const [selectedDay, setSelectedDay] = useState("");
  const navigateToTrip = useNavigate();
  useEffect(() => {
    // tutaj wywołać clearCurrentTrip
  },[])

export function CreateTrip() {
  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLogged");
    if (isLoggedIn !== "true") {
      navigate("/signIn");
    }
  }, []);

  return (
    <TripContainer>
      <Navbar></Navbar>
      <Global />

      <Title>Madeira trip</Title>     
      <TripContent>
        <div>
          <BoxList>
            <CreateTripDay dayNo="1" setSelectedDay={setSelectedDay} selectedDay={selectedDay}></CreateTripDay>
            <CreateTripDay dayNo="2" setSelectedDay={setSelectedDay} selectedDay={selectedDay}></CreateTripDay>
            <CreateTripDay dayNo="3" setSelectedDay={setSelectedDay} selectedDay={selectedDay}></CreateTripDay>
            <CreateTripDay dayNo="4" setSelectedDay={setSelectedDay} selectedDay={selectedDay}></CreateTripDay>
            <CreateTripDay dayNo="5" setSelectedDay={setSelectedDay} selectedDay={selectedDay}></CreateTripDay>
            <CreateTripDay dayNo="6" setSelectedDay={setSelectedDay} selectedDay={selectedDay}></CreateTripDay>
          </BoxList>
          <button className="Buttongototrip" onClick={() => navigateToTrip('/mytrippage')}>Go to Your trip</button>
        </div>
        <StyledTripListItems className="" isHidden={selectedDay === ""} cityId={"NI91uSn6mYWB2lAVHkq0"} selectedDay={selectedDay} addToTrip={addToTrip} currentTrip={currentTrip} />
      </TripContent> 

      <Title>Madeira trip</Title>
      <BoxList>
        <CreateTripDay dayNo="1" setSelectedDay={function (value: SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        } } selectedDay={""}></CreateTripDay>
        <CreateTripDay dayNo="2" setSelectedDay={function (value: SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        } } selectedDay={""}></CreateTripDay>
        <CreateTripDay dayNo="3" setSelectedDay={function (value: SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        } } selectedDay={""}></CreateTripDay>
        <CreateTripDay dayNo="4"setSelectedDay={function (value: SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        } } selectedDay={""}></CreateTripDay>
        <CreateTripDay dayNo="5"setSelectedDay={function (value: SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        } } selectedDay={""}></CreateTripDay>
        <CreateTripDay dayNo="6" setSelectedDay={function (value: SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        } } selectedDay={""}></CreateTripDay>
      </BoxList>

    </TripContainer>
  );
}
