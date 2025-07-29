import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { base_url } from "../../utils/constants";

const useVerifyLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAlertError, setAlertSuccess } = useContext(UserContext);
  const navigate = useNavigate();

  const verifyLogin = async ({ code }) => {
    setLoading(true);
    const email = localStorage.getItem("login_email");
    try {
      const response = await axios.post(
        `${base_url}/auth/login2FA`,
        {
          email,
          code,
        },
        { withCredentials: true }
      );
      const data = response.data;
      setAlertSuccess("Successfully verified");
      localStorage.removeItem("login_email");
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
  return { loading, verifyLogin };
};

export default useVerifyLogin;
