import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../utils/constants";

const useGetCryptoTransactions = () => {
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);

  const getCryptoTransactions = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${base_url}/payment/crypto-transactions`,
        { withCredentials: true }
      );
      const data = response.data;
      setTransactions(data);
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
    getCryptoTransactions();
  }, []);

  const refetch = () => {
    getCryptoTransactions();
  };

  return { loading, transactions, refetch };
};

export default useGetCryptoTransactions;
