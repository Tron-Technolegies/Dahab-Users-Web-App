import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import axios from "axios";
import { base_url } from "../../utils/constants";

const useUpdateCart = () => {
  const [loading, setLoading] = useState(false);
  const { setAlertError, setAlertSuccess } = useContext(UserContext);

  const updateCart = async ({ itemId, qty }) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${base_url}/product/updateCart`,
        {
          itemId,
          qty,
        },
        { withCredentials: true }
      );
      setAlertSuccess("Successfully updated");
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
  return { loading, updateCart };
};

export default useUpdateCart;
