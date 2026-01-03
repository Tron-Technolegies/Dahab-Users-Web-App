import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { base_url } from "../../utils/constants";
import { useContext } from "react";
import { UserContext } from "../../UserContext";

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  const { setAlertError, setAlertSuccess } = useContext(UserContext);
  const { isPending, mutate: updateProfile } = useMutation({
    mutationFn: async ({ data }) => {
      await axios.patch(`${base_url}/mining/auth/update-profile`, data, {
        withCredentials: true,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-info"] });
      setAlertSuccess("Profile updated successfully");
    },
    onError: (error) => {
      setAlertError(
        error.response.data.msg || error.response.data.error || error.message
      );
    },
  });
  return { isPending, updateProfile };
};

export const useUpdateProfilePic = () => {
  const queryClient = useQueryClient();
  const { setAlertError, setAlertSuccess } = useContext(UserContext);
  const { isPending, mutate: updateDp } = useMutation({
    mutationFn: async ({ formData }) => {
      await axios.patch(`${base_url}/v2/user/update-profile-pic`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user-info"] });
    },
    onError: (error) => {
      setAlertError(error.response.data.error || "something went wrong");
    },
  });
  return { isPending, updateDp };
};
