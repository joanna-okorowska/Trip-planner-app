import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Login } from "./components/login-page";
import './App.css';
import { LandingPage } from  "./components/LandingPage";

function App() {

  return (
    <div>
      <Login />
      <LandingPage/>
    </div>
  );
  
  
}

export default App;
