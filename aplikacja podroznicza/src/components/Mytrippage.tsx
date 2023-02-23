
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useEffect, useState } from "react";
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
    Buttonedit
    
    
  } from "../Styles/Mytrippage.styled";
  import { TripDay } from "./tripday";

  interface IMytrippage {
    currentTrip: {day_1: [], day_2: [], day_3: [], day_4: [], day_5: [], day_6: []}
  }
  
  
  export function Mytrippage({currentTrip} : IMytrippage) {
    const [selectedDay, setSelectedDay] = useState("");
    const [daysListNumber, setDaysListNumber] = useState<number[]>([1]);
    let [daysCount, setDaysCount] = useState(1);
    const navigate = useNavigate();
  const navigatetologin= () => {
    navigate("/signIn");
  };
  const navigateToCreate = () => {
    navigate("/create-new-trip");
  };

  const dayNumberList = () => {
    const list =[];
    for(let i = 1; i <= daysCount; i++){
      list.push(i);
    }
    return [...list];
  }

  const handleIncreaseDays = () => {
    daysListNumber.push(daysListNumber.length + 1);
    setDaysListNumber([...daysListNumber]);
  }

  const handleDecreaseDays = () => {
    daysListNumber.pop();
    setDaysListNumber([...daysListNumber]);
  }

    return (
      <TripContainer>
        
        <Global />
          <Title>Plan my trip</Title>
        <BoxList>
          {daysListNumber.map(number => {
              return (
                <TripDay key={number} dayNo={number.toString()} selectedDay={selectedDay} setSelectedDay={setSelectedDay} items={[]}>
                    
                </TripDay>
              )
          })}
            <div>
              <button onClick={handleIncreaseDays}>+</button>
              {daysListNumber.length > 1 && <button onClick={handleDecreaseDays}>-</button>}
            </div>
        </BoxList>
      </TripContainer>
    );
  }