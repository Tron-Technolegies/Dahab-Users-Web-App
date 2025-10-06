import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../utils/constants";

const useGetCryptoTransactions = ({ currentPage }) => {
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const getCryptoTransactions = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${base_url}/payment/crypto-transactions`,
        { withCredentials: true, params: { currentPage } }
      );
      const data = response.data;
      setTransactions(data.payments);
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
    getCryptoTransactions();
  }, []);

  const refetch = () => {
    getCryptoTransactions();
  };

  return { loading, transactions, refetch, totalPages };
};

export default useGetCryptoTransactions;
