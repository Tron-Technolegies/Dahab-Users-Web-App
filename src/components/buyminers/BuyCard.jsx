import { Link } from "react-router-dom";

import { IoInformationCircleOutline, IoWarningOutline } from "react-icons/io5";
import { IoIosTrendingUp } from "react-icons/io";
import DangerBar from "../DangerBar";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { useContext, useEffect, useState } from "react";
import { CalculatorContext } from "../../CalculatorContext";
import { BsCartPlus } from "react-icons/bs";
import useAddToCart from "../../hooks/cart/useAddToCart";
import { UserContext } from "../../UserContext";
import Loading from "../Loading";

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
  const { thPerDay } = useContext(CalculatorContext);
  const [btcGen, setBtcGen] = useState(0);
  const [hosting, setHosting] = useState(0);
  const { loading: cartLoading, addToCart } = useAddToCart();
  const { refetchTrigger, setRefetchTrigger } = useContext(UserContext);
  const [showInfo1, setShowInfo1] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);

  useEffect(() => {
    setBtcGen(Number(thPerDay) * Number(hashRate) * 30);
    setHosting(Number(hostingFee) * Number(power) * 24 * 30);
  }, [hashRate, hostingFee, power]);
  return (
    <div
      className={`p-5 rounded-2xl relative border border-[#76C6E038] flex flex-col justify-between gap-3 items-center w-full ${
        stock > 0 ? "bg-[#011532]" : "bg-gray-700"
      }`}
    >
      <Link to={`/dashboard/buy/${id}`} className="flex justify-between w-full">
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
      </Link>
      <Link
        to={`/dashboard/buy/${id}`}
        className="flex items-center gap-5 w-full"
      >
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
      </Link>
      <Link
        to={`/dashboard/buy/${id}`}
        className="bg-[#000415] p-2 rounded-md border border-[#76C6E038] w-full flex flex-col items-center"
      >
        <div className="flex justify-between my-3 w-full">
          <p className="text-sm px-2 py-1 rounded-sm bg-[#011532] text-[#76C6E0] border border-[#81c9e187]">
            {coin}
          </p>
          <p className="text-sm px-2 py-1 rounded-sm bg-[#011532] text-[#76C6E0] border border-[#81c9e187]">
            $ {hostingFee}/Kwh
          </p>
        </div>
        <img src={image} alt={name} className="w-[250px] object-cover" />
      </Link>
      {hashPrice && (
        <p className="text-xs text-gray-400">
          Breakeven Hash Price:{" "}
          <span className="text-sm text-white">{hashPrice}</span>
        </p>
      )}
      <div className="w-full flex flex-col gap-1">
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-3 text-sm">
            <IoIosTrendingUp className="text-[#76C6E0]" />
            <p className="text-gray-300">Bitcoin Generation</p>
            <span
              className="opacity-50 cursor-pointer"
              onMouseEnter={() => setShowInfo1(true)}
              onMouseLeave={() => setShowInfo1(false)}
            >
              <IoInformationCircleOutline />
            </span>
          </div>
          <p className="text-sm text-gray-300">{btcGen.toFixed(6)}</p>
        </div>
        <DangerBar percentage={70} />
      </div>
      <div className="w-full flex flex-col gap-1">
        <div className="flex justify-between w-full">
          <div className="flex items-center gap-3 text-sm">
            <HiOutlineCurrencyDollar className="text-[#76C6E0]" />
            <p className="text-gray-300">Hosting Fee</p>
            <span
              className="opacity-50 cursor-pointer"
              onMouseEnter={() => setShowInfo2(true)}
              onMouseLeave={() => setShowInfo2(false)}
            >
              <IoInformationCircleOutline />
            </span>
          </div>
          <p className="text-sm text-gray-300">{hosting.toFixed(2)}</p>
        </div>
        <DangerBar percentage={30} />
      </div>
      {stock > 0 ? (
        <div className="flex gap-2 items-center w-full relative">
          <Link
            to={`/dashboard/buy/${id}`}
            className="bg-[#0194FE] w-full py-2 rounded-md text-center cursor-pointer"
          >
            View Details
          </Link>
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
          {cartLoading && <Loading />}
        </div>
      ) : (
        <button className="bg-[#198FA6] w-full py-2 rounded-md cursor-pointer">
          Out of Stock
        </button>
      )}
      {showInfo1 && (
        <div
          className="absolute bottom-0 bg-black p-5 rounded-lg z-10 lg:w-[400px] w-[300px] flex flex-col gap-3 items-center"
          onMouseEnter={() => setShowInfo1(true)}
          onMouseLeave={() => setShowInfo1(false)}
        >
          <p className="text-center">{"Bitcoin Generation Per Month"}</p>
          <p className="text-sm font-semibold">
            {`HashRate: ${hashRate} TH/s`}
          </p>
          <p className="text-sm font-semibold">{`BTC/TH/Day: ${thPerDay.toFixed(
            8
          )} BTC`}</p>
          <div
            className="text-xs text-justify flex flex-col gap-1"
            dangerouslySetInnerHTML={{
              __html: `BTC/Month =  ${hashRate} x ${thPerDay.toFixed(8)} x 30`,
            }}
          ></div>
        </div>
      )}
      {showInfo2 && (
        <div
          className="absolute bottom-0 bg-black p-5 rounded-lg z-10 lg:w-[400px] w-[300px] flex flex-col gap-3 items-center"
          onMouseEnter={() => setShowInfo2(true)}
          onMouseLeave={() => setShowInfo2(false)}
        >
          <p className="text-center">{"Hosting Fee Per Month"}</p>
          <p className="text-sm font-semibold">{`Power: ${power} KW`}</p>
          <p className="text-sm font-semibold">{`Hosting Fee Per KW: $ ${hostingFee} `}</p>
          <div
            className="text-xs text-justify flex flex-col gap-1"
            dangerouslySetInnerHTML={{
              __html: `Hosting Fee per month = ${power} x ${hostingFee} x 24hr x 30`,
            }}
          ></div>
        </div>
      )}
    </div>
  );
}
