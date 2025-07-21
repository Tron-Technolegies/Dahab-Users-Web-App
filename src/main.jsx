import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserContextProvider from "./UserContext.jsx";
import CalculatorContextProvider from "./CalculatorContext.jsx";
import DashBoardContextProvider from "./DashBoardContext.jsx";
import ProjectionContextProvider from "./ProjectionContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <CalculatorContextProvider>
        <DashBoardContextProvider>
          <ProjectionContextProvider>
            <App />
          </ProjectionContextProvider>
        </DashBoardContextProvider>
      </CalculatorContextProvider>
    </UserContextProvider>
  </StrictMode>
);
