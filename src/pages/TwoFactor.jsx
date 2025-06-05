import React from "react";
import FormInput from "../components/FormInput";

export default function TwoFactor() {
  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 flex flex-col gap-5">
      <p className="text-2xl text-[#76C6E0]">2 Factor Authentication</p>
      <div className="flex lg:flex-row flex-col gap-5 lg:justify-around lg:gap-20 item-center my-10">
        <div className="flex flex-col items-center gap-3">
          <p>Scan the QR code of the device</p>
          <img src="/QRCODE.png" className="w-32" />
          <p className="text-xs">The QR code will be automatically detected</p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <FormInput
            styles={"bg-[#07EAD31A]"}
            type={"number"}
            placeholder={"Enter Code"}
          />
          <button className="px-6 py-2 rounded-md bg-[#07EAD3] text-black w-fit">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
