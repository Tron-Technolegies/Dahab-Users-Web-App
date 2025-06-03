import React from "react";
import CartTable from "../../components/buyminers/cart/CartTable";

export default function CartPage() {
  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 flex flex-col">
      <p className="text-xl">Cart Items</p>
      <CartTable />
    </div>
  );
}
