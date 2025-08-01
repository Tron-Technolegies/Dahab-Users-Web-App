import React from "react";

import BuyCard from "./BuyCard";
import useGetAllProducts from "../../hooks/products/useGetAllProducts";
import Loading from "../Loading";

export default function BuyList() {
  const { loading, miners } = useGetAllProducts();
  return loading ? (
    <Loading />
  ) : (
    <div>
      <p className="text-xl">Our Top Products</p>
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
            hosting={item.hostingFactor}
            investment={item.investmentFactor}
            risk={item.riskFactor}
            revenue={item.revenueFactor}
            efficiency={item.efficiencyFactor}
            id={item._id}
            hostingFee={item.hostingFeePerKw}
          />
        ))}
      </div>
    </div>
  );
}
