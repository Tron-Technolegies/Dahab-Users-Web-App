import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../UserContext";
// import { useTour } from "@reactour/tour";
import useGetUserInfo from "../../../hooks/auth/useGetUserInfo";
import Loading from "../../Loading";
import useCreatePaymentIntent from "../../../hooks/payment/useCreatePaymentIntent";

export default function CheckoutSection() {
  // const [pay, setPay] = useState("fiat");
  const { user, setAlertError } = useContext(UserContext);
  const { refetch } = useGetUserInfo();
  const [price, setPrice] = useState(0);
  const [fee, setFee] = useState(0);
  const [total, setTotal] = useState(0);

  const { loading, createPaymentIntent } = useCreatePaymentIntent();

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
    <div className="flex flex-col gap-5 lg:justify-between my-10 items-center duration-300 ease-in-out">
      <div className="border p-3 rounded-lg border-[#043377] lg:w-1/2 w-full">
        <p className="text-[#1ECBAF]">Note</p>
        <p className="text-sm">
          First month’s hosting fee must be prepaid with your miner purchase.
        </p>
      </div>
      <div className="mx-auto p-10 bg-[#011532] rounded-md lg:w-1/2 flex flex-col gap-5 w-full">
        <p className="text-[#76C6E0] text-xl">Purchase Summary</p>
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
          onClick={async () => {
            if (user?.isTest) {
              setAlertError("Test Users cannot buy new Machines");
              return;
            }
            localStorage.setItem("cart_items", JSON.stringify(user.cartItems));
            createPaymentIntent({
              amount: total,
              message: "miner purchase",
            });
            // setAlertError("Purchase option not available now");
          }}
          className="w-full py-2 rounded-lg bg-[#07EAD3] text-black cursor-pointer"
        >
          CONFIRM PURCHASE
        </button>
        {loading && <Loading />}
      </div>
    </div>
  );
}
