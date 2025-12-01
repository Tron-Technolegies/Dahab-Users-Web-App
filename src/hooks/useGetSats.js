import React, { useContext } from "react";
import axios from "axios";
import { base_url } from "../utils/constants";
import { CalculatorContext } from "../CalculatorContext";
import { useQuery } from "@tanstack/react-query";

export const useGetSats = () => {
  const { setThPerDay } = useContext(CalculatorContext);
  const { isPending, data } = useQuery({
    queryKey: ["sats"],
    queryFn: async () => {
      const { data } = await axios.get(`${base_url}/sats`, {
        withCredentials: true,
      });
      if (data.length > 0) {
        setThPerDay(data[0].satPerDay);
      }
      return data;
    },

    onError: (error) => {
      console.error(
        error?.response?.data?.error ||
          error?.response?.data?.message ||
          error?.response?.data?.msg ||
          error?.message ||
          "something went wrong"
      );
    },
  });
  return { data, isPending };
};
