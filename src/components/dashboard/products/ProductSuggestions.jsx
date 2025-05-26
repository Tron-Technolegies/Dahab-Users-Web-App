import React from "react";
import ProductCard1 from "./ProductCard1";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function ProductSuggestions() {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-2xl">Popular Products</p>
      <div className="grid grid-cols-4 gap-5">
        <ProductCard1
          image={"/home/miner.png"}
          name={"Anexminer ET5 1200MH EtHashETC Miner"}
          price={"1998"}
        />
        <ProductCard1
          image={"/home/miner.png"}
          name={"Anexminer ET5 1200MH EtHashETC Miner"}
          price={"1998"}
        />
        <ProductCard1
          image={"/home/miner.png"}
          name={"Anexminer ET5 1200MH EtHashETC Miner"}
          price={"1998"}
        />
        <ProductCard1
          image={"/home/miner.png"}
          name={"Anexminer ET5 1200MH EtHashETC Miner"}
          price={"1998"}
        />
      </div>
      <Link className="flex gap-2 items-center ms-auto">
        See All{" "}
        <span className="text-xl">
          <IoIosArrowRoundForward />
        </span>
      </Link>
    </div>
  );
}
