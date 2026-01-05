import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { base_url } from "../../utils/constants";

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const { setAlertError, setAlertSuccess } = useContext(UserContext);
  const navigate = useNavigate();

  const register = async ({
    email,
    password,
    confirmPassword,
    username,
    referral,
  }) => {
    setLoading(true);
    if (password !== confirmPassword) {
      setAlertError("Password doesnt match");
      return;
    }
    try {
      const response = await axios.post(
        `${base_url}/mining/auth/register`,
        {
          email,
          password,
          username,
          referral,
        },
        { withCredentials: true }
      );
      const data = response.data;
      setAlertSuccess("Successfully Registered");
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
  return { loading, register };
};

export default useRegister;
