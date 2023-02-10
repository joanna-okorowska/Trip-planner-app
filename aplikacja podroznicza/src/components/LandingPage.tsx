import { useNavigate } from "react-router-dom";
import {
  Flex,
  Global,
  Container,
  Introduction,
  Centered,
  UpperBtn,
  LinesContainer,
  AccountQuestion,
  LowerBtn,
  Underlined,
  Line,
} from "../Styles/landing-page-styled";

export function LandingPage() {
  const navigate = useNavigate();
  const navigateToSignIn = () => {
    navigate("/signIn");
  };
  const navigateToSignUp = () => {
    navigate("/signUp");
  };
  return (
    <>
      <Global />
      <Flex>
        <Container>
          <Introduction>Plan your trip with TripTastic</Introduction>
          <Centered>
            <UpperBtn onClick={() => navigateToSignIn()}>Sign In</UpperBtn>
            <div>
              <LinesContainer>
                <Line />
                <AccountQuestion>Don't have an account yet?</AccountQuestion>
                <Line />
              </LinesContainer>
            </div>
            <LowerBtn>Sign Up</LowerBtn>
            <h3>or</h3>
            <Underlined>Explore as a guest</Underlined>
          </Centered>
        </Container>
      </Flex>
    </>
  );
}
