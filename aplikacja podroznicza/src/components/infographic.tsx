import {
  InfographicContainer,
  InfographicImage,
} from "../Styles/infographic-styled";
import React from "react";
import InfographicIMG from "../assets/INFO.jpeg";

export const Infographic = () => {
  return (
    <div>
      <InfographicContainer>
        <InfographicImage src={InfographicIMG} alt="Infographic" />
      </InfographicContainer>
    </div>
  );
};
