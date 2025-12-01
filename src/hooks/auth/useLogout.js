import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../utils/constants";
import { UserContext } from "../../UserContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { setAlertError, setAlertSuccess, setUser } = useContext(UserContext);
  const { mutate: logout, isPending } = useMutation({
    mutationFn: async () => {
      await axios.post(
        `${base_url}/auth/logout`,
        {},
        { withCredentials: true }
      );
    },
    onSuccess: () => {
      queryClient.clear();
      setAlertSuccess("successfully logged out");
      setUser(null);
      navigate("/login");
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
  return { isPending, logout };
};
