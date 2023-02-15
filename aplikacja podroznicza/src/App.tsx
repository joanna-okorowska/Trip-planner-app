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
import { Mytrippage } from "./components/Mytrippage";

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signIn" element={<Login />} />
          <Route path="/create-new-trip" element={<CreateTrip />} />
          <Route path="/signUp" element={<Register />} />
          <Route path="/nav" element={<Navbar />} />
          <Route path="/veneus" element={<Venues/>}/>
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/mytrippage" element={<Mytrippage/>}/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
