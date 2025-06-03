import React from "react";
import { products } from "../../utils/miners";
import BuyCard from "./BuyCard";

export default function BuyList() {
  return (
    <div>
      <p className="text-xl">Our Top Products</p>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 my-5">
        {products.map((item) => (
          <BuyCard
            key={item.id}
            name={item.name}
            hashRate={item.h24_hashRate}
            power={item.power}
            stock={item.stock}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
