import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { base_url } from "../../utils/constants";

const useVerifyAccount = () => {
  const [loading, setLoading] = useState(false);
  const { setAlertError, setAlertSuccess } = useContext(UserContext);
  const navigate = useNavigate();

  const sendOtp = async ({ email }) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/mining/auth/verify-account`,
        {
          email,
        },
        { withCredentials: true }
      );
      const data = response.data;
      setAlertSuccess("OTP successfully send to email");
      localStorage.setItem("register_email", email);
      navigate("/otp");
    } catch (error) {
      setAlertError(
        error?.response?.data?.error ||
          error?.response?.data?.message ||
          error?.response?.data?.msg ||
          error?.message ||
          "something went wrong"
      );
      console.error(
        error?.response?.data?.error ||
          error?.response?.data?.message ||
          error?.response?.data?.msg ||
          error?.message ||
          "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, sendOtp };
};

export default useVerifyAccount;
