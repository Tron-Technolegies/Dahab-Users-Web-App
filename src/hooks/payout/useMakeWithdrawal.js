import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { base_url } from "../../utils/constants";

const useMakeWithdrawal = () => {
  const [loading, setLoading] = useState(false);
  const { setAlertError, setAlertSuccess, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const makeWithdrawal = async ({ amount, address }) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/payout`,
        { amount, address },
        { withCredentials: true }
      );
      const data = response.data;
      setAlertSuccess("Withdrawal Successfully Processed");
      setUser(data.user);
      navigate("/dashboard/payouts");
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
  return { loading, makeWithdrawal };
};

export default useMakeWithdrawal;
