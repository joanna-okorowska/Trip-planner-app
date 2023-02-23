import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000000b1;
  position: relative;
`;

export const Container = styled.div`
  width: 800px;
  height: 400px;
  background-color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 25px;
  display: flex;
  box-shadow: -1px 4px 62px -7px rgba(0, 0, 0, 1);
`;

export const Photo = styled.div`
  background-color: #115445;
  height: 100%;
  width: 513px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
`;

export const Title = styled.div`
  font-family: "Domine", serif;
  font-size: 20px;
`;

export const Description = styled.div`
  font-family: "Krub", sans-serif;
  margin-top: 20px;
  font-size: 13px;
`;

export const TextArea = styled.div`
  padding: 30px;
  width: 280px;
  position: relative;
`;

export const Duration = styled.div`
  position: absolute;
  bottom: 30px;
  font-size: 13px;
`;
