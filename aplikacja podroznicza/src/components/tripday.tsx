import {
    Box,
    BoxTitle,
    BoxButton,
    BoxInfo,
  } from "../Styles/Mytrippage.styled";
  
  export function CreateTripDay({ dayNo }: { dayNo: string }) {
    return (
      <Box>
        <BoxInfo>
          <BoxTitle>{`Day ${dayNo}`}:</BoxTitle>
          
        </BoxInfo>
        <BoxButton onClick={()=>alert('button clicked!')}>+</BoxButton>
      </Box>
    );
  }