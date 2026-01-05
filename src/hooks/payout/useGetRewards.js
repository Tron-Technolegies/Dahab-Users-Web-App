import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { base_url } from "../../utils/constants";

export const useGetRewards = ({ currentPage }) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["rewards", currentPage],
    queryFn: async () => {
      const { data } = await axios.get(`${base_url}/mining/revenue/user`, {
        withCredentials: true,
        params: { currentPage },
      });
      return data;
    },
  });
  return { isError, isLoading, data };
};
