import styled from "styled-components";

const Box = styled.div`
  width: 400px;
  height: 100px;
  background-color: white;
  border-radius: 10px;
  color: #064547;
`;

const BoxTitle = styled.h1`
  font-size: 40px;
  margin: 5px;
  padding: 10px;
`;

const BoxSubtitle = styled.h3`
  padding: 0 10px 10px;
`;

export function CreateTripDay({ dayNo }: { dayNo: string }) {
  return (
    <Box>
      <BoxTitle>{`Day ${dayNo}`}</BoxTitle>
      <BoxSubtitle>What are we doing today?</BoxSubtitle>
    </Box>
  );
}
