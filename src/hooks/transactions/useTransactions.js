import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { base_url } from "../../utils/constants";

export const useGetWalletTransactions = ({ currentPage }) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["wallet-transactions", currentPage],
    queryFn: async () => {
      const { data } = await axios.get(
        `${base_url}/v2/user/wallet-transactions`,
        { withCredentials: true, params: { currentPage } }
      );
      return data;
    },
  });
  return { isError, isLoading, data };
};

export const useGetProfitTransactions = ({ currentPage }) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["profit-transactions", currentPage],
    queryFn: async () => {
      const { data } = await axios.get(
        `${base_url}/v2/user/profit-transactions`,
        { withCredentials: true, params: { currentPage } }
      );
      return data;
    },
  });
  return { isError, isLoading, data };
};
