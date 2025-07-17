import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import axios from "axios";
import { base_url } from "../../utils/constants";

const useRemoveItem = () => {
  const [loading, setLoading] = useState(false);
  const { setAlertError, setAlertSuccess } = useContext(UserContext);

  const removeItem = async ({ itemId }) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/product/removeItem`,
        { itemId },
        { withCredentials: true }
      );
      const data = response.data;
      setAlertSuccess("Item removed from cart");
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
  return { loading, removeItem };
};

export default useRemoveItem;
