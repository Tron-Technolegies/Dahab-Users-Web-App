import axios from "axios";

import { base_url } from "../../utils/constants";
import { useQuery } from "@tanstack/react-query";

export const useGetMiners = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["miners"],
    queryFn: async () => {
      const { data } = await axios.get(`${base_url}/mining/product/miners`, {
        withCredentials: true,
      });
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
