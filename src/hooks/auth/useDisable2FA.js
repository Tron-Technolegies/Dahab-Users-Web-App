import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import axios from "axios";
import { base_url } from "../../utils/constants";

const useDisable2FA = () => {
  const [loading, setLoading] = useState(false);
  const { setAlertError, setAlertSuccess, setUser } = useContext(UserContext);
  const disable2FA = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/mining/auth/disable2FA`,
        {},
        { withCredentials: true }
      );
      const data = response.data;
      setAlertSuccess("Successfully disabled 2FA");
      setUser(data.user);
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
  return { loading, disable2FA };
};

export default useDisable2FA;
