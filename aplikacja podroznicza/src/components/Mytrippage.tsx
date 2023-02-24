import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useState, useContext } from "react";
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
  Buttonedit,
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
  TripListItemWrapper,
} from "../Styles/Mytrippage.styled";
import { TripDay } from "./tripday";
import { useParams } from "react-router-dom";
import { db } from "../firebase-config";
import { doc } from "firebase/firestore";
import { TripContext } from "../Provider/TripProvider";
import { getDocs, collection, getDoc } from "firebase/firestore";
import styled from "styled-components";

interface IItem {
  id: string;
  name: string;
}
interface ITripDay {
  dayNo: string;
  items: IItem[];
  setSelectedDay: Dispatch<SetStateAction<string>>;
  selectedDay: string;
  children: React.ReactNode;
}
interface IMytrippage {
  currentTrip: {
    day_1: [];
    day_2: [];
    day_3: [];
    day_4: [];
    day_5: [];
    day_6: [];
  };
}
const Add = styled.button`
  height: 20px;
`;

const Row = styled.div`
  display: flex;
`;

const Thisday = styled.div`
  height: 300px;
  width: 300px;
  background-color: white;
  margin-top: 10px;
  display: block;
`;
const email = localStorage.getItem("info");
const tst = JSON.parse(email);
const docRef = doc(db, "Users", tst);
const ary = await getDoc(docRef);
const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const Record = styled.div`
  display: flex;
  justify-content: space-between;
`
export function Mytrippage({ currentTrip }: IMytrippage) {
  const [myStyle, setMyStyle] = useState({});
  const docRef = doc(db, "Users", tst);
  const [dayNumber, setDayNumber] = useState(1);
  const { user } = useContext(TripContext);
  const [selectedDay, setSelectedDay] = useState("");
  const [daysListNumber, setDaysListNumber] = useState([]);
  let [daysCount, setDaysCount] = useState(1);
  const navigate = useNavigate();
  const [number, setValue] = useState(0);
  const { tripId } = useParams();
  const id = tripId;

  const data = ary.data();
  const neww = data.Trips;
  const object = neww.find((obj) => obj.id === id);
  const list = object.attractions;

  // const dayNumberList = () => {
  //   const list = [];
  //   for (let i = 1; i <= daysCount; i++) {
  //     list.push(i);
  //   }
  //   return [...list];
  // };

  console.log(list);
  const handleIncreaseDays = () => {
    setDayNumber(dayNumber + 1);
    const display = dayNumber.toString();
    daysListNumber.push({ day: display, attractions: [] });
    setDaysListNumber([...daysListNumber]);
    console.log(daysListNumber);
  };
  const handleDecreaseDays = () => {
    daysListNumber.pop();
    setDaysListNumber([...daysListNumber]);
    console.log(daysListNumber);
  };

  const handleClick = (day) => {
    setMyStyle((prevState) => ({
      ...myStyle,
      [day]: !prevState[day],
    }));
  };

  return (
    <TripContainer>
      <Global />
      <Title>Plan my trip</Title>
      <BoxList>
        {daysListNumber.map(({ attractions, day, children }) => {
          let isVisible = false;
          
          
          return (
            <Row key={day}>
              <Box>
                <BoxInfo>
                  <BoxTitle>{`Day ${day}`}</BoxTitle>
                  <Info>What are we doing today?</Info>
                  <Add
                    onClick={() => {
                      handleClick(day);
                      console.log(attractions)
                      console.log(daysListNumber);
                    }}
                  ></Add>
                </BoxInfo>
                {children}
              </Box>
              <div
                style={{
                  display: myStyle[`${day}`] ? "block" : "none",
                  backgroundColor: "white",
                  height: "500px",
                  width: "500px",
                }}
              >
                {list.map(({ name, duration }) => {
                  const handleClick = () => {
                    attractions.push({name, duration})
                  }

                  return (
                    <List>
                      <Record><span>{name}</span><span>duration: {duration}h</span><button onClick={() => {handleClick()}}>add</button></Record>
                    </List>
                  );
                })}
              </div>
            </Row>
          );
        })}
        <div>
          <button onClick={handleIncreaseDays}>+</button>
          {daysListNumber.length > 1 && (
            <button onClick={handleDecreaseDays}>-</button>
          )}
        </div>
      </BoxList>
    </TripContainer>
  );
}
