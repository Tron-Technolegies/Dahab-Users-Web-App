import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { base_url } from "../../utils/constants";

export const useGetUserInfo = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["user-info"],
    queryFn: async () => {
      const { data } = await axios.get(`${base_url}/v2/user/info`, {
        withCredentials: true,
      });
      return data;
    },
  });
  return { isError, isLoading, data };
};
