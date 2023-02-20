import "../src/Styles/App-styled";
import { Login } from "./components/login-page";
import { LandingPage } from "./components/LandingPage";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { CreateTrip } from "./components/create-trip";
import { Navbar } from "./components/navbar";
import { Venues } from "./components/Venues";
import { Main } from "./components/main-page";

import { VideoBackground } from "./components/VideoBackGround";
import { Explore } from "./components/Explore";
import { Register } from "./components/register-page";
import { useEffect, useState } from "react";
import { Wrapper } from "./Styles/App-styled";
import { CityPage } from "./components/city-page";
import { Mytrippage } from "./components/Mytrippage";
import { useTrip } from "./components/hooks/useTrip";

function App() {
  const { currentTrip, addToTrip } = useTrip();
  return (
    <HashRouter>
      <Wrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signUp" element={<Register />} />
          <Route path="/signIn" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route
            path="/create-new-trip"
            element={
              <CreateTrip currentTrip={currentTrip} addToTrip={addToTrip} />
            }
          />
          <Route path="/city-page" element={<CityPage />} />
          <Route
            path="/mytrippage"
            element={<Mytrippage currentTrip={currentTrip} />}
          />

          <Route path="/veneus" element={<Venues />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
        <Footer />
      </Wrapper>
    </HashRouter>
  );
}

export default App;
