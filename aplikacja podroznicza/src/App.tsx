import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Login } from "./components/login-page";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
