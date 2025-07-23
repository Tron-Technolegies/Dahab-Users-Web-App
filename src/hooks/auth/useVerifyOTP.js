import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { base_url } from "../../utils/constants";

const useVerifyOTP = () => {
  const [loading, setLoading] = useState(false);
  const { setAlertError, setAlertSuccess } = useContext(UserContext);
  const navigate = useNavigate();

  const verifyOtp = async ({ code }) => {
    setLoading(true);
    try {
      const email = localStorage.getItem("register_email");
      const response = await axios.post(
        `${base_url}/auth/verify`,
        { code, email },
        { withCredentials: true }
      );
      const data = response.data;
      setAlertSuccess("Account verified successfully");
      localStorage.removeItem("register_email");
      navigate("/dashboard");
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
  return { loading, verifyOtp };
};

export default useVerifyOTP;
