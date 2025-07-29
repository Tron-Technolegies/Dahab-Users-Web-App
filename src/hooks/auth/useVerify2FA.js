import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import axios from "axios";
import { base_url } from "../../utils/constants";

const useVerify2FA = () => {
  const [loading, setLoading] = useState(false);
  const { setAlertSuccess, setAlertError, setUser } = useContext(UserContext);

  const verify2FA = async ({ code }) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/auth/verify2FA`,
        { code },
        { withCredentials: true }
      );
      const data = response.data;
      setAlertSuccess("Successfully verified");
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
  return { loading, verify2FA };
};

export default useVerify2FA;
