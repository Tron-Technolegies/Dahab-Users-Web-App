import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../utils/constants";

const useGetPayouts = ({ currentPage, status }) => {
  const [loading, setLoading] = useState(false);
  const [payouts, setPayouts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const getPayouts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${base_url}/mining/payout/user`, {
        withCredentials: true,
        params: {
          currentPage,
          status,
        },
      });
      const data = response.data;
      setPayouts(data.payouts);
      setTotalPages(data.totalPages);
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

  return { loading, payouts, refetch, totalPages };
};

export default useGetPayouts;
