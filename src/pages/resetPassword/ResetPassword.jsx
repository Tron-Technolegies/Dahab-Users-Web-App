import React, { useContext, useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import { UserContext } from "../../UserContext";
import AlertBox from "../../components/Alert";
import useResetPassword from "../../hooks/auth/useResetPassword";
import Loading from "../../components/Loading";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { alertError, setAlertError, alertSuccess, setAlertSuccess } =
    useContext(UserContext);
  const { loading, resetPassword } = useResetPassword();

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
        <p className="text-2xl font-semibold">Set a password</p>
        <p className="text-xs">
          Your previous password has been reseted. Please set a new password for
          your account.
        </p>
        <form className="flex flex-col gap-3">
          <FormInput
            title={"New Password"}
            type={"password"}
            placeholder={"Enter New Password"}
            styles={"bg-white text-black"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormInput
            title={"Re-Enter New Password"}
            type={"password"}
            placeholder={"Re-Enter New Password"}
            styles={"bg-white text-black"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            name={"Set Password"}
            styles={"bg-[#07EAD3] mt-3"}
            clickFunction={(e) => {
              e.preventDefault();
              if (password !== confirmPassword) {
                setAlertError("Password Not Matched");
                return;
              }
              resetPassword({ password });
            }}
          />
          {loading && <Loading />}
        </form>
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
      </div>
    </div>
  );
}
