import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import axios from "axios";
import { base_url } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const usePurchase = () => {
  const [loading, setLoading] = useState(false);
  const { setAlertError, setAlertSuccess, user } = useContext(UserContext);
  const navigate = useNavigate();

  const purchase = async () => {
    setLoading(true);
    localStorage.setItem("cart_items", JSON.stringify(user.cartItems));
    try {
      const response = await axios.post(
        `${base_url}/mining/product/purchase`,
        {},
        { withCredentials: true }
      );
      const data = response.data;
      setAlertSuccess("successfully purchased");
      navigate("/dashboard/success");
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
  return { loading, purchase };
};

export default usePurchase;
