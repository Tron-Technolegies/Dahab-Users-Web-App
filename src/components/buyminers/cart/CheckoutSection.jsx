import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../UserContext";
// import { useTour } from "@reactour/tour";
// import useGetUserInfo from "../../../hooks/auth/useGetUserInfo";
import Loading from "../../Loading";
import useCreatePaymentIntent from "../../../hooks/payment/useCreatePaymentIntent";
import { motion } from "framer-motion";
import useCreateCryptoPaymentIntent from "../../../hooks/payment/useCreateCryptoPaymentIntent";
import { QRCodeSVG } from "qrcode.react";

import { useNavigate } from "react-router-dom";
import { sendMachineBuyingRequest } from "../../../utils/whatsapp";
import { useGetAllVouchers } from "../../../hooks/vouchers/useVoucher";
import VoucherCard from "./VoucherCard";
import { useClearCart, useGetCartItems } from "../../../hooks/cart/useCart";

export default function CheckoutSection() {
  const { user, setAlertError } = useContext(UserContext);
  // const { refetch } = useGetUserInfo();
  const [price, setPrice] = useState(0);
  const [fee, setFee] = useState(0);
  const [total, setTotal] = useState(0);
  const [pay, setPay] = useState("fiat");
  const [discount, setDiscount] = useState(0);
  const [voucher, setVoucher] = useState(null);
  const [cryptoCurrency, setCryptoCurrency] = useState("BTC");
  const navigate = useNavigate();
  const { isPending, clearCart } = useClearCart();
  const { loading, createPaymentIntent } = useCreatePaymentIntent();
  const { data, isLoading, refetch: voucherRefetch } = useGetAllVouchers();
  const {
    loading: cryptoLoading,
    paymentData,
    createCrptoPayment,
  } = useCreateCryptoPaymentIntent();

  const { data: cartItems, isLoading: cartLoading } = useGetCartItems();

  async function handlePurchase() {
    if (voucher) {
      if (
        voucher.applicable !== "Both" &&
        voucher.applicable !== "miner purchase"
      ) {
        setAlertError("This voucher is not applicable for miner purchase");
        return;
      }
      const today = new Date();
      if (new Date(voucher.validity) < today) {
        setAlertError("This voucher has been expired");
        return;
      }
      if (total < voucher.minimum) {
        setAlertError(
          `This voucher is only applicable on orders above ${voucher.minimum}`
        );
        return;
      }
    }

    localStorage.setItem("cart_items", JSON.stringify(cartItems));
    if (pay === "fiat") {
      // createPaymentIntent({
      //   amount: total,
      //   message: "miner purchase",
      //   items: JSON.stringify(user.cartItems),
      //   voucherCode: voucher?.code || null,
      // });
      const miners = cartItems
        .map((item) => `${item.itemId.name} x ${item.qty}nos`)
        .join(", ");
      sendMachineBuyingRequest({
        miners,
        total: total.toFixed(2),
        coupon: voucher?.code || "N/A",
        discount: `${voucher?.discount} %` || "N/A",
      });
    }
    if (pay === "crypto") {
      createCrptoPayment({
        amount: total,
        message: "miner purchase",
        items: JSON.stringify(cartItems),
        crypto: cryptoCurrency,
        voucherCode: voucher?.code || null,
      });
    }

    // setAlertError("Purchase option not available now");
  }

  useEffect(() => {
    if (cartItems) {
      const totalPrice = cartItems?.reduce(
        (sum, item) => sum + item.qty * Number(item.itemId.price),
        0
      );
      setPrice(totalPrice);
      const hostingFee = cartItems?.reduce((sum, item) => {
        if (item.itemId.isBulkHosting) {
          return (
            sum +
            item.qty *
              item.itemId.power *
              24 *
              item.itemId.hostingFeePerKw *
              3.67 *
              365 *
              3
          );
        } else {
          return (
            sum +
            item.qty *
              item.itemId.power *
              24 *
              item.itemId.hostingFeePerKw *
              3.67 *
              30
          );
        }
      }, 0);
      setFee((prev) => {
        return hostingFee;
      });
      setTotal((prev) => {
        return hostingFee + totalPrice;
      });
      if (voucher) {
        const discountedAmount = (total * voucher.discount) / 100;
        setDiscount((prev) => {
          return discountedAmount;
        });
      }
    }
  }, [cartItems, cartLoading, voucher]);

  return (
    <div className="flex flex-col gap-5 lg:justify-between my-10 items-center duration-300 ease-in-out relative">
      <div className="border p-3 rounded-lg border-[#043377] lg:w-1/2 w-full">
        <p className="text-[#1ECBAF]">Note</p>
        <p className="text-sm">
          Hosting fee must be prepaid with your miner purchase.(1 Month for
          certain miners & 3 Year for all other miners)
        </p>
      </div>
      <button
        className="text-sm text-blue-500 w-fit underline cursor-pointer"
        onClick={() => voucherRefetch()}
      >
        Get Available Vouchers
      </button>
      {isLoading && <Loading />}
      {data && data.length < 1 ? (
        <p>No Available Vouchers</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 w-full justify-center">
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
        <p className="text-[#76C6E0] text-xl">Purchase Summary</p>
        {/* <p className="text-xs text-red-700">
          Note: The App is in Test mode. So Dont Use real money or crypto
        </p> */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <p>Quantity</p>
            <p>{cartItems.reduce((sum, item) => sum + item.qty, 0)} items</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Total Price</p>
            <p className="">AED {price}</p>
          </div>
          <div className="flex justify-between items-center">
            <p>Hosting Fee</p>
            <p>AED {fee.toFixed(2)}</p>
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
                <p className="line-through opacity-40">
                  AED {total.toFixed(2)}
                </p>
                <p>AED {(total - discount).toFixed(2)}</p>
              </div>
            ) : (
              <p>AED {total.toFixed(2)}</p>
            )}
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
              clearCart();
              localStorage.removeItem("cart_items");
              navigate("/dashboard/crypto-transactions");
            }}
            className="w-full py-2 rounded-lg bg-[#07EAD3] text-black cursor-pointer"
          >
            Finish Transaction
          </button>
          {isPending && <Loading />}
        </div>
      )}
    </div>
  );
}
