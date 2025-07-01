import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { base_url } from "../../utils/constants";

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const { setAlertError, setAlertSuccess } = useContext(UserContext);
  const navigate = useNavigate();

  const register = async ({ email, password, confirmPassword }) => {
    setLoading(true);
    if (password !== confirmPassword) {
      setAlertError("Password doesnt match");
      return;
    }
    try {
      const response = await axios.post(
        `${base_url}/auth/register`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      const data = response.data;
      setAlertSuccess("Successfully Registered");
      navigate("/");
    } catch (error) {
      setAlertError(
        error?.response?.data?.error ||
          error?.response?.data?.message ||
          error?.message ||
          "something went wrong"
      );
      console.error(
        error?.response?.data?.error ||
          error?.response?.data?.message ||
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
