import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { base_url } from "../../utils/constants";

export const useGetAllVouchers = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["vouchers"],
    queryFn: async () => {
      const { data } = await axios.get(`${base_url}/mining/voucher/user`, {
        withCredentials: true,
      });
      return data;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
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
  return { isLoading, data, error, refetch };
};
