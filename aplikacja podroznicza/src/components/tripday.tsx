
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
  interface ICreateTripDay {
    dayNo: string,
    items: IItem[]
  }
  
  export function CreateTripDay({ dayNo, items }: ICreateTripDay) {
    console.log(items)
    return (
      <Box>
        <BoxInfo>
          <BoxTitle>{`Day ${dayNo}`}:</BoxTitle>
          {items && items.length === 0 ? <Info>Your attractions will appear here...</Info>
          : <TripList>
              {items.map(item => {
                const { id, name } = item;
                return (
                  <li key={id}>
                    <TripListController>
                        <TripListCheckbox type="checkbox"></TripListCheckbox>
                        <TripListItemWrapper>
                          <TripListItem>
                              <span>{name}</span>
                              <TripListDone>done</TripListDone>
                          </TripListItem>
                        </TripListItemWrapper>
                    </TripListController>
              </li>
                )
              })}
            </TripList>
            }
          
        </BoxInfo>
      </Box>
    );
  }