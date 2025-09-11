import React, { useContext } from "react";
import { UserContext } from "../../../UserContext";
// import { useTour } from "@reactour/tour";
import useGetUserInfo from "../../../hooks/auth/useGetUserInfo";
import Loading from "../../Loading";
import useCreatePaymentIntent from "../../../hooks/payment/useCreatePaymentIntent";

export default function CheckoutSection() {
  // const [pay, setPay] = useState("fiat");
  const { user, setAlertError } = useContext(UserContext);
  const { refetch } = useGetUserInfo();

  const { loading, createPaymentIntent } = useCreatePaymentIntent();

  return (
    <div className="flex lg:flex-row flex-col lg:justify-between my-10 items-center duration-300 ease-in-out">
      <div className="my-10 w-full"></div>
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
            if (user?.isTest) {
              setAlertError("Test Users cannot buy new Machines");
              return;
            }
            localStorage.setItem("cart_items", JSON.stringify(user.cartItems));
            createPaymentIntent({
              amount: user?.cartItems?.reduce(
                (sum, item) => sum + item.qty * parseInt(item?.itemId?.price),
                0
              ),
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
