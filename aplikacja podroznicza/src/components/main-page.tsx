import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import React, { VFC } from "react";
import {} from "../Styles/videoBackground-styled";
import { VideoBackground } from "./VideoBackGround";
import { Explore } from "./Explore";
import { Navbar } from "./navbar";
import { Footer } from "./Footer";

export function Main() {
  return (
    <div>
      <Navbar />
      <VideoBackground />
      <Explore />
      <Footer />
    </div>
  );
}
