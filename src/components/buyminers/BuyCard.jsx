import { Link } from "react-router-dom";
import InfoContainer from "./InfoContainer";

export default function BuyCard({
  hashRate,
  power,
  stock,
  image,
  name,
  price,
  id,
}) {
  return (
    <div
      className={`p-5 rounded-2xl border border-[#76C6E038] flex flex-col gap-3 items-center w-full ${
        stock > 0 ? "bg-[#011532]" : "bg-gray-700"
      }`}
    >
      <div className="flex justify-between items-start w-full">
        <div className="flex flex-col gap-1">
          <p className="flex gap-2 items-center">
            <img src={"/my-miners/i2.png"} className="w-2" />
            {hashRate} TH/s
          </p>
          <p className="flex gap-2 items-center">
            <img src={"/my-miners/i1.png"} className="w-2" />
            {power.toFixed(2)} KW/h
          </p>
        </div>
        <p>
          {stock > 0 ? (
            <span className="text-[#07EAD3]">In Stock</span>
          ) : (
            <span className="text-red-500">Out Of Stock</span>
          )}
        </p>
      </div>
      <img src={image} className="w-32 object-cover" />
      <div className="flex flex-col gap-1 items-center">
        <p>{name}</p>
        <p className="text-[#07EAD3]">AED {price}</p>
      </div>
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
      <Link
        to={`/dashboard/buy/${id}`}
        className="bg-[#0194FE] w-full py-2 rounded-md text-center cursor-pointer"
      >
        View Details
      </Link>
      {/* {stock > 0 ? (
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
      )} */}
    </div>
  );
}
