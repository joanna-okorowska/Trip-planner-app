import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

export function LandingPage() {
  const navigate = useNavigate();
  const navigateToSignIn = () => {
    navigate("/signIn");
  };
  const navigateToSignUp = () => {
    navigate("/signUp");
  };
  return (
    <div className="flex">
      <div className="container">
        <h1 className="introduction">Plan your trip with TripTastic</h1>
        <div className="centered">
          <button className="btn upperBtn" onClick={() => navigateToSignIn()}>
            Sign In
          </button>
          <div>
            <div className="lines-container">
              <div className="line" />
              <h3 className="accountQuestion">Don't have an account yet?</h3>
              <div className="line" />
            </div>
          </div>
          <button className="btn lowerBtn" onClick={() => navigateToSignUp()}>Sign Up</button>
          <h3>or</h3>
          <h3 className="underlined">Explore as a guest</h3>
        </div>
      </div>
    </div>
  );
}
