import React from "react";
import BuyCard from "./BuyCard";
import Loading from "../Loading";
import { useGetMiners } from "../../hooks/products/useGetAllProducts";

export default function BuyList() {
  const { data: miners, isPending: loading } = useGetMiners();
  return loading ? (
    <Loading />
  ) : (
    <div>
      <p className="text-xl">Our Bestselling Products</p>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 my-5">
        {miners.map((item) => (
          <BuyCard
            key={item._id}
            name={item.name}
            hashRate={item.hashRate}
            power={item.power}
            stock={item.stock}
            image={item.image}
            price={item.price}
            coin={item.coin}
            id={item._id}
            hostingFee={item.hostingFeePerKw}
            hashPrice={item.breakEvenHash}
          />
        ))}
      </div>
    </div>
  );
}
