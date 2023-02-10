import "./App.css";
import { Login } from "./components/login-page";
import { LandingPage } from "./components/LandingPage";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { CreateTrip } from "./components/create-trip";
import { Explore } from "./components/Explore";

function App() {
  return (
    // <HashRouter>
    //   <div className="app">
    //     <Routes>
    //       <Route path="/" element={<LandingPage />} />
    //       <Route path="/signIn" element={<Login />} />
    //       <Route path="/create-new-trip" element={<CreateTrip />}/>
    //     </Routes>
    //   </div>
    // </HashRouter>
    <Explore/>
  );
}

export default App;
