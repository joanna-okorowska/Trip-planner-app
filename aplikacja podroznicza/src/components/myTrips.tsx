import styled from "styled-components";
import useCollapse from "@gaearon/react-collapsed";
import { useState } from "react";
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

var tst = [
  {
    info: "My new trip",
    days: [
      {
        day: "1",
        attractions: [
          { title: "attraction1", duration: 3 },
          { title: "attraction2", duration: 2 },
        ],
      },
      {
        day: "2",
        attractions: [
          { title: "attraction3", duration: 2 },
          { title: "attraction4", duration: 2 },
        ],
      },
      {
        day: "3",
        attractions: [
          { title: "attraction5", duration: 2 },
          { title: "attraction6", duration: 2 },
        ],
      },
      {
        day: "4",
        attractions: [
          { title: "attraction7", duration: 2 },
          { title: "attraction8", duration: 2 },
        ],
      },
      {
        day: "5",
        attractions: [
          { title: "attraction9", duration: 2 },
          { title: "attraction10", duration: 2 },
        ],
      },
      {
        day: "6",
        attractions: [
          { title: "attraction11", duration: 2 },
          { title: "attraction12", duration: 2 },
        ],
      },
      {
        day: "7",
        attractions: [
          { title: "attraction13", duration: 2 },
          { title: "attraction14", duration: 2 },
        ],
      },
      {
        day: "8",
        attractions: [
          { title: "attraction15", duration: 2 },
          { title: "attraction16", duration: 2 },
        ],
      },
    ],
  },
  {
    info: "My new trip2",
    days: [
      {
        day: "1",
        attractions: [
          { title: "attraction1", duration: 2 },
          { title: "attraction2", duration: 2 },
        ],
      },
      {
        day: "2",
        attractions: [
          { title: "attraction3", duration: 2 },
          { title: "attraction4", duration: 2 },
        ],
      },
      {
        day: "3",
        attractions: [
          { title: "attraction5", duration: 2 },
          { title: "attraction6", duration: 2 },
        ],
      },
      {
        day: "4",
        attractions: [
          { title: "attraction7", duration: 2 },
          { title: "attraction8", duration: 2 },
        ],
      },
      {
        day: "5",
        attractions: [
          { title: "attraction9", duration: 2 },
          { title: "attraction10", duration: 2 },
        ],
      },
      {
        day: "6",
        attractions: [
          { title: "attraction11", duration: 2 },
          { title: "attraction12", duration: 2 },
        ],
      },
      {
        day: "7",
        attractions: [
          { title: "attraction13", duration: 2 },
          { title: "attraction14", duration: 2 },
        ],
      },
      {
        day: "8",
        attractions: [
          { title: "attraction15", duration: 2 },
          { title: "attraction16", duration: 2 },
        ],
      },
    ],
  },
];

export function MyTrips() {
  const Collapse = tst.map(({ info, days }) => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    let direction = "src/assets/arrow-down-sign-to-navigate.png";
    if (isExpanded === true) {
      direction = "src/assets/up.png";
    } else {
      direction = "src/assets/arrow-down-sign-to-navigate.png";
    }
    return (
      <Wrapper key={info}>
        <Trip {...getToggleProps()}>
          <Tripname>Name: {info}</Tripname>
          <Arrow src={direction}></Arrow>
        </Trip>
        <Tripcollapse {...getCollapseProps()}>
          <Day>
            {days.map(({ day, attractions }) => {
              let time = 0;
              return (
                <Key key={day}>
                  <Inside>
                    <Title>Day{day}</Title>
                    <Content>
                      {attractions.map(({ title, duration }) => {
                        time = time + duration;
                        return (
                          <Attraction key={title}>
                            <Venue>{title}</Venue>
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
        </Tripcollapse>
      </Wrapper>
    );
  });

  return (
    <>
      <Background>
        <Container>{Collapse}</Container>
      </Background>
    </>
  );
}
