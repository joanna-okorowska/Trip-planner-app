import { Dispatch, SetStateAction } from "react";
import {
    Box,
    BoxTitle,
    BoxButton,
    BoxInfo,
    Info,
    TripList,
    TripListItem,
    TripListCheckbox,
    TripListController,
    TripListDone,
    TripListItemWrapper
  } from "../Styles/Mytrippage.styled";

  interface IItem {
    id: string,
    name: string
  }
  interface ITripDay {
    dayNo: string,
    items: IItem[],
    setSelectedDay: Dispatch<SetStateAction<string>>,
    selectedDay: string,
    children: React.ReactNode
  }
  
  export function TripDay({ dayNo, setSelectedDay, selectedDay, children }: ITripDay) {
    const handleClick = () => {
      selectedDay === dayNo ? setSelectedDay("") : setSelectedDay(dayNo);
    }
  
    return (
      <Box>
        <BoxInfo>
          <BoxTitle>{`Day ${dayNo}`}</BoxTitle>
          <Info>What are we doing today?</Info>
        </BoxInfo>
        {children}
      </Box>
    );
  }