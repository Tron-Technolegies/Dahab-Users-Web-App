import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../utils/constants";
import { UserContext } from "../../UserContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAlertError, setAlertSuccess } = useContext(UserContext);
  const navigate = useNavigate();

  const login = async ({ email, password }) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/auth/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      const data = response.data;
      if (data.msg === "successfully logged in. Enter 2FA") {
        localStorage.setItem("login_email", email);
        navigate("/verify2FA");
      } else {
        navigate("/dashboard");
        setAlertSuccess("Successfully Logged in");
      }
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
  return { loading, login };
};

export default useLogin;
