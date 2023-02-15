import {} from "../Styles/videoBackground-styled";
import React from "react";
import {
  FullGlobal,
  VideoContainer,
  VideoYouTubeBackground,
  TextAndButtomOnVideo,
  ButtonExplore,
} from "../Styles/videoBackground-styled";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

export const VideoBackground = () => {
  return (
    <div>
      <FullGlobal />
      <VideoContainer>
        <TextAndButtomOnVideo>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, alias
            totam ipsam architecto ducimus error odit blanditiis repellendus
            odio officiis, eum voluptas! Obcaecati eius sequi facere quo maxime
            itaque corrupti.
          </p>
          <Link
            to="exploreScroll"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}>
            Explore
          </Link>
        </TextAndButtomOnVideo>
        <VideoYouTubeBackground
          src="https://www.youtube.com/embed/SoKj79NFvks?controls=0&amp;showinfo=1&amp;autoplay=1&amp;loop=1&amp;enablejsapi=1&amp;mute=1&amp;clip=UgkxkflDYMqgKcPVFxDIeKQgRyT0j3ABNYAA&amp;clipt=EJX4Axij4gU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </VideoContainer>
    </div>
  );
};
