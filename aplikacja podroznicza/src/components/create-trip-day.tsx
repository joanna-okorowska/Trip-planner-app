import {
  Box,
  BoxTitle,
  BoxSubtitle,
  BoxButton,
  BoxInfo,
} from "../Styles/create-trip.styled";
import { Dispatch, SetStateAction } from "react";


export function CreateTripDay({ dayNo, setSelectedDay, selectedDay }: { dayNo: string, setSelectedDay: Dispatch<SetStateAction<string>>, selectedDay: string }) {

  const handleClick = () => {
    selectedDay === dayNo ? setSelectedDay("") : setSelectedDay(dayNo);
  }

  return (
    <Box>
      <BoxInfo>
        <BoxTitle>{`Day ${dayNo}`}</BoxTitle>
        <BoxSubtitle>What are we doing today?</BoxSubtitle>
      </BoxInfo>
      <BoxButton onClick={handleClick}>+</BoxButton>
    </Box>
  );
}
