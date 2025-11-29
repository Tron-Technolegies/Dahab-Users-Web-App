import React from "react";

export default function VoucherCard({
  name,
  code,
  description,
  discount,
  validity,
  applicable,
  minimum,
  setVoucher,
  id,
  voucher,
}) {
  return (
    <div className="bg-[#011532] p-5 rounded-md w-full flex flex-col gap-3">
      <p className="text-blue-500 font-bold text-lg">{name}</p>
      <p className="text-xl font-semibold">{discount} % OFF</p>
      <p className="text-sm">{description}</p>
      <p className="font-semibold text-sm">
        Code - <span className="text-base italic">{code}</span>
      </p>
      <div className="flex text-sm flex-col item-center">
        <p>
          - <span className="font-semibold">Valid till:</span>{" "}
          {validity.toString().slice(0, 10)}
        </p>
        <p>
          - <span className="font-semibold">Applicable for:</span> {applicable}
        </p>
        <p>
          - <span className="font-semibold">Min-spent:</span> {minimum}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => {
            setVoucher({
              id,
              code,
              discount,
              minimum,
              applicable,
              validity,
            });
          }}
          className="text-blue-500 text-sm w-fit cursor-pointer"
        >
          {voucher?.id === id ? "Applied" : `Apply Voucher =>`}
        </button>
        {voucher?.id === id && (
          <button
            onClick={() => setVoucher(null)}
            className="text-red-500 text-sm w-fit cursor-pointer"
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
}
