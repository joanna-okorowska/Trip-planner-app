import {
  Container,
  Global,
  Icons,
  LinksSection,
  Copyright,
  Link,
} from "../Styles/footer.styled";
// import "./Footer.css";
import { useLocation } from "react-router-dom";

export const Footer = () => {
  const { pathname } = useLocation();
  if (pathname === "/" || pathname === "/signUp" || pathname === "/signIn") {
    return null;
  } else {
    return (
      <>
        <Container id="footfoot">
          <div>
            <Icons>
              <img src=".\src\assets\logo-fb.png" />
              <img src=".\src\assets\logo-instagram.png" />
              <img src=".\src\assets\logo-twitter.png" />
            </Icons>
            <LinksSection>
              <Link>Info</Link>
              <Link>Contact us</Link>
              <Link>Blog</Link>
            </LinksSection>
            <LinksSection>
              <Link>Terms of use</Link>
              <Link>Privacy policy</Link>
            </LinksSection>
            <Copyright>
              <p>Copyright @2023 The Codefathers</p>
            </Copyright>
          </div>
        </Container>
      </>
    );
  }
};
