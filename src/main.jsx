import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserContextProvider from "./UserContext.jsx";
import CalculatorContextProvider from "./CalculatorContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <CalculatorContextProvider>
        <App />
      </CalculatorContextProvider>
    </UserContextProvider>
  </StrictMode>
);
