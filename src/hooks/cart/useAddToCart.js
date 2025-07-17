import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import axios from "axios";
import { base_url } from "../../utils/constants";

const useAddToCart = () => {
  const [loading, setLoading] = useState(false);
  const { setAlertError, setAlertSuccess } = useContext(UserContext);

  const addToCart = async ({ itemId }) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/product/addToCart`,
        {
          itemId,
        },
        { withCredentials: true }
      );
      const data = response.data;
      setAlertSuccess("Item added to cart");
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
  return { loading, addToCart };
};

export default useAddToCart;
