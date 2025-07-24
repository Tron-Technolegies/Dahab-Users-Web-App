import React, { useContext, useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import { UserContext } from "../../UserContext";
import AlertBox from "../../components/Alert";
import useVerifyPasswordReset from "../../hooks/auth/useVerifyPasswordReset";
import Loading from "../../components/Loading";
import useForgotPassword from "../../hooks/auth/useForgotPassword";

export default function VerifyCode() {
  const [code, setCode] = useState("");
  const { alertError, setAlertError, alertSuccess, setAlertSuccess } =
    useContext(UserContext);
  const { loading, verify } = useVerifyPasswordReset();
  const { loading: resendLoading, forgotPassword } = useForgotPassword();
  const email = localStorage.getItem("forgot_email");
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
        <p className="text-2xl font-semibold">Please check your email</p>
        <p className="text-xs">
          An authentication code has been sent to your email.
        </p>
        <form className="flex flex-col gap-3">
          <FormInput
            title={"Code"}
            type={"number"}
            placeholder={"Enter Verification Code"}
            styles={"bg-white text-black"}
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <Button
            name={"Verify"}
            styles={"bg-[#07EAD3] mt-3"}
            clickFunction={(e) => {
              e.preventDefault();
              verify({ code });
            }}
          />
        </form>
        {loading && <Loading />}
        {alertError && (
          <AlertBox
            message={alertError}
            severity={"error"}
            onClose={() => setAlertError("")}
          />
        )}
        {alertSuccess && (
          <AlertBox
            message={alertSuccess}
            severity={"success"}
            onClose={() => setAlertSuccess("")}
          />
        )}
        <p className="text-xs text-center">
          Code not recieved?{" "}
          <button
            className="cursor-pointer text-[#76C6E0]"
            disabled={resendLoading}
            onClick={() => {
              forgotPassword({ email });
            }}
          >
            Resend
          </button>
        </p>
        {resendLoading && <Loading />}
      </div>
    </div>
  );
}
