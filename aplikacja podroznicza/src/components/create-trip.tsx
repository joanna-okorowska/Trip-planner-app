import styled from "styled-components";
import { CreateTripDay } from "./create-trip-day";

const Title = styled.h1`
  text-align: center;
`;

const BoxList = styled.div`
  height: 450px;
  width: 780px;
  background-color: #d9d9d9 40%;
`;

const TripContainer = styled.div`
    border: 3px solid red;
`;

export function CreateTrip() {
  return (
    <TripContainer>
      <Title>Madeira trip</Title>
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
