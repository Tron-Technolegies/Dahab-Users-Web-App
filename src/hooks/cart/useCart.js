import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { base_url } from "../../utils/constants";
import { useContext } from "react";
import { UserContext } from "../../UserContext";

export const useGetCartItems = () => {
  const { isError, isLoading, data } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const { data } = await axios.get(`${base_url}/v2/cart`, {
        withCredentials: true,
      });
      return data;
    },
  });
  return { isError, isLoading, data };
};

export const useAddToCart = () => {
  const queryClient = useQueryClient();
  const { setAlertSuccess, setAlertError } = useContext(UserContext);
  const { isPending, mutate: addToCart } = useMutation({
    mutationFn: async ({ productId }) => {
      await axios.post(
        `${base_url}/v2/cart`,
        { productId },
        { withCredentials: true }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      queryClient.invalidateQueries({ queryKey: ["user-info"] });
      setAlertSuccess("Successfully added");
    },
    onError: (error) => {
      setAlertError(
        error?.response?.data?.error ||
          error?.response?.data?.message ||
          error?.message ||
          "something went wrong"
      );
      console.error(
        error?.response?.data?.error ||
          error?.response?.data?.message ||
          error?.message ||
          "something went wrong"
      );
    },
  });
  return { isPending, addToCart };
};

export const useUpdateCart = () => {
  const queryClient = useQueryClient();
  const { setAlertSuccess, setAlertError } = useContext(UserContext);
  const { isPending, mutate: updateCart } = useMutation({
    mutationFn: async ({ cartId, qty }) => {
      await axios.patch(
        `${base_url}/v2/cart`,
        { cartId, qty },
        { withCredentials: true }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      queryClient.invalidateQueries({ queryKey: ["user-info"] });
    },
    onError: (error) => {
      setAlertError(
        error?.response?.data?.error ||
          error?.response?.data?.message ||
          error?.message ||
          "something went wrong"
      );
      console.error(
        error?.response?.data?.error ||
          error?.response?.data?.message ||
          error?.message ||
          "something went wrong"
      );
    },
  });
  return { isPending, updateCart };
};

export const useRemoveItem = () => {
  const queryClient = useQueryClient();
  const { setAlertSuccess, setAlertError } = useContext(UserContext);
  const { isPending, mutate: removeItem } = useMutation({
    mutationFn: async ({ id }) => {
      await axios.delete(`${base_url}/v2/cart/${id}`, {
        withCredentials: true,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      queryClient.invalidateQueries({ queryKey: ["user-info"] });
    },
    onError: (error) => {
      setAlertError(
        error?.response?.data?.error ||
          error?.response?.data?.message ||
          error?.message ||
          "something went wrong"
      );
      console.error(
        error?.response?.data?.error ||
          error?.response?.data?.message ||
          error?.message ||
          "something went wrong"
      );
    },
  });
  return { isPending, removeItem };
};

export const useClearCart = () => {
  const queryClient = useQueryClient();
  const { setAlertSuccess, setAlertError } = useContext(UserContext);
  const { isPending, mutate: clearCart } = useMutation({
    mutationFn: async () => {
      await axios.delete(`${base_url}/v2/cart`, { withCredentials: true });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      queryClient.invalidateQueries({ queryKey: ["user-info"] });
    },
    onError: (error) => {
      setAlertError(
        error?.response?.data?.error ||
          error?.response?.data?.message ||
          error?.message ||
          "something went wrong"
      );
      console.error(
        error?.response?.data?.error ||
          error?.response?.data?.message ||
          error?.message ||
          "something went wrong"
      );
    },
  });
  return { isPending, clearCart };
};
