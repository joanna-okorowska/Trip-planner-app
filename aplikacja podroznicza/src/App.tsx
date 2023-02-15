import "./App.css";
import { Login } from "./components/login-page";
import { LandingPage } from "./components/LandingPage";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { CreateTrip } from "./components/create-trip";
import { Navbar } from "./components/navbar";
import { Venues } from "./components/Venues";
import { Main } from "./components/Main-page";
import { VideoBackground } from "./components/VideoBackGround";
import { Explore } from "./components/Explore";
import { Register } from "./components/register-page";
import { useEffect, useState } from "react";

function App() {
  const [badUrl, setbadURL] = useState(false);
  const [goodUrl, setgoodURL] = useState(true);
  return (
    <HashRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signUp" element={<Register />} />
          <Route path="/signIn" element={<Login />} />
          <Route path="/create-new-trip" element={<CreateTrip />} />
          <Route path="/main" element={<Main />} />
          <Route path="/video" element={<VideoBackground />} />
          <Route path="/nav" element={<Navbar />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
