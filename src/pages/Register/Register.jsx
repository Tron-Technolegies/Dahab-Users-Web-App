import React, { useContext, useState } from "react";
import FormInput from "../../components/FormInput";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import useRegister from "../../hooks/auth/useRegister";
import AlertBox from "../../components/Alert";
import { UserContext } from "../../UserContext";
import Loading from "../../components/Loading";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { loading, register } = useRegister();
  return (
    <div className="min-h-screen flex md:flex-row flex-col justify-center items-center gap-10 lg:gap-20 p-10 ">
      <Link to={"/"}>
        <img
          src="/home/logo.png"
          className="md:w-56 w-40"
          alt="Logo of dahab"
        />
      </Link>
      <div className="bg-[#011532] p-10 rounded-lg lg:min-w-[500px] flex flex-col gap-5">
        <p className="text-2xl font-semibold">Sign Up</p>
        <p className="text-xs">
          Let’s get you all st up so you can access your personal account.
        </p>
        <form className="flex flex-col gap-3">
          <FormInput
            title={"Email"}
            type={"email"}
            value={email}
            styles={"bg-white text-black"}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={"Enter Your Email"}
          />
          <FormInput
            title={"Password"}
            type={"password"}
            value={password}
            styles={"bg-white text-black"}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={"Enter Your Password"}
          />
          <FormInput
            title={"Confirm Password"}
            type={"password"}
            value={confirmPassword}
            styles={"bg-white text-black"}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder={"Confirm Your Password"}
          />
          <Button
            name={"Sign Up"}
            styles={"bg-[#07EAD3] mt-3"}
            clickFunction={(e) => {
              e.preventDefault();
              register({ email, password, confirmPassword });
            }}
          />
          {loading && <Loading />}
        </form>
        <div className="flex flex-col gap-2">
          <p className="text-xs text-center">
            Already have an account?&nbsp;
            <Link className="text-[#07EAD3]" to={"/login"}>
              {" "}
              Login
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
