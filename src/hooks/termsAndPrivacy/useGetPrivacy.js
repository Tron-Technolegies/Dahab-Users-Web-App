import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../utils/constants";

const useGetPrivacy = () => {
  const [loading, setLoading] = useState(false);
  const [policy, setPolicy] = useState(null);

  const getPolicy = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${base_url}/terms/privacy/latest`, {
        withCredentials: true,
      });
      const data = response.data;
      setPolicy(data);
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
    getPolicy();
  }, []);

  return { loading, policy };
};

export default useGetPrivacy;
