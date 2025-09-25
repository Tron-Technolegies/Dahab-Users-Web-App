import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import axios from "axios";
import { base_url } from "../../utils/constants";

const useCreateCryptoPaymentIntent = () => {
  const [loading, setLoading] = useState(false);
  const { setAlertError } = useContext(UserContext);
  const [paymentData, setPaymentData] = useState(null);

  const createCrptoPayment = async ({ amount, message, items }) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/payment/create-crypto-intent`,
        { amount: Number(amount.toFixed(2)), message, items },
        { withCredentials: true }
      );
      const data = response.data;
      setPaymentData(data);
    } catch (error) {
      setAlertError(
        error?.response?.data?.error ||
          error?.response?.data?.message ||
          error?.response?.data?.msg ||
          error?.message ||
          "something went wrong"
      );
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
  return { loading, createCrptoPayment, paymentData };
};

export default useCreateCryptoPaymentIntent;
