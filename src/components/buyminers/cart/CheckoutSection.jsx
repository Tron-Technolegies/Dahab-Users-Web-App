import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../UserContext";
// import { useTour } from "@reactour/tour";
import useGetUserInfo from "../../../hooks/auth/useGetUserInfo";
import Loading from "../../Loading";
import useCreatePaymentIntent from "../../../hooks/payment/useCreatePaymentIntent";
import { motion } from "framer-motion";
import useCreateCryptoPaymentIntent from "../../../hooks/payment/useCreateCryptoPaymentIntent";
import { QRCodeSVG } from "qrcode.react";
import useEmptyCart from "../../../hooks/cart/useEmptyCart";
import { useNavigate } from "react-router-dom";

export default function CheckoutSection() {
  const { user, setAlertError } = useContext(UserContext);
  const { refetch } = useGetUserInfo();
  const [price, setPrice] = useState(0);
  const [fee, setFee] = useState(0);
  const [total, setTotal] = useState(0);
  const [pay, setPay] = useState("fiat");
  const navigate = useNavigate();

  const { loading, createPaymentIntent } = useCreatePaymentIntent();
  const {
    loading: cryptoLoading,
    paymentData,
    createCrptoPayment,
  } = useCreateCryptoPaymentIntent();
  const { loading: finishLoading, emptyCart } = useEmptyCart();

  async function handlePurchase() {
    if (user?.isTest) {
      setAlertError("Test Users cannot buy new Machines");
      return;
    }
    localStorage.setItem("cart_items", JSON.stringify(user.cartItems));
    if (pay === "fiat") {
      createPaymentIntent({
        amount: total,
        message: "miner purchase",
        items: JSON.stringify(user.cartItems),
      });
    }
    if (pay === "crypto") {
      createCrptoPayment({
        amount: 20,
        message: "miner purchase",
        items: JSON.stringify(user.cartItems),
      });
    }

    // setAlertError("Purchase option not available now");
  }

  useEffect(() => {
    if (user && user?.cartItems) {
      const totalPrice = user?.cartItems?.reduce(
        (sum, item) => sum + item.qty * Number(item.itemId.price),
        0
      );
      setPrice(totalPrice);
      const hostingFee = user?.cartItems?.reduce(
        (sum, item) =>
          sum +
          item.qty *
            item.itemId.power *
            24 *
            item.itemId.hostingFeePerKw *
            3.67 *
            30,
        0
      );
      setFee(hostingFee);
      setTotal(hostingFee + totalPrice);
    }
  }, [user]);

  return (
    <div className="flex flex-col gap-5 lg:justify-between my-10 items-center duration-300 ease-in-out relative">
      <div className="border p-3 rounded-lg border-[#043377] lg:w-1/2 w-full">
        <p className="text-[#1ECBAF]">Note</p>
        <p className="text-sm">
          First month’s hosting fee must be prepaid with your miner purchase.
        </p>
      </div>
      <div className="flex gap-7 justify-between items-center py-5 border-b border-[#244A66] w-full lg:w-1/2">
        <p className="text-lg font-semibold">Pay with</p>
        <div
          className={`bg-[#011532]  p-1 border border-[#76C6E04D] rounded-s-full rounded-e-full flex items-center gap-5`}
        >
          <motion.button
            className={`text-white p-1 px-2 cursor-pointer disabled:cursor-not-allowed`}
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
            className={`text-white p-1 px-2 cursor-pointer disabled:cursor-not-allowed`}
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
      <div className="mx-auto p-10 bg-[#011532] rounded-md lg:w-1/2 flex flex-col gap-5 w-full">
        <p className="text-[#76C6E0] text-xl">Purchase Summary</p>
        <p className="text-xs text-red-700">
          Note: The App is in Test mode. So Dont Use real money or crypto
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <p>Quantity</p>
            <p>
              {user?.cartItems.reduce((sum, item) => sum + item.qty, 0)} items
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p>Total Price</p>
            <p className="">AED {price}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Hosting Fee(1 Month)</p>
            <p>AED {fee.toFixed(2)}</p>
          </div>
          <div className="flex justify-between items-center text-lg font-semibold pt-2 border-t text-[#07EAD3]">
            <p>Grand Total</p>
            <p>AED {total.toFixed(2)}</p>
          </div>
        </div>
        <button
          onClick={handlePurchase}
          className="w-full py-2 rounded-lg bg-[#07EAD3] text-black cursor-pointer"
        >
          CONFIRM PURCHASE
        </button>
        {loading && <Loading />}
        {cryptoLoading && <Loading />}
      </div>
      {pay === "crypto" && paymentData && (
        <div className="mx-auto p-10 bg-[#011532] rounded-md lg:w-1/2 flex flex-col gap-5 w-full">
          <p className="text-[#76C6E0] text-xl">Send Payment</p>
          <p>
            Payment Amount:{" "}
            <span className="text-[#76C6E0]">{`${paymentData?.payment_amount} ${paymentData?.payment_currency}`}</span>
          </p>
          <p>
            Address:{" "}
            <span className="text-[#76C6E0] text-xs md:text-base">{`${
              paymentData?.addresses?.BTC || paymentData?.addresses?.ETH
            }`}</span>
          </p>
          <QRCodeSVG
            value={`${paymentData?.payment_currency}:${paymentData?.addresses?.BTC}?amount=${paymentData?.payment_amount}`}
            size={180}
            className="mx-auto"
          />

          <p className="text-xs text-justify">
            Once You transfer the exact amount to this address , click finish.
            After payment completion your miners will be added to your list
          </p>
          <button
            onClick={async () => {
              await emptyCart();
              await refetch();
              localStorage.removeItem("cart_items");
              navigate("/dashboard/crypto-transactions");
            }}
            className="w-full py-2 rounded-lg bg-[#07EAD3] text-black cursor-pointer"
          >
            Finish Transaction
          </button>
          {finishLoading && <Loading />}
        </div>
      )}
    </div>
  );
}
