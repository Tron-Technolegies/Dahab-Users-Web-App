import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "shafi" });
  const [ownedMiners, setOwnedMiners] = useState([]);

  return (
    <UserContext.Provider
      value={{ user, setUser, ownedMiners, setOwnedMiners }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
