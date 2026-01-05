import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { base_url } from "../../utils/constants";

const useVerifyPasswordReset = () => {
  const [loading, setLoading] = useState(false);
  const { setAlertError, setAlertSuccess } = useContext(UserContext);
  const navigate = useNavigate();

  const verify = async ({ code }) => {
    const email = localStorage.getItem("forgot_email");
    setLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/mining/auth/verify-passwordReset`,
        { email, code },
        { withCredentials: true }
      );
      const data = response.data;
      setAlertSuccess("Verified Success");
      navigate("/reset-password");
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
  return { loading, verify };
};

export default useVerifyPasswordReset;
