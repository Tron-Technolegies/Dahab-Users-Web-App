import React, { useContext, useState } from "react";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/auth/useLogin";
import Loading from "../../components/Loading";
import { UserContext } from "../../UserContext";
import AlertBox from "../../components/Alert";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();
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
        <p className="text-2xl font-semibold">Login</p>
        <p className="text-xs">Login to access your Dahab Miners account</p>
        <form className="flex flex-col gap-3">
          <FormInput
            title={"Email"}
            type={"email"}
            placeholder={"Enter Your Email"}
            value={email}
            styles={"bg-white text-black"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            title={"Password"}
            type={"password"}
            styles={"bg-white text-black"}
            placeholder={"Enter Your Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link
            className="text-xs text-right text-[#76C6E0]"
            to={"/forgot-password"}
          >
            Forgot Password?
          </Link>
          <Button
            name={"Login"}
            clickFunction={(e) => {
              e.preventDefault();
              login({ email, password });
            }}
            styles={"bg-[#07EAD3] mt-3"}
          />
          {loading && <Loading />}
          {alertError !== "" && (
            <AlertBox
              message={alertError}
              severity={"error"}
              onClose={() => setAlertError("")}
            />
          )}
        </form>
        <div className="flex flex-col gap-2">
          <p className="text-xs text-center">
            Dont have an account?&nbsp;
            <Link className="text-[#07EAD3]" to={"/register"}>
              {" "}
              Sign Up
            </Link>
          </p>
          <p className="text-xs text-center">
            Account not verified?&nbsp;
            <Link
              to={"/verify-account"}
              className="text-[#07EAD3] cursor-pointer"
            >
              {" "}
              verify
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
    </div>
  );
}
