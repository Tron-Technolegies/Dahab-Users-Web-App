import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { base_url } from "../../utils/constants";

export const useGetAllVouchers = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["vouchers"],
    queryFn: async () => {
      const { data } = await axios.get(`${base_url}/voucher/user`, {
        withCredentials: true,
      });
      return data;
    },
    enabled: false,
    retry: false,
    refetchOnWindowFocus: false,
    onError: (err) => {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    },
  });
  return { isLoading, data, error, refetch };
};
