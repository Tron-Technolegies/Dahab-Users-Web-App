import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../UserContext";

export default function CheckoutSection() {
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);
  const [pay, setPay] = useState("fiat");
  const { cartItems } = useContext(UserContext);

  useEffect(() => {
    if (cartItems.length > 0) {
      const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);
      const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.quantity * parseInt(item.price),
        0
      );
      setQty(totalQty);
      setPrice(totalPrice);
    }
  }, [cartItems]);
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
            <p>{qty} items</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Total Price</p>
            <p className="text-[#07EAD3]">AED {price}</p>
          </div>
        </div>
        <button className="w-full py-2 rounded-lg bg-[#07EAD3] text-black cursor-pointer">
          CONFIRM PURCHASE
        </button>
      </div>
    </div>
  );
}
