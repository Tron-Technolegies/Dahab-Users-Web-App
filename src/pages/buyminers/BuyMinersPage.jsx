import React, { useEffect } from "react";
import BuyList from "../../components/buyminers/BuyList";
import { Link } from "react-router-dom";

export default function BuyMinersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 flex flex-col gap-5">
      <Link
        to={"/dashboard/buy/cart"}
        className="flex gap-2 items-center px-4 py-1 rounded-md bg-[#011532] w-fit ms-auto"
      >
        Cart <img src="/buy-miners/cart.png" className="w-6" />
      </Link>
      <BuyList />
    </div>
  );
}
