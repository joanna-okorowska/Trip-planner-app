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
import { CityPage } from "./components/funchal";
import { Mytrippage } from "./components/Mytrippage";
import { useTrip } from "./components/hooks/useTrip";
import { MyTrips } from "./components/myTrips";
import { AddTrips } from "./components/Mytrippage";

function App() {
  const { currentTrip, setCurrentTrip } = useTrip();
  const fakeItems = [
    {id: '1', name: 'Trip example'},
    {id: '2', name: 'Trip example'},
  ]
  return (
    <HashRouter>
      <Wrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signUp" element={<Register />} />
          <Route path="/signIn" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/funchal" element={<CityPage/>}/>
          <Route
            path="/creator"
            element={<Mytrippage currentTrip={currentTrip} setCurrentTrip={setCurrentTrip}/>}
            >
                <Route path=":day/add-trips" element={<AddTrips items={fakeItems} currentTrip={currentTrip} setCurrentTrip={setCurrentTrip}/>} />
            </Route>
          <Route path="/nav" element={<Navbar />} />
          <Route path="/explore" element={<Explore />} />
          {/* <Route path="/video" element={<VideoBackground />} /> */}
          {/* <Route path="/nav" element={<Navbar />} /> */}
          <Route path="/myTrips" element={<MyTrips />} />
          <Route path="/veneus" element={<Venues />} />

        </Routes>
        <Footer />
      </Wrapper>
    </HashRouter>
  );
}

export default App;
