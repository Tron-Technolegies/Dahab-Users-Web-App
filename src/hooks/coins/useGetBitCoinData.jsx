import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { CalculatorContext } from "../../CalculatorContext";
import { useQuery } from "@tanstack/react-query";
import { base_url } from "../../utils/constants";

const useGetBitCoinData = () => {
  const [loading, setLoading] = useState(false);
  const [btcData, setBtcData] = useState([]);
  const { setBtcPrice } = useContext(CalculatorContext);

  const getBTCData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://api.minerstat.com/v2/coins?list=BTC,"
      );
      const data = res.data;
      setBtcData(data);
      setBtcPrice(data[0].price.toFixed(2));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getBTCData();
  }, []);

  return { loading, btcData };
};

export default useGetBitCoinData;

export const useGetBTCData = () => {
  const { setBtcPrice } = useContext(CalculatorContext);
  const { data, isPending } = useQuery({
    queryKey: ["BTCData"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.dahabminers.com/api/extra/btc`
      );
      setBtcPrice(data.price.toFixed(2));
      return data;
    },
  });
  return { data, isPending };
};
