import React, { useContext, useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import useVerifyAccount from "../../hooks/auth/useVerifyAccount";
import Loading from "../../components/Loading";
import { UserContext } from "../../UserContext";
import AlertBox from "../../components/Alert";

export default function EmailPrompt() {
  const [email, setEmail] = useState("");
  const { loading, sendOtp } = useVerifyAccount();
  const { alertError, setAlertError } = useContext(UserContext);
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
        <p className="text-2xl font-semibold">Verify Your Account</p>
        <p className="text-xs">
          Enter your registered email below to verify your account
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
          <Button
            name={"Submit"}
            styles={"bg-[#07EAD3] mt-3"}
            clickFunction={(e) => {
              e.preventDefault();
              sendOtp({ email });
            }}
          />
          {alertError && (
            <AlertBox
              message={alertError}
              severity={"error"}
              onClose={() => setAlertError("")}
            />
          )}

          {loading && <Loading />}
        </form>
      </div>
    </div>
  );
}
