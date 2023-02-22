import styled from "styled-components";
import useCollapse from "react-collapsed";

const Background = styled.div`
  height: auto;
  width: 100vw;
  margin: 0;
  padding: 0;
  background-image: url("src/assets/VenuesBG.jpg");
  background-repeat: no-repeat;
  backdrop-filter: blur(5px);
  background-size: cover;
  background-attachment: fixed;
`;

const Trip = styled.div`
  height: 100px;
  width: 85vw;
  background-color: white;
  margin-top: 50px;
  box-shadow: 0px 0px 14px 14px rgba(0, 0, 0, 0.36);
  border-radius: 20px;
`;

const Container = styled.div`
  padding-top: 150px;
  padding-bottom: 100px;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Tripcollapse = styled.div`
  height: auto;
  width: 85vw;
  background-color: white;
  margin-top: -20px;
  box-shadow: 0px 14px 14px 0px rgba(0, 0, 0, 0.36);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const Tripname = styled.span``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
`;

const Line = styled.div`
  width: 1px;
  height: auto;
  background-color: black;
  margin-left: 150px;
  margin-top: 30px;
  margin-bottom: 30px;
  min-height: 300px;
`;

const Day = styled.div`
  display: flex;
  overflow: auto;
  margin-bottom: 10px;
  margin-right: 15px;
  margin-left: 15px;

  &::-webkit-scrollbar {
    background-color: transparent;
    height: 10px;
    border-radius: 30px;
    margin-bottom: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #5e5d5d;
    border-radius: 5px;
  }
`;

const Title = styled.h1`
  margin-left: 150px;
  display: inline;
  margin-bottom: 50px;
`;

const Key = styled.div`
  display: flex;
`;

const Inside = styled.div`
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
`;
const Venue = styled.span``;
const Attraction = styled.div`
  margin-left: 20px;
  margin-top: 20px;
`;
const Duration = styled.span`
  margin-left: 50px;
`;

var tst = [
  {
    info: "My new trip",
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

    return (
      <Wrapper key={info}>
        <Trip {...getToggleProps()}>
          <Tripname>Name: {info}</Tripname>
        </Trip>
        <Tripcollapse {...getCollapseProps()}>
          <Day>
            {days.map(({ day, attractions }) => {
              return (
                <Key key={day}>
                  <Inside>
                    <Title>Day{day}</Title>
                    <Content>
                      {attractions.map(({ title, duration }) => {
                        return (
                          <Attraction key={title}>
                            <Venue>{title}</Venue>
                            <Duration>{duration}h</Duration>
                          </Attraction>
                        );
                      })}
                    </Content>
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
