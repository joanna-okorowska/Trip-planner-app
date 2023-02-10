import {
  BoxList,
  Global,
  Title,
  TripContainer,
} from "../Styles/create-trip.styled";
import { CreateTripDay } from "./create-trip-day";

export function CreateTrip() {
  return (
    <TripContainer>
      <Global />
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
