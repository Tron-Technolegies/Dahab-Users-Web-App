import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../utils/constants";

const useGetAllNotifications = () => {
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const getNotifications = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${base_url}/notifications/user`, {
        withCredentials: true,
      });
      const data = response.data;
      setNotifications(data.notifications);
    } catch (error) {
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

  useEffect(() => {
    getNotifications();
  }, []);

  return { loading, notifications };
};

export default useGetAllNotifications;
