import React from "react";

export default function PaymentFailure() {
  return (
    <div className="flex flex-col justify-center items-center gap-5 my-20">
      <img src="/home/inactive.png" className="w-12" />
      <p className="text-4xl font-semibold">Transaction Failed !</p>
      <button
        className="bg-blue-500 px-4 py-2 rounded-md"
        onClick={() => (window.location.href = "/dashboard")}
      >
        Continue
      </button>
    </div>
  );
}
