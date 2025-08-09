import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { base_url } from "../../utils/constants";

const useSetPayoutMode = () => {
  const [loading, setLoading] = useState(false);
  const { setAlertError, setAlertSuccess, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const selectPayout = async ({ mode }) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/product/payoutMode`,
        {
          mode,
        },
        { withCredentials: true }
      );
      const data = response.data;
      setAlertSuccess("Payout Mode Selected");
      localStorage.removeItem("cart_items");
      setUser(data.user);
      navigate("/dashboard");
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
  return { loading, selectPayout };
};

export default useSetPayoutMode;
