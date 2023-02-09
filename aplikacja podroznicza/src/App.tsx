import "./App.css";
import { Login } from "./components/login-page";
import { LandingPage } from "./components/LandingPage";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/navbar";
import { Register } from "./components/register-page";
import { Venues } from "./components/Venues";

function App() {
  return (
    // <HashRouter>
    //   <div className="app">
    //     <Routes>
    //       <Route path="/" element={<LandingPage />} />
    //       <Route path="/signIn" element={<Login />} />
    //       <Route path="/signUp" element={<Register />} />
    //     </Routes>
    //   </div>
    // </HashRouter>
    // <Navbar/>
    <Venues/>
  );
}

export default App;
