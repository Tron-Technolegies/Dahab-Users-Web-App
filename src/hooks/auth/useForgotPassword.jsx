import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { base_url } from "../../utils/constants";

const useForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const { setAlertError, setAlertSuccess } = useContext(UserContext);
  const navigate = useNavigate();

  const forgotPassword = async ({ email }) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/auth/forgot-password`,
        { email },
        { withCredentials: true }
      );
      const data = response.data;
      setAlertSuccess("OTP successfully sent");
      localStorage.setItem("forgot_email", email);
      navigate("/verify");
    } catch (error) {}
  };
};

export default useForgotPassword;
