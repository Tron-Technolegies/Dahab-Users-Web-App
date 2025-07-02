import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../utils/constants";

const useGetAllProducts = () => {
  const [loading, setLoading] = useState(false);
  const [miners, setMiners] = useState([]);

  const getMiners = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${base_url}/auth/miners`, {
        withCredentials: true,
      });
      const data = response.data;
      setMiners(data);
    } catch (error) {
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

  useEffect(() => {
    getMiners();
  }, []);

  return { loading, miners };
};

export default useGetAllProducts;
