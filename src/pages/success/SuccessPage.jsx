import React, { useContext } from "react";
import PurchaseSummary from "../../components/success/PurchaseSummary";
import PayoutSelectorSuccess from "../../components/success/PayoutSelectorSuccess";
import { UserContext } from "../../UserContext";
import { Link } from "react-router-dom";

export default function SuccessPage() {
  const { user } = useContext(UserContext);
  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 flex flex-col items-center gap-5">
      <div className="flex flex-col gap-2 items-center border-b border-[#244A66] pb-7 w-full">
        <p className="text-2xl text-[#76C6E0]">Success</p>
        <p className="text-sm text-center">
          Congratulations on your new miner.
        </p>
      </div>
      <PurchaseSummary />
      {user?.isFirst ? (
        <PayoutSelectorSuccess />
      ) : (
        <Link
          className="px-3 py-2 rounded-lg bg-[#07EAD3] cursor-pointer text-black"
          to={"/dashboard"}
          onClick={() => localStorage.removeItem("cart_items")}
        >
          Continue
        </Link>
      )}
    </div>
  );
}
