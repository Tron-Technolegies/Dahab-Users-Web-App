import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "../utils/constants";
import { CalculatorContext } from "../CalculatorContext";

const useGetSats = () => {
  const [loading, setLoading] = useState(false);
  const { setThPerDay } = useContext(CalculatorContext);

  const getSats = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${base_url}/sats`, {
        withCredentials: true,
      });
      const data = response.data;
      if (data.length > 0) {
        setThPerDay(data[0].satPerDay);
      }
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
    getSats();
  }, []);

  return { loading };
};

export default useGetSats;
