import styled from "styled-components";
import useCollapse from "@gaearon/react-collapsed";
import { useState, useEffect, useContext } from "react";
import { TripContext } from "../Provider/TripProvider";
import {
  Wrapper,
  Trip,
  Tripname,
  Arrow,
  Tripcollapse,
  Day,
  Key,
  Inside,
  Title,
  Content,
  Attraction,
  Venue,
  Duration,
  How,
  Dur,
  Line,
  Background,
  Container,
} from "../Styles/myTrips-styled";
import {
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
  DocumentData,
} from "firebase/firestore";
import { db } from "../firebase-config";

export function MyTrips() {
  const { user, tripsName } = useContext(TripContext);
  const [ready, setReady] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [myStyle, setMyStyle] = useState({});

  const fetchdata = async () => {
    const docRef = doc(db, "Users", user || "");
    const ary = await getDoc(docRef);
    if (ary.exists()) {
      const dane = ary.data();
      console.log("halo");
      setReady(dane.Trips);
      setLoading(false);
    }
  };
  fetchdata();

  const handleClick = (name) => {
    setMyStyle((prevState) => ({
      ...myStyle,
      [name]: !prevState[name],
    }));
  };

  const Collapse = ready.map(({ info, days }) => {
    let direction = "src/assets/arrow-down-sign-to-navigate.png";

    if (isLoading) {
      return <span>Loading...</span>;
    } else {
      return (
        <Wrapper key={info}>
          <div
            onClick={() => {
              handleClick(info);
            }}
            style={{
              height: "100px",
              width: "85vw",
              backgroundColor: "white",
              marginTop: "50px",
              boxShadow: "0px 0px 14px 14px rgba(0, 0, 0, 0.36)",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Tripname>Name: {info}</Tripname>
            <Arrow src={myStyle[`${info}`] ? "src/assets/up.png" : "src/assets/arrow-down-sign-to-navigate.png"}></Arrow>
          </div>
          <div style={{
            height: "auto",
            width: "85vw",
            backgroundColor: "white",
            marginTop: "-20px",
            boxShadow: "0px 14px 14px 0px rgba(0, 0, 0, 0.36)",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            display: myStyle[`${info}`] ? "block" : "none",
          }}>
            <Day>
              {days.map(({ day, attractions }) => {
                let time = 0;
                return (
                  <Key key={day}>
                    <Inside>
                      <Title>Day{day}</Title>
                      <Content>
                        {attractions.map(({ name, duration }) => {
                          time = time + duration;
                          return (
                            <Attraction key={name}>
                              <Venue>{name}</Venue>
                              <Duration>
                                <How>How long:</How>&nbsp;&nbsp;{duration}h
                              </Duration>
                            </Attraction>
                          );
                        })}
                      </Content>
                      <span>
                        <Dur>Duration:</Dur>&nbsp;&nbsp;{time}h
                      </span>
                    </Inside>
                    <Line></Line>
                  </Key>
                );
              })}
            </Day>
          </div>
        </Wrapper>
      );
    }
  });

  return (
    <>
      <Background>
        <Container>{Collapse}</Container>
      </Background>
    </>
  );
}
