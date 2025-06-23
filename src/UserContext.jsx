import { createContext, useState } from "react";
import { cartItems as items, minersMock } from "./utils/miners";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Shafi" });
  const [ownedMiners, setOwnedMiners] = useState(["1"]);
  const [selectedMiner, setSelectedMiner] = useState(minersMock[0]);
  const [cartItems, setCartItems] = useState(items);
  const [run, setRun] = useState(true);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        ownedMiners,
        setOwnedMiners,
        selectedMiner,
        setSelectedMiner,
        cartItems,
        setCartItems,
        run,
        setRun,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
