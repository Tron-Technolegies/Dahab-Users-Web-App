import { useScroll } from "framer-motion";
import React, { useContext, useState } from "react";
import useUpdateCart from "../../../hooks/cart/useUpdateCart";
import { UserContext } from "../../../UserContext";
import Loading from "../../Loading";
import { MdDelete } from "react-icons/md";
import useRemoveItem from "../../../hooks/cart/useRemoveItem";

export default function QuantitySwitcher({ qty, id }) {
  const { loading, updateCart } = useUpdateCart();
  const { loading: removeLoading, removeItem } = useRemoveItem();
  const { refetchTrigger, setRefetchTrigger } = useContext(UserContext);
  async function handleDecrease() {
    if (qty === 1) return;
    await updateCart({ itemId: id, qty: qty - 1 });
    setRefetchTrigger(!refetchTrigger);
  }
  async function handleIncrease() {
    await updateCart({ itemId: id, qty: qty + 1 });
    setRefetchTrigger(!refetchTrigger);
  }
  return (
    <>
      <div className="flex items-center border border-[#76C6E036]">
        <button
          className="p-3 text-center border-r border-[#76C6E036] cursor-pointer"
          onClick={handleDecrease}
        >
          -
        </button>
        <p className="p-3 text-center">{qty}</p>
        <button
          className="p-3 text-center border-l border-[#76C6E036] cursor-pointer"
          onClick={handleIncrease}
        >
          +
        </button>
      </div>
      <button
        className="text-red-500 text-2xl mx-2"
        onClick={async () => {
          await removeItem({ itemId: id });
          setRefetchTrigger(!refetchTrigger);
        }}
      >
        <MdDelete />
      </button>
      {loading && <Loading />}
    </>
  );
}
