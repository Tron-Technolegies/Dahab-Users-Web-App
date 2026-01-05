import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../utils/constants";

const useGetTerms = () => {
  const [loading, setLoading] = useState(false);
  const [terms, setTerms] = useState(null);
  const getTerms = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${base_url}/mining/terms/latest`, {
        withCredentials: true,
      });
      const data = response.data;
      setTerms(data);
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
    getTerms();
  }, []);

  return { loading, terms };
};

export default useGetTerms;
