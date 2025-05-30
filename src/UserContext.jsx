import { createContext, useState } from "react";
import { minersMock } from "./utils/miners";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [ownedMiners, setOwnedMiners] = useState(["1"]);
  const [selectedMiner, setSelectedMiner] = useState(minersMock[0]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        ownedMiners,
        setOwnedMiners,
        selectedMiner,
        setSelectedMiner,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
