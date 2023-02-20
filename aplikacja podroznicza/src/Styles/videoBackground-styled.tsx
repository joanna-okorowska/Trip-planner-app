import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-scroll";

export const VideoContainer = styled.div`
  overflow: hidden;
  width: 100vw;
  height: calc(100vh - 100px);
  pointer-events: none;
  position: relative;
  margin: 0;
`;

export const FirstParagraphOnVideo = styled.p`
  text-align: left;
  font-family: "Domine", serif;
  color: black;
  font-size: 30px;
  font-weight: 700;
`;

export const TextAndButtomOnVideo = styled.div`
  width: 18vw;
  height: 12vh;
  position: absolute;
  top: 65%;
  left: 5%;
  background-color: transparent;
  backdrop-filter: blur(20px);
  border-radius: 10%;
  z-index: 10;
`;

// (Link w () bo zaciągamy elementu z HTML tylko z reacta)
export const ButtonExplore = styled.button`
  pointer-events: auto;
  display: flex;
  border-radius: 12px;
  border: none;
  width: 200px;
  height: 100px;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  background-color: #618358;
  box-shadow: 0px 8px 28px 3px rgba(66, 90, 67, 1);
  &:hover,
  &:focus {
    color: palevioletred;
    text-decoration: underline;
  }
  &:active {
    color: red;
  }
`;

export const VideoYouTubeBackground = styled.iframe`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100vw;
  min-height: 100vh;
  transform: translate(-50%, -50%);
`;

/* 
@media (min-aspect-ratio: 16/9) {
    :root {
        --video-height: 56.25vw;
    }
}

@media (max-aspect-ratio: 16/9) {
    :root {
        --video-width: 177.78vh;
    }
} */

// .youtube-container {
// 	overflow: hidden;
// 	width: 100%;
// 	/* Keep it the right aspect-ratio */
// 	aspect-ratio: 16/9;
// 	/* No clicking/hover effects */
// 	pointer-events: none;

// 	iframe {
// 		/* Extend it beyond the viewport... */
// 		width: 300%;
// 		height: 100%;
// 		/* ...and bring it back again */
// 		margin-left: -100%;
// 	}
// }
