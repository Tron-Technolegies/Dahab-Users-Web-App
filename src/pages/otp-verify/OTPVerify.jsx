import React, { useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import FormInput from "../../components/FormInput";
import Button from "../../components/Button";

export default function OTPVerify() {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return; // Only allow digits

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input if value is not empty and is a digit
    if (value && index < 3) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };
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
        <p className="text-2xl font-semibold">OTP Verification</p>
        <p className="text-xs">We sent your code to your email</p>
        <form className="flex flex-col gap-3">
          <div className="flex justify-center items-center gap-5">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleBackspace(e, index)}
                className="border border-[#76C6E0] outline-0 text-center rounded-lg p-3 w-[50px]"
              />
            ))}
          </div>
          <Button name={"Verify"} styles={"bg-[#07EAD3] mt-3"} />
        </form>
        <p className="text-xs text-center cursor-pointer">Resend OTP</p>
      </div>
    </div>
  );
}
