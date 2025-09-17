import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { base_url } from "../../utils/constants";
import { UserContext } from "../../UserContext";

const useGetCurrent = () => {
  const [loading, setLoading] = useState(false);
  const [terms, setTerms] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const { user } = useContext(UserContext);

  const getCurrent = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${base_url}/terms/terms&privacy`, {
        withCredentials: true,
      });
      const data = response.data;
      if (
        user &&
        user.latestTermVersion &&
        data.terms.version == user.latestTermVersion
      ) {
        setTerms(false);
      } else {
        setTerms(true);
      }
      if (
        user &&
        user.latestPrivacyVersion &&
        data.privacy.version == user.latestPrivacyVersion
      ) {
        setPrivacy(false);
      } else {
        setPrivacy(true);
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

  return { loading, privacy, terms };
};

export default useGetCurrent;
