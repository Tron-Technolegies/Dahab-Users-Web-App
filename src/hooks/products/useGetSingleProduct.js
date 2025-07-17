import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../utils/constants";

const useGetSingleProduct = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [miner, setMiner] = useState(null);

  const getMiner = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${base_url}/product/miners/${id}`, {
        withCredentials: true,
      });
      const data = response.data;
      setMiner(data);
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
    getMiner();
  }, []);

  return { loading, miner };
};

export default useGetSingleProduct;
