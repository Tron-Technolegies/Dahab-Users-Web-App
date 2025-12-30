import axios from "axios";
import React, { useContext, useState } from "react";
import { base_url } from "../../utils/constants";
import { UserContext } from "../../UserContext";

const useClearNotifications = () => {
  const [loading, setLoading] = useState(false);
  const { setAlertError } = useContext(UserContext);

  const clearNotification = async () => {
    setLoading(true);
    try {
      const response = await axios.delete(`${base_url}/mining/notifications`, {
        withCredentials: true,
      });
      const data = response.data;
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

  return { loading, clearNotification };
};

export default useClearNotifications;
