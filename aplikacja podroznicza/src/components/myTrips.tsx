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
const Test = styled.div`
  margin-top: 100px;
`;
const Tripname = styled.span``;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
`
var tst = [
  {
    info: "hej",
    days: [{ day: 1, attractions: ["attraction1", "attraction2"] }],
  },
  
];



export function MyTrips() {
    console.log(tst[0].days[0].attractions)
  const Collapse = tst.map(({ info }) => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return (
      <Wrapper key={info}>
        <Trip {...getToggleProps()}>
          <Tripname>Name: My new trip 1</Tripname>
        </Trip>
        <Tripcollapse {...getCollapseProps()}>
          <Test>{info}</Test>
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
