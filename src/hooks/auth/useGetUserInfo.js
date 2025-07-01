import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";

import axios from "axios";
import { base_url } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const useGetUserInfo = () => {
  const [loading, setLoading] = useState(false);
  const { setUser, user } = useContext(UserContext);
  const navigate = useNavigate();

  const getUserInfo = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${base_url}/auth/userInfo`, {
        withCredentials: true,
      });
      const data = response.data;
      setUser(data);
    } catch (error) {
      console.error(
        error?.response?.data?.error ||
          error?.response?.data?.message ||
          error?.message ||
          "something went wrong"
      );
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    if (user && !user.username) {
      navigate("/login");
    }
  }, [user]);

  return { loading };
};

export default useGetUserInfo;
