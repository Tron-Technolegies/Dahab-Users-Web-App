import axios from "axios";
import React, { useContext, useState } from "react";
import { base_url } from "../../utils/constants";
import { UserContext } from "../../UserContext";

const useAgreeTerms = () => {
  const [loading, setLoading] = useState(false);
  const { setAlertError, setAlertSuccess } = useContext(UserContext);
  const agreeTerms = async () => {
    setLoading(true);
    try {
      const response = await axios.patch(
        `${base_url}/mining/terms/agree`,
        {},
        { withCredentials: true }
      );
      const data = response.data;
      setAlertSuccess("Success");
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

  return { loading, agreeTerms };
};

export default useAgreeTerms;
