import axios from "axios";
import React, { useContext, useState } from "react";
import { base_url } from "../../utils/constants";
import { UserContext } from "../../UserContext";

const useCreatePaymentIntent = () => {
  const [loading, setLoading] = useState(false);
  const { setAlertError } = useContext(UserContext);

  const createPaymentIntent = async ({ amount, message, items }) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/payment/create-intent`,
        {
          amount,
          message,
          items,
        },
        { withCredentials: true }
      );
      const data = response.data;
      window.location.href = data.redirect_url;
    } catch (error) {
      setAlertError(
        error?.response?.data?.error ||
          error?.response?.data?.message ||
          error?.response?.data?.msg ||
          error?.message ||
          "something went wrong"
      );
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, createPaymentIntent };
};

export default useCreatePaymentIntent;
