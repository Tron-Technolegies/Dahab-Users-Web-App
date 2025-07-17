import { createContext } from "react";

export const DashboardContext = createContext();

import React from "react";

export default function DashBoardContextProvider({ children }) {
  return <DashboardContext.Provider>{children}</DashboardContext.Provider>;
}
