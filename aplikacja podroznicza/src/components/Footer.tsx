import {
  Container,
  Global,
  Icons,
  LinksSection,
  Copyright,
  Link,
  Flex
} from "../Styles/footer.styled";

export const Footer = () => (
  <>
    <Global />
    <Container>
      <Flex>
        <Icons>
          <img className="social-media-logo" src=".\src\assets\logo-fb.png" />
          <img className="social-media-logo" src=".\src\assets\logo-instagram.png" />
          <img className="social-media-logo" src=".\src\assets\logo-twitter.png" />
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
        </Flex>
        <Copyright>
          <p className="copyright">Copyright @2023 The Codefathers</p>
          <div>
            <a className="github-link" href="https://github.com/Marty3a">Martyna Abramczyk</a>
            <a className="github-link" href="https://github.com/JakubDolecki">Jakub Dolecki</a>
            <a className="github-link" href="https://github.com/sebastian-majda">Sebastian Majda</a>
            <a className="github-link" href="https://github.com/joanna-okorowska">Joanna Okorowska</a>
            <a className="github-link" href="https://github.com/Maroe1994">Marek Rogiński</a>
          </div>
        </Copyright>
      
    </Container>
  </>
);
