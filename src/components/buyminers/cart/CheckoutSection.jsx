import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../UserContext";
import { useTour } from "@reactour/tour";
import usePurchase from "../../../hooks/cart/usePurchase";
import useGetUserInfo from "../../../hooks/auth/useGetUserInfo";

export default function CheckoutSection() {
  const [pay, setPay] = useState("fiat");
  const { user, refetchTrigger, setRefetchTrigger } = useContext(UserContext);
  const { refetch } = useGetUserInfo();
  const { loading, purchase } = usePurchase();
  const { setIsOpen, setCurrentStep } = useTour();

  return (
    <div className="flex lg:flex-row flex-col lg:justify-between my-10 items-center duration-300 ease-in-out">
      <div className="my-10 w-full">
        <div className="flex gap-3 items-center">
          <p>Pay With</p>
          <div
            className={`bg-[#011532]  p-1 border border-[#76C6E04D] rounded-s-full rounded-e-full flex items-center gap-5`}
          >
            <motion.button
              className={`text-white p-1 px-2 `}
              animate={{
                backgroundColor: pay === "fiat" ? "#0194FE" : "#011532",
                borderRadius: pay === "fiat" ? "999px" : "0px",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setPay("fiat")}
            >
              Fiat
            </motion.button>
            <motion.button
              className={`text-white p-1 px-2`}
              animate={{
                backgroundColor: pay === "crypto" ? "#0194FE" : "",
                borderRadius: pay === "crypto" ? "999px" : "0px",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setPay("crypto")}
            >
              Crypto
            </motion.button>
          </div>
        </div>
      </div>
      <div className="p-10 bg-[#011532] rounded-md lg:w-1/2 flex flex-col gap-5 w-full">
        <p className="text-[#76C6E0] text-xl">Grand Total</p>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <p>Quantity</p>
            <p>
              {user?.cartItems.reduce((sum, item) => sum + item.qty, 0)} items
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p>Total Price</p>
            <p className="text-[#07EAD3]">
              AED{" "}
              {user?.cartItems?.reduce(
                (sum, item) => sum + item.qty * parseInt(item?.itemId?.price),
                0
              )}
            </p>
          </div>
        </div>
        <button
          onClick={async () => {
            await purchase();
            await refetch();
            setCurrentStep(0);
            setIsOpen(true);
          }}
          className="w-full py-2 rounded-lg bg-[#07EAD3] text-black cursor-pointer"
        >
          CONFIRM PURCHASE
        </button>
      </div>
    </div>
  );
}
