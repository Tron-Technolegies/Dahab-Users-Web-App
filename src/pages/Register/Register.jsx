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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const { alertError, setAlertError, alertSuccess, setAlertSuccess } =
    useContext(UserContext);
  const { loading, register } = useRegister();

  async function handleRegister(e) {
    e.preventDefault();
    if (!agree) {
      setAlertError("Please agree to the terms and conditions");
      return;
    }
    register({ email, password, confirmPassword, username });
  }
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
            title={"Username"}
            type={"text"}
            value={username}
            styles={"bg-white text-black"}
            onChange={(e) => setUsername(e.target.value)}
            placeholder={"Enter Your Username"}
          />
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
            disabled={agree ? false : true}
            clickFunction={handleRegister}
          />
          {loading && <Loading />}
        </form>
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 items-start">
            <input
              type="checkbox"
              value={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <p className="text-xs text-center max-w-[500px]">
              I have read and agree to the of{" "}
              <Link to={"/terms"} className="text-[#76C6E0]">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link to={"/privacy"} className="text-[#76C6E0]">
                Privacy Policy
              </Link>{" "}
              of Dahab Miners. I understand that digital miners are not physical
              machines, and that mining returns are subject to market risks and
              operational factors.{" "}
            </p>
          </div>

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
        </div>
      </div>
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
  );
}
