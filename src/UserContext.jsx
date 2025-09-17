import { createContext, useEffect, useState } from "react";
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
  const [refetchTrigger, setRefetchTrigger] = useState(false);
  const [estHostingFee, setEstHostingFee] = useState(0);
  const [estDaysRemaining, setEstDaysRemaining] = useState(0);
  const [termsOpen, setTermsOpen] = useState(false);

  useEffect(() => {
    const estTotalFee = user?.ownedMiners.reduce((acc, item) => {
      return (
        acc +
        item?.qty *
          item?.itemId?.power *
          24 *
          item?.itemId?.hostingFeePerKw *
          3.67
      );
    }, 0);
    setEstHostingFee(estTotalFee);
    if (user?.walletBalance > 0) {
      const days = user?.walletBalance / estTotalFee;
      setEstDaysRemaining(days);
    }
  }, [user]);

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
        refetchTrigger,
        setRefetchTrigger,
        estHostingFee,
        estDaysRemaining,
        termsOpen,
        setTermsOpen,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
