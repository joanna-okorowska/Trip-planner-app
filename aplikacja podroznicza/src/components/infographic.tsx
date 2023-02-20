import React from "react";
import {
  InfographicContainer,
  InfographicImage,
} from "../Styles/infographic.styled";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import infographica from "../assets/infographica.png";

export const Infographic = () => {
  return (
    <div>
      <InfographicContainer>
        <InfographicImage src={infographica} alt="infographic" />
      </InfographicContainer>
    </div>
  );
};
