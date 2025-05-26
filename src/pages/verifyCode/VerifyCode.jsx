import React, { useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";

export default function VerifyCode() {
  const [code, setCode] = useState("");
  return (
    <div className="min-h-screen flex md:flex-row flex-col justify-center items-center gap-10 lg:gap-20 p-10">
      <div>
        <img
          src="/home/logo.png"
          className="md:w-56 w-40"
          alt="Logo of dahab"
        />
      </div>
      <div className="bg-[#011532] p-10 rounded-lg lg:min-w-[500px] flex flex-col gap-5">
        <Link to={"/login"} className="text-xs flex gap-1 items-center">
          <span>
            <IoChevronBackOutline />
          </span>{" "}
          Back to Login
        </Link>
        <p className="text-2xl font-semibold">Please check your email</p>
        <p className="text-xs">
          An authentication code has been sent to your email.
        </p>
        <form className="flex flex-col gap-3">
          <FormInput
            title={"Code"}
            type={"number"}
            placeholder={"Enter Verification Code"}
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <Button name={"Verify"} styles={"bg-[#07EAD3] mt-3"} />
        </form>
        <p className="text-xs text-center">
          Code not recieved?{" "}
          <span className="cursor-pointer text-[#76C6E0]">Resend</span>
        </p>
      </div>
    </div>
  );
}
