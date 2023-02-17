import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-scroll";

export const VideoContainer = styled.div`
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  position: relative;
`;

export const FirstParagraphOnVideo = styled.p``;

export const TextAndButtomOnVideo = styled.div`
  width: 20vw;
  height: 20vh;
  position: absolute;
  top: 50%;
  left: 30%;
  background-color: transparent;
  backdrop-filter: blur(20px);
  border-radius: 10%;
  z-index: 10;
`;

// (Link w () bo zaciągamy elementu z HTML tylko z reacta)
export const ButtonExplore = styled(Link)`
  border-radius: 10%;
  border: none;
  background-color: hotpink;
`;

export const VideoYouTubeBackground = styled.iframe`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
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
