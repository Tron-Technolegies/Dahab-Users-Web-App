import { BsCartPlus } from "react-icons/bs";
import { IoWarningOutline } from "react-icons/io5";
import Loading from "../../Loading";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAddToCart } from "../../../hooks/cart/useCart";

export default function ProductDetails({ miner }) {
  const { id } = useParams();
  const [showInfo, setShowInfo] = useState(false);
  const { isPending, addToCart } = useAddToCart();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-5">
      <div className="flex lg:flex-row flex-col gap-7 items-center">
        <div className="bg-[#011532] p-7 px-10 rounded-xl flex flex-col items-center gap-5">
          <div className="flex justify-between items-start w-full">
            <div className="flex flex-col gap-1">
              <p className="flex gap-2 items-center">
                <img src={"/my-miners/i2.png"} className="w-2" />
                {miner?.hashRate} TH/s
              </p>
              <p className="flex gap-2 items-center">
                <img src={"/my-miners/i1.png"} className="w-2" />
                {miner?.power.toFixed(2)} KW/h
              </p>
            </div>
            <p>
              {miner?.stock > 0 ? (
                <span className="text-[#07EAD3]">In Stock</span>
              ) : (
                <span className="text-red-500">Out Of Stock</span>
              )}
            </p>
          </div>
          <img
            src={miner?.image}
            className="lg:w-[400px] w-full object-cover"
          />
        </div>
        <div>
          <h1 className="md:text-2xl text-xl text-[#1ECBAF] lg:text-left text-center font-semibold">
            {miner?.name}
          </h1>
          <p className="lg:text-left text-justify md:text-base text-sm font-semibold">
            {miner?.subtitle}
          </p>
        </div>
      </div>
      <div>
        <p className="text-[#1ECBAF] text-2xl">{`AED ${miner?.price}`}</p>
        <p className="text-xs">(incl. of all taxes)</p>
      </div>
      <div className="border p-3 rounded-lg border-[#043377]">
        <p className="text-[#1ECBAF]">Note</p>
        {miner?.isBulkHosting ? (
          <p className="text-sm">
            Hosting Fee for 3 Years must be prepaid with your miner purchase.
          </p>
        ) : (
          <p className="text-sm">
            First month’s hosting fee must be prepaid with your miner purchase.
            Future fees will be auto-deduct. Withdrawals of mined BTC allowed
            only if wallet balance ≥ 0.
          </p>
        )}
      </div>
      {miner?.stock > 0 ? (
        <div className="flex gap-2 items-center w-full relative">
          <span
            className="text-orange-500 text-sm cursor-pointer"
            onMouseEnter={() => setShowInfo(true)}
            onMouseLeave={() => setShowInfo(false)}
          >
            <IoWarningOutline />
          </span>
          {showInfo && (
            <div
              className="absolute top-10 bg-black p-5 rounded-lg z-10 lg:w-[400px] w-[300px] flex flex-col gap-3 items-center"
              onMouseEnter={() => setShowInfo(true)}
              onMouseLeave={() => setShowInfo(false)}
            >
              <p className="text-center text-xs text-white font-normal">
                You are purchasing a digital mining contract, not a physical
                machine. Performance depends on the uptime of our actual mining
                operations.
              </p>
            </div>
          )}

          <button
            onClick={async () => {
              await addToCart({ productId: id });
              navigate("/dashboard/buy/cart");
            }}
            className="bg-[#0194FE] w-full py-2 rounded-md text-center cursor-pointer"
          >
            Buy Now
          </button>
          <button
            onClick={async () => {
              await addToCart({ productId: id });
            }}
            className="p-2 bg-[#42E8E0] rounded-md text-2xl text-black
            cursor-pointer"
          >
            <BsCartPlus />
          </button>
          {isPending && <Loading />}
        </div>
      ) : (
        <button className="bg-[#198FA6] w-full py-2 rounded-md cursor-pointer">
          Out of Stock
        </button>
      )}
    </div>
  );
}
