import {
  InfographicContainer,
  InfographicImage,
} from "../Styles/infographic-styled";
import React from "react";
import Imginfographic from "../assets/infographicaNormalSIZE1.png";

export const Infographic = () => {
  return (
    <div>
      <InfographicContainer>
        <InfographicImage src={Imginfographic} alt="Infographic" />
      </InfographicContainer>
    </div>
  );
};
