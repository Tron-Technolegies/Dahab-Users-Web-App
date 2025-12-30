import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { base_url } from "../../utils/constants";

const useResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const { setAlertError, setAlertSuccess } = useContext(UserContext);
  const navigate = useNavigate();

  const resetPassword = async ({ password }) => {
    setLoading(true);
    const email = localStorage.getItem("forgot_email");
    try {
      const response = await axios.post(
        `${base_url}/mining/auth/reset-password`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      const data = response.data;
      setAlertSuccess("Password Reset successful");
      localStorage.removeItem("forgot_email");
      navigate("/login");
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
  return { loading, resetPassword };
};

export default useResetPassword;
