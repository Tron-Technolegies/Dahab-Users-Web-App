import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetSingleProduct from "../../../hooks/products/useGetSingleProduct";
import Loading from "../../Loading";
import InfoContainer from "../InfoContainer";
import { BsCartPlus } from "react-icons/bs";
import useAddToCart from "../../../hooks/cart/useAddToCart";
import { UserContext } from "../../../UserContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { loading, miner } = useGetSingleProduct({ id });
  const { loading: cartLoading, addToCart } = useAddToCart();
  const navigate = useNavigate();
  const { refetchTrigger, setRefetchTrigger } = useContext(UserContext);
  return loading ? (
    <Loading />
  ) : (
    <div className="flex justify-between items-center">
      <div className="bg-[#011532] p-7 px-10 rounded-xl flex flex-col gap-5">
        <div className="flex justify-between items-start w-full">
          <div className="flex flex-col gap-1">
            <p className="flex gap-2 items-center">
              <img src={"/my-miners/i2.png"} className="w-2" />
              {miner?.h24_hashRate}
            </p>
            <p className="flex gap-2 items-center">
              <img src={"/my-miners/i1.png"} className="w-2" />
              {miner?.power}
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
        <img src={miner?.image} className="w-[280px] object-cover" />
      </div>
      <div className="p-3 max-w-[550px] flex flex-col gap-5">
        <h1 className="text-2xl text-[#1ECBAF] font-semibold">{miner?.name}</h1>
        <p>{`${miner?.name} is a high-performance Bitcoin miner known for its efficiency and reliability. It delivers 100 terahashes per second, making it ideal for maximizing mining profits.`}</p>
        <div className="w-full flex flex-col gap-3 justify-center">
          <div className="justify-between">
            <p>
              <span className="text-[#07EAD3]">Coin</span> - BTC
            </p>
          </div>
          <InfoContainer name={"Investment"} percent={50} />
          <InfoContainer name={"Revenue"} percent={60} />
          <InfoContainer name={"Efficiency"} percent={70} />
          <InfoContainer name={"Risk"} percent={20} />
          <InfoContainer name={"Hosting"} percent={40} />
        </div>
        <div>
          <p className="text-[#1ECBAF] text-2xl">{`AED ${miner?.price}`}</p>
          <p className="text-xs">(incl. of all taxes)</p>
        </div>
        {miner?.stock > 0 ? (
          <div className="flex gap-2 items-center w-full">
            <button
              onClick={async () => {
                await addToCart({ itemId: id });
                setRefetchTrigger(!refetchTrigger);
                navigate("/dashboard/buy/cart");
              }}
              className="bg-[#0194FE] w-full py-2 rounded-md text-center cursor-pointer"
            >
              Buy Now
            </button>
            <button
              onClick={async () => {
                await addToCart({ itemId: id });
                setRefetchTrigger(!refetchTrigger);
              }}
              className="p-2 bg-[#42E8E0] rounded-md text-2xl text-black
            cursor-pointer"
            >
              <BsCartPlus />
            </button>
          </div>
        ) : (
          <button className="bg-[#198FA6] w-full py-2 rounded-md cursor-pointer">
            Join Waitlist
          </button>
        )}
      </div>
    </div>
  );
}
