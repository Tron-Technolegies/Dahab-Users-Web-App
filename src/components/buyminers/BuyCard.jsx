import { Link } from "react-router-dom";
import InfoContainer from "./InfoContainer";
import { MdOutlineAttachMoney } from "react-icons/md";

export default function BuyCard({
  hashRate,
  power,
  stock,
  image,
  name,
  price,
  id,
  coin,
  hostingFee,
  hashPrice,
}) {
  return (
    <div
      className={`p-5 rounded-2xl border border-[#76C6E038] flex flex-col justify-between gap-3 items-center w-full ${
        stock > 0 ? "bg-[#011532]" : "bg-gray-700"
      }`}
    >
      <div className="flex justify-between w-full">
        <div>
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-[#07EAD3]">AED {price}</p>
        </div>
        <p className="text-xs p-2 rounded-md bg-gray-800 h-fit">
          {stock > 0 ? (
            <span className="text-[#07EAD3]">In Stock</span>
          ) : (
            <span className="text-red-500">Out Of Stock</span>
          )}
        </p>
      </div>
      <div className="flex items-center gap-5 w-full">
        <div className="flex flex-col gap-2 items-center bg-[#000415] p-2 rounded-md border border-[#76C6E038] w-full">
          <p className="flex gap-2 items-center">
            <img src="/my-miners/i2.png" />
            <span className="text-xs text-gray-400">Hashrate</span>
          </p>
          <p className="text-sm">{hashRate} TH/s</p>
        </div>
        <div className="flex flex-col gap-2 items-center bg-[#000415] p-2 rounded-md border border-[#76C6E038] w-full">
          <p className="flex gap-2 items-center">
            <img src="/my-miners/i1.png" />
            <span className="text-xs text-gray-400">Consumption</span>
          </p>
          <p className="text-sm">{power} Kw/h</p>
        </div>
      </div>
      <div className="bg-[#000415] p-2 rounded-md border border-[#76C6E038] w-full flex flex-col items-center">
        <div className="flex justify-between my-3 w-full">
          <p className="text-sm px-2 py-1 rounded-sm bg-[#011532] text-[#76C6E0] border border-[#81c9e187]">
            {coin}
          </p>
          <p className="text-sm px-2 py-1 rounded-sm bg-[#011532] text-[#76C6E0] border border-[#81c9e187]">
            $ {hostingFee}/Kwh
          </p>
        </div>
        <img src={image} alt={name} className="w-[250px] object-cover" />
      </div>
      {hashPrice && (
        <p className="text-xs text-gray-400">
          Breakeven Hash Price:{" "}
          <span className="text-sm text-white">{hashPrice}</span>
        </p>
      )}

      {/* <div className="flex justify-between items-start w-full">
        <div className="flex flex-col gap-1 text-[#76C6E0]">
          <p className="flex gap-2 items-center">
            <img src={"/my-miners/i2.png"} className="w-2" />
            {hashRate} TH/s
          </p>
          <p className="flex gap-2 items-center">
            <img src={"/my-miners/i1.png"} className="w-2" />
            {power.toFixed(2)} KW/h
          </p>
        </div>
        <div className="flex flex-col gap-1 text-[#76C6E0] items-end">
          <p>
            {stock > 0 ? (
              <span className="text-[#07EAD3]">In Stock</span>
            ) : (
              <span className="text-red-500">Out Of Stock</span>
            )}
          </p>
          <p className="flex gap-1 items-center">
            <span className=" p-0">
              <MdOutlineAttachMoney />
            </span>
            {hostingFee} per KW/h
          </p>
        </div>
      </div>
      <img src={image} className="w-[250px] object-cover" />
      <div className="flex flex-col gap-1 items-center">
        <p>{name}</p>
        <p className="text-[#07EAD3]">AED {price}</p>
      </div> */}
      {/* <div className="w-full flex flex-col gap-3 justify-center">
        <div className="justify-between">
          <p>
            <span className="text-[#07EAD3]">Coin</span> - BTC
          </p>
        </div>
        <InfoContainer name={"Investment"} percent={investment} />
        <InfoContainer name={"Revenue"} percent={revenue} />
        <InfoContainer name={"Efficiency"} percent={efficiency} />
        <InfoContainer name={"Risk"} percent={risk} />
        <InfoContainer name={"Hosting"} percent={hosting} />
      </div> */}
      {stock > 0 ? (
        <Link
          to={`/dashboard/buy/${id}`}
          className="bg-[#0194FE] w-full py-2 rounded-md text-center cursor-pointer"
        >
          View Details
        </Link>
      ) : (
        <button className="bg-[#198FA6] w-full py-2 rounded-md text-center cursor-pointer">
          Out Of Stock
        </button>
      )}
    </div>
  );
}
