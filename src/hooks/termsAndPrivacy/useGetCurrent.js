import axios from "axios";
import React, { useContext } from "react";
import { base_url } from "../../utils/constants";
import { UserContext } from "../../UserContext";
import { useQuery } from "@tanstack/react-query";

export const useGetLatestTerms = () => {
  const { user, termsOpen, setTermsOpen } = useContext(UserContext);
  const { isPending, data } = useQuery({
    queryKey: ["latestTerms"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${base_url}/mining/terms/terms&privacy`,
        {
          withCredentials: true,
        }
      );
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
      return data;
    },
    onError: (error) => {
      console.error(
        error?.response?.data?.error ||
          error?.response?.data?.message ||
          error?.response?.data?.msg ||
          error?.message ||
          "something went wrong"
      );
    },
  });
  return { data, isPending };
};
