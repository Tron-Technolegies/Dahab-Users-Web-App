import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [ownedMiners, setOwnedMiners] = useState(["1"]);

  return (
    <UserContext.Provider
      value={{ user, setUser, ownedMiners, setOwnedMiners }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
