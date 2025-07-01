import { createContext, useState } from "react";
import { cartItems as items, minersMock } from "./utils/miners";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [ownedMiners, setOwnedMiners] = useState([]);
  const [selectedMiner, setSelectedMiner] = useState(minersMock[0]);
  const [cartItems, setCartItems] = useState(items);
  const [run, setRun] = useState(true);
  const [alertError, setAlertError] = useState("");
  const [alertSuccess, setAlertSuccess] = useState("");

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
        alertError,
        setAlertError,
        alertSuccess,
        setAlertSuccess,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
