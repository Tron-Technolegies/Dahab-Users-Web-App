import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { base_url } from "../../utils/constants";
import { UserContext } from "../../UserContext";

const useGetCurrent = () => {
  const [loading, setLoading] = useState(false);
  const { user, termsOpen, setTermsOpen } = useContext(UserContext);

  const getCurrent = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${base_url}/terms/terms&privacy`, {
        withCredentials: true,
      });
      const data = response.data;
      if (user && !user.latestPrivacyVersion) {
        setTermsOpen(true);
      }
      if (user && !user.latestTermVersion) {
        setTermsOpen(true);
      }
      if (
        data.terms.version == user.latestTermVersion &&
        data.privacy.version == user.latestPrivacyVersion
      ) {
        setTermsOpen(false);
      } else {
        setTermsOpen(true);
      }
    } catch (error) {
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

  useEffect(() => {
    getCurrent();
  }, []);

  useEffect(() => {
    getCurrent();
  }, [user]);

  return { loading };
};

export default useGetCurrent;
