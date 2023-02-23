import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useEffect, useState, useContext } from "react";
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
} from "../Styles/Mytrippage.styled";
import { TripDay } from "./tripday";
import { useParams } from "react-router-dom";
import { db } from "../firebase-config";
import { doc } from "firebase/firestore";
import { TripContext } from "../Provider/TripProvider";
import { getDoc } from "firebase/firestore";

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
const email = localStorage.getItem("info");
const docRef = doc(db, "Users", email);
const ary = await getDoc(docRef);

export function Mytrippage({ currentTrip }: IMytrippage) {
  // const docRef = doc(db, 'Users')
  const [dayNumber, setDayNumber] = useState(1);
  const { user } = useContext(TripContext);
  const [selectedDay, setSelectedDay] = useState("");
  const [daysListNumber, setDaysListNumber] = useState([]);
  let [daysCount, setDaysCount] = useState(1);
  const navigate = useNavigate();
  
  const { tripId } = useParams();
  const id = tripId;

  const dayNumberList = () => {
    const list = [];
    for (let i = 1; i <= daysCount; i++) {
      list.push(i);
    }
    return [...list];
  };

  console.log(ary);
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

  return (
    <TripContainer>
      <Global />
      <Title>Plan my trip</Title>
      <BoxList>
        {daysListNumber.map(({ attractions, day }) => {
          return (
            <TripDay
              key={day}
              dayNo={day}
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
              items={[]}
            ></TripDay>
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
