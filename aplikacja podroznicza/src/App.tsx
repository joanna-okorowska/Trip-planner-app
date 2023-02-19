import "./App.css";
import { Login } from "./components/login-page";
import { Register } from "./components/register-page";
import { LandingPage } from "./components/LandingPage";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { CreateTrip } from "./components/create-trip";
import { Navbar } from "./components/navbar";
import { Venues } from "./components/Venues";
import { Explore } from "./components/Explore";
import { CityPage } from "./components/city-page";
import { Mytrippage } from "./components/Mytrippage";
import { useTrip } from "./components/hooks/useTrip";

function App() {
  const { currentTrip, addToTrip } = useTrip();
  return (
      <HashRouter>
      <div className="app">
        <Routes>
         
          <Route path="/signIn" element={<Login />} />
          <Route path="/create-new-trip" element={<CreateTrip currentTrip={currentTrip} addToTrip={addToTrip} />} />
          <Route path="/city-page" element={<CityPage/>}/>
          <Route path="/signUp" element={<Register />} />
          <Route path="/nav" element={<Navbar />} />
          <Route path="/veneus" element={<Venues/>}/>
          <Route path="/explore" element={<Explore />}/>
          <Route path="/mytrippage"  element={<Mytrippage currentTrip={currentTrip}/>}/>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
      </HashRouter>
    // <Venues></Venues>
  );
}

export default App;
