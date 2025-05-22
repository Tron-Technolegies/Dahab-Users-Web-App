import React from "react";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

export default function LoginPage() {
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
        <p className="text-2xl font-semibold">Login</p>
        <p className="text-xs">Login to access your Dahab Miners account</p>
        <form className="flex flex-col gap-3">
          <FormInput
            title={"Email"}
            type={"email"}
            placeholder={"Enter Your Email"}
          />
          <FormInput
            title={"Password"}
            type={"password"}
            placeholder={"Enter Your Password"}
          />
          <Link
            className="text-xs text-right text-[#76C6E0]"
            to={"/forgot-password"}
          >
            Forgot Password?
          </Link>
          <Button name={"Login"} styles={"bg-[#07EAD3] mt-3"} />
        </form>
        <p className="text-xs text-center">
          Dont have an account?&nbsp;
          <Link className="text-[#07EAD3]" to={"/register"}>
            {" "}
            Sign Up
          </Link>
        </p>
        <p className="text-xs text-center">
          By signing up, you agree to our{" "}
          <Link to={"/privacy-policy"} className="text-[#76C6E0]">
            privacy policy
          </Link>{" "}
          and{" "}
          <Link to={"/terms"} className="text-[#76C6E0]">
            terms of use
          </Link>
        </p>
      </div>
    </div>
  );
}
