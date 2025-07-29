import axios from "axios";
import React, { useContext, useState } from "react";
import { base_url } from "../../utils/constants";
import { UserContext } from "../../UserContext";

const useGetTwoFAQR = () => {
  const [loading, setLoading] = useState(false);
  const [qr, setQr] = useState("");
  const { setAlertError, setAlertSuccess } = useContext(UserContext);

  const getQR = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${base_url}/auth/send2FAQR`, {
        withCredentials: true,
      });
      const data = response.data;
      setQr(data);
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
  return { loading, getQR, qr };
};

export default useGetTwoFAQR;
