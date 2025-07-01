import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import axios from "axios";
import { base_url } from "../../utils/constants";

const usePurchase = () => {
  const [loading, setLoading] = useState(true);
  const { setAlertError, setAlertSuccess } = useContext(UserContext);

  const purchase = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/auth/purchase`,
        {},
        { withCredentials: true }
      );
      const data = response.data;
      setAlertSuccess("successfully purchased");
    } catch (error) {
      setAlertError(
        error?.response?.data?.error ||
          error?.response?.data?.message ||
          error?.message ||
          "something went wrong"
      );
      console.error(
        error?.response?.data?.error ||
          error?.response?.data?.message ||
          error?.message ||
          "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, purchase };
};

export default usePurchase;
