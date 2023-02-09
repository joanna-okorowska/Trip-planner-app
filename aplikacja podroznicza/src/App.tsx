import "./App.css";
import { Login } from "./components/login-page";
import { Register } from "./components/register-page";
import { LandingPage } from "./components/LandingPage";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";

function App() {
  return (
    // <HashRouter>
    //   <div className="app">
    //     <Routes>
    //       <Route path="/" element={<LandingPage />} />
    //       <Route path="/signIn" element={<Login />} />
    //
    //     </Routes>
    //   </div>
    // </HashRouter>
    <Login />
  );
}

export default App;
