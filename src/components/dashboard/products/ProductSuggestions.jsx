import React from "react";
import ProductCard1 from "./ProductCard1";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import Loading from "../../Loading";
import { useGetMiners } from "../../../hooks/products/useGetAllProducts";

export default function ProductSuggestions() {
  const { isPending: loading, data: miners } = useGetMiners();
  return loading ? (
    <Loading />
  ) : (
    <div className="flex flex-col gap-5">
      <p className="text-2xl">Popular Products</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {miners.map((item) => (
          <ProductCard1
            key={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
      <Link to={"/dashboard/buy"} className="flex gap-2 items-center ms-auto">
        See All{" "}
        <span className="text-xl">
          <IoIosArrowRoundForward />
        </span>
      </Link>
    </div>
  );
}
