import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const useGetCryptoPaymentIntent = ({ paymentData }) => {
  const [loading, setLoading] = useState(false);
  const [intent, setIntent] = useState(null);
  const navigate = useNavigate();

  const getCryptoIntent = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${base_url}/payment/create-crypto-intent/${paymentData?.id}`,
        { withCredentials: true }
      );
      const data = response.data;
      setIntent(data);
      if (data.status === "complete") {
        navigate("/dashboard/success");
      }
      if (data.status === "cancelled") {
        navigate("/ziina-failure");
      }
      return data.status;
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
    if (paymentData) {
      const interval = setInterval(async () => {
        const status = await getCryptoIntent();
        if (status === "complete" || status === "cancelled") {
          clearInterval(interval);
        }
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [paymentData]);

  return { loading };
};

export default useGetCryptoPaymentIntent;
