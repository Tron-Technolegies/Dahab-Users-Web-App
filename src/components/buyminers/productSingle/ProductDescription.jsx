import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAddToCart from "../../../hooks/cart/useAddToCart";
import { UserContext } from "../../../UserContext";
import InfoContainer from "../InfoContainer";
import { BsCartPlus } from "react-icons/bs";
import Loading from "../../Loading";
import { IoInformationCircleOutline, IoWarningOutline } from "react-icons/io5";

export default function ProductDescription({ miner }) {
  const { id } = useParams();
  const [showInfo, setShowInfo] = useState(false);
  const { loading: cartLoading, addToCart } = useAddToCart();
  const navigate = useNavigate();
  const { refetchTrigger, setRefetchTrigger } = useContext(UserContext);
  return (
    <div className="p-3 w-full flex flex-col gap-5">
      <h1 className="md:text-2xl text-xl text-[#1ECBAF] lg:text-left text-center font-semibold">
        {miner?.name}
      </h1>
      <p className="lg:text-left md:text-base text-sm text-justify font-semibold">
        {miner?.subtitle}
      </p>
      <p className="lg:text-left md:text-base text-sm text-justify">
        {miner?.description}
      </p>
      <div className="w-full flex flex-col gap-3 justify-center">
        <div className="justify-between">
          <p>
            <span className="text-[#07EAD3]">Coin</span> - BTC
          </p>
        </div>
        <div className="flex gap-2 item-center w-full">
          <InfoContainer
            name={"Investment"}
            percent={miner?.investmentFactor}
          />
          <div className="text-[#0194FE]">{`${miner?.investmentFactor}%`}</div>
        </div>
        <div className="flex gap-2 item-center w-full">
          <InfoContainer name={"Revenue"} percent={miner?.revenueFactor} />
          <p className="text-[#0194FE]">{miner?.revenueFactor}%</p>
        </div>
        <div className="flex gap-2 item-center w-full">
          <InfoContainer
            name={"Efficiency"}
            percent={miner?.efficiencyFactor}
          />
          <p className="text-[#0194FE]">{miner?.efficiencyFactor}%</p>
        </div>
        <div className="flex gap-2 item-center w-full">
          <InfoContainer name={"Risk"} percent={miner?.riskFactor} />
          <p className="text-[#0194FE]">{miner?.riskFactor}%</p>
        </div>
        <div className="flex gap-2 item-center w-full">
          <InfoContainer name={"Hosting"} percent={miner?.hostingFactor} />
          <p className="text-[#0194FE]">{miner?.hostingFactor}%</p>
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
          {cartLoading && <Loading />}
        </div>
      ) : (
        <button className="bg-[#198FA6] w-full py-2 rounded-md cursor-pointer">
          Out of Stock
        </button>
      )}
    </div>
  );
}
