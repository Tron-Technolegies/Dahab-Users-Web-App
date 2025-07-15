import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { CalculatorContext } from "../../CalculatorContext";

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
