import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { TripProvider } from "./Provider/TripProvider";
import { EmailProvider } from "./Provider/EmailProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <EmailProvider>
    <TripProvider>
      <App />
    </TripProvider>
  </EmailProvider>
  // </React.StrictMode>,
);
