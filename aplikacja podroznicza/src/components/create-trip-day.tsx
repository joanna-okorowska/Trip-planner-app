import {
  Box,
  BoxTitle,
  BoxSubtitle,
  BoxButton,
  BoxInfo,
} from "../Styles/create-trip.styled";

export function CreateTripDay({ dayNo }: { dayNo: string }) {
  return (
    <Box>
      <BoxInfo>
        <BoxTitle>{`Day ${dayNo}`}</BoxTitle>
        <BoxSubtitle>What are we doing today?</BoxSubtitle>
      </BoxInfo>
      <BoxButton onClick={()=>alert('button clicked!')}>+</BoxButton>
    </Box>
  );
}
