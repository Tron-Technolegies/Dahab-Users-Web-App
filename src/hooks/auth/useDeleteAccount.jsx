import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { base_url } from "../../utils/constants";

const useDeleteAccount = () => {
  const [loading, setLoading] = useState(false);
  const { setAlertSuccess, setAlertError } = useContext(UserContext);
  const navigate = useNavigate();

  const deleteAccount = async () => {
    setLoading(true);
    try {
      const response = await axios.delete(
        `${base_url}/mining/auth/delete-account`,
        {
          withCredentials: true,
        }
      );
      const data = response.data;
      setAlertSuccess("successfully deleted Account");
      navigate("/login");
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

  return { loading, deleteAccount };
};

export default useDeleteAccount;
