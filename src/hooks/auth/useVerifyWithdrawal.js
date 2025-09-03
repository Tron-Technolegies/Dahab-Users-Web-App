import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import axios from "axios";
import { base_url } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const useVerifyWithdrawal = () => {
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState(null);
  const { setAlertError, setAlertSuccess } = useContext(UserContext);
  const navigate = useNavigate();

  const verifyWithdrawal = async ({ code }) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/auth/withdrawVerify`,
        {
          code,
        },
        { withCredentials: true }
      );
      const data = response.data;
      if (data.msg !== "successfully verified") {
        throw new Error("OTP verification failed");
      }
      // setAlertSuccess("Transfer Successfully Processed");
      // navigate("/dashboard/payouts");
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
      throw error;
    } finally {
      setLoading(false);
    }
  };
  return { loading, verifyWithdrawal, res };
};

export default useVerifyWithdrawal;
