import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../utils/constants";
import { UserContext } from "../../UserContext";

const useLogout = () => {
  const [loading, setLoading] = useState(false);

  const { setAlertError, setAlertSuccess, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const logout = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/auth/logout`,
        {},
        { withCredentials: true }
      );
      const data = response.data;
      setAlertSuccess("successfully logged out");
      setUser(null);
      navigate("/login");
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
  return { loading, logout };
};

export default useLogout;
