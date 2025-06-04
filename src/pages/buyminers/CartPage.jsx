import React, { useEffect, useState } from "react";
import CartTable from "../../components/buyminers/cart/CartTable";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import CheckoutSection from "../../components/buyminers/cart/CheckoutSection";
import { AnimatePresence, motion } from "framer-motion";

export default function CartPage() {
  const [showCheckout, setShowCheckout] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 flex flex-col">
      <Link to={"/buy"} className="flex gap-3 items-center ms-auto">
        <IoIosArrowRoundBack /> Go Back
      </Link>
      <p className="text-xl">Cart Items</p>
      <CartTable />
      <button
        onClick={() => setShowCheckout(true)}
        className="px-10 py-2 rounded-full bg-[#07EAD3] text-black w-fit mx-auto cursor-pointer"
      >
        Proceed to Checkout
      </button>
      <AnimatePresence>
        {showCheckout && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CheckoutSection />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
