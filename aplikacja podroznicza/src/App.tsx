import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Login } from "./components/login-page";
import { Register } from "./components/register-page";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Register />
    </div>
  );
}

export default App;
