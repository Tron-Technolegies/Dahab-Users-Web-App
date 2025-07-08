import React, { useState } from "react";
import FormInput from "../../components/FormInput";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { IoChevronBackOutline } from "react-icons/io5";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  return (
    <div className="min-h-screen flex md:flex-row flex-col justify-center items-center gap-10 lg:gap-20 p-10">
      <Link to={"/"}>
        <img
          src="/home/logo.png"
          className="md:w-56 w-40"
          alt="Logo of dahab"
        />
      </Link>
      <div className="bg-[#011532] p-10 rounded-lg lg:min-w-[500px] flex flex-col gap-5">
        <Link to={"/login"} className="text-xs flex gap-1 items-center">
          <span>
            <IoChevronBackOutline />
          </span>{" "}
          Back to Login
        </Link>
        <p className="text-2xl font-semibold">Forgot your password?</p>
        <p className="text-xs">
          Don’t worry, happens to all of us. Enter your email below to recover
          your password
        </p>
        <form className="flex flex-col gap-3">
          <FormInput
            title={"Email"}
            type={"email"}
            placeholder={"Enter Your Email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            styles={"bg-white text-black"}
          />
          <Button name={"Submit"} styles={"bg-[#07EAD3] mt-3"} />
        </form>
      </div>
    </div>
  );
}
