import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { base_url } from "../../utils/constants";

export const useGetMinerLeaderboard = () => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["miner-leaderboard"],
    queryFn: async () => {
      const { data } = await axios.get(`${base_url}/v2/leaderboard/miners`, {
        withCredentials: true,
      });
      return data;
    },
  });
  return { isError, isLoading, data };
};

export const useGetHashrateLeaderboard = () => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["hashrate-leaderboard"],
    queryFn: async () => {
      const { data } = await axios.get(`${base_url}/v2/leaderboard/hashrate`, {
        withCredentials: true,
      });
      return data;
    },
  });
  return { isError, isLoading, data };
};

export const useGetBTCLeaderboard = () => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["btc-leaderboard"],
    queryFn: async () => {
      const { data } = await axios.get(`${base_url}/v2/leaderboard/btc`, {
        withCredentials: true,
      });
      return data;
    },
  });
  return { isError, isLoading, data };
};
