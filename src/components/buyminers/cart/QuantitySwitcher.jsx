import Loading from "../../Loading";
import { MdDelete } from "react-icons/md";

import { useRemoveItem, useUpdateCart } from "../../../hooks/cart/useCart";

export default function QuantitySwitcher({ qty, id }) {
  const { updateCart, isPending } = useUpdateCart();
  const { isPending: removeLoading, removeItem } = useRemoveItem();
  async function handleDecrease() {
    if (qty === 1) return;
    updateCart({ cartId: id, qty: qty - 1 });
  }
  async function handleIncrease() {
    updateCart({ cartId: id, qty: qty + 1 });
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
          removeItem({ id });
        }}
      >
        <MdDelete />
      </button>
      {isPending && <Loading />}
      {removeLoading && <Loading />}
    </>
  );
}
