import axios from "axios";
import React, { useContext, useState } from "react";

import { base_url } from "../../utils/constants";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";

const useEmptyCart = () => {
  const [loading, setLoading] = useState(false);
  const { setAlertSuccess } = useContext(UserContext);

  const emptyCart = async () => {
    setLoading(true);
    try {
      const response = await axios.patch(
        `${base_url}/product/empty-cart`,
        {},
        { withCredentials: true }
      );
      const data = response.data;
      setAlertSuccess(
        "Purchase Completed. Once the transaction is confirmed the miners will be added to your List"
      );
    } catch (error) {
      console.error(
        error?.response?.data?.error ||
          error?.response?.data?.message ||
          error?.response?.data?.msg ||
          error?.message ||
          "something went wrong"
      );
    }
  };

  return { loading, emptyCart };
};

export default useEmptyCart;
