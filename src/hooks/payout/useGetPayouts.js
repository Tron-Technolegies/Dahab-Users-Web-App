import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../utils/constants";

const useGetPayouts = () => {
  const [loading, setLoading] = useState(false);
  const [payouts, setPayouts] = useState([]);

  const getPayouts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${base_url}/payout/user`, {
        withCredentials: true,
      });
      const data = response.data;
      setPayouts(data);
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
    getPayouts();
  }, []);

  const refetch = async () => {
    await getPayouts();
  };

  return { loading, payouts, refetch };
};

export default useGetPayouts;
