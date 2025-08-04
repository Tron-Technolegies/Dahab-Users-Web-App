import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import axios from "axios";
import { base_url } from "../../utils/constants";

const useUpdateProfile = () => {
  const [loading, setLoading] = useState(false);
  const { refetchTrigger, setRefetchTrigger, setAlertError, setAlertSuccess } =
    useContext(UserContext);

  const updateProfile = async ({ email, username }) => {
    setLoading(true);
    try {
      const response = await axios.patch(
        `${base_url}/auth/update-profile`,
        {
          email,
          username,
        },
        { withCredentials: true }
      );
      const data = response.data;
      setAlertSuccess("Profile updated successfully");
      setTimeout(() => {
        setRefetchTrigger(!refetchTrigger);
      }, [1500]);
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
  return { loading, updateProfile };
};

export default useUpdateProfile;
