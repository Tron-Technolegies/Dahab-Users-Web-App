import React, { useContext, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import useCreatePaymentIntent from "../../hooks/payment/useCreatePaymentIntent";
import Loading from "../Loading";
import { UserContext } from "../../UserContext";
import { motion } from "framer-motion";
import useCreateCryptoPaymentIntent from "../../hooks/payment/useCreateCryptoPaymentIntent";
import CryptoPaymentPopup from "./CryptoPaymentPopup";
import { useGetAllVouchers } from "../../hooks/vouchers/useVoucher";
import VoucherCard from "../buyminers/cart/VoucherCard";
import { sendTopupRequest } from "../../utils/whatsapp";

export default function RechargePage() {
  const [amount, setAmount] = useState(0);
  const { loading, createPaymentIntent } = useCreatePaymentIntent();
  const [voucher, setVoucher] = useState(null);
  const [discount, setDiscount] = useState(0);
  const {
    loading: cryptoLoading,
    createCrptoPayment,
    paymentData,
  } = useCreateCryptoPaymentIntent();
  const { user, setAlertError } = useContext(UserContext);
  const [pay, setPay] = useState("fiat");
  const [cryptoPopup, setCryptoPopup] = useState(false);
  const [cryptoCurrency, setCryptoCurrency] = useState("BTC");
  const { isLoading, data, refetch } = useGetAllVouchers();

  useEffect(() => {
    if (user?.walletBalance < 0) {
      setAmount(-Number(user?.walletBalance.toFixed(2)));
    }
  }, [user]);

  useEffect(() => {
    if (voucher) {
      const discountedValue = (amount * voucher.discount) / 100;
      setDiscount((prev) => {
        return discountedValue;
      });
    }
  }, [amount, voucher]);

  useEffect(() => {
    if (paymentData) {
      setCryptoPopup(true);
    }
  }, [paymentData]);

  async function handleTopup() {
    if (
      user?.walletBalance < 0 &&
      Number(amount) < -Number(user?.walletBalance.toFixed(2))
    ) {
      setAlertError(
        "Only able to topup amounts greater than your current negative balance"
      );
      return;
    }
    if (amount < 50) {
      setAlertError("Only able to pay amounts greater than 50 AED");
      return;
    }
    if (voucher) {
      if (
        voucher.applicable !== "Both" &&
        voucher.applicable !== "wallet Topup"
      ) {
        setAlertError("This voucher is not applicable for wallet Topup");
        return;
      }
      const today = new Date();
      if (new Date(voucher.validity) < today) {
        setAlertError("This voucher has been expired");
        return;
      }
      if (amount < voucher.minimum) {
        setAlertError(
          `This voucher is only applicable on orders above ${voucher.minimum}`
        );
        return;
      }
    }
    if (pay === "fiat") {
      // await createPaymentIntent({
      //   amount: amount,
      //   message: "wallet Topup",
      //   voucherCode: voucher?.code || null,
      // });
      console.log("clicked");

      sendTopupRequest({ amount, coupon: voucher?.code || null, discount });
    }
    if (pay === "crypto") {
      await createCrptoPayment({
        amount: Number(amount),
        message: "wallet Topup",
        crypto: cryptoCurrency,
        voucherCode: voucher?.code || null,
      });
    }
  }
  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 flex flex-col gap-5">
      <div className="flex flex-col gap-5 items-center w-full">
        <p className="text-xl text-[#76C6E0] text-center">
          Enter Your Topup amount (AED)
        </p>
        <input
          type="number"
          className="bg-white p-2 rounded-lg text-black"
          value={amount}
          onWheel={(e) => e.target.blur()}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          onClick={() => refetch()}
          className="text-sm text-blue-500 underline cursor-pointer"
        >
          Get Available Coupons
        </button>
        {isLoading && <Loading />}
        {data && data?.length < 1 ? (
          <p className="text-sm">No vouchers to show</p>
        ) : (
          <div className="grid lg:grid-cols-3 gap-3 w-full">
            {data?.map((item) => (
              <VoucherCard
                key={item._id}
                name={item.name}
                code={item.code}
                discount={item.discount}
                validity={item.validity}
                applicable={item.applicableFor}
                minimum={item.minimumSpent}
                description={item.description}
                id={item._id}
                setVoucher={setVoucher}
                voucher={voucher}
              />
            ))}
          </div>
        )}
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
        {pay === "crypto" && (
          <div className="flex justify-between w-full lg:w-1/2 py-5 border-b border-[#244A66]">
            <p>Select Crypto</p>
            <select
              value={cryptoCurrency}
              onChange={(e) => setCryptoCurrency(e.target.value)}
              className="bg-blue-500 rounded-md p-2"
            >
              <option value={"BTC"}>BTC</option>
              <option value={"ETH"}>ETH</option>
              <option value={"USDC"}>USDC</option>
              <option value={"USDT"}>USDT</option>
            </select>
          </div>
        )}
        <div className="mx-auto p-10 bg-[#011532] rounded-md lg:w-1/2 flex flex-col gap-5 w-full">
          <p className="text-[#76C6E0] text-xl">Top-up Summary</p>
          {/* <p className="text-xs text-red-700">
          Note: The App is in Test mode. So Dont Use real money or crypto
        </p> */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <p>Quantity</p>
              <p>AED {amount}</p>
            </div>

            {voucher && (
              <>
                <div className="flex justify-between items-center">
                  <p>Coupon code:</p>
                  <p>{voucher?.code}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Discount</p>
                  <p className="text-red-500">- {discount.toFixed(2)}</p>
                </div>
              </>
            )}
            <div className="flex justify-between items-center text-lg font-semibold pt-2 border-t text-[#07EAD3]">
              <p>Grand Total</p>
              {voucher ? (
                <div className="flex flex-col">
                  <p className="line-through opacity-40">{amount}</p>
                  <p>{(amount - discount).toFixed(2)}</p>
                </div>
              ) : (
                <p>{amount}</p>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-5 items-center">
          <button
            className="px-3 py-1 rounded-md bg-gray-600 cursor-pointer min-w-20"
            onClick={handleTopup}
          >
            Topup
          </button>
        </div>
        {loading && <Loading />}
        {cryptoLoading && <Loading />}
      </div>
      {paymentData && (
        <CryptoPaymentPopup
          open={cryptoPopup}
          setOpen={setCryptoPopup}
          paymentData={paymentData}
        />
      )}
    </div>
  );
}
