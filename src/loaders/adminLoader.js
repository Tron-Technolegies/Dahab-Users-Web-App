import axios from "axios";
import { redirect } from "react-router-dom";
import { base_url } from "../utils/constants";

export const adminLoader = async () => {
  try {
    const res = await axios.get(
      `${base_url}/v2/user/info`,
      { withCredentials: true } // 👈 REQUIRED for cookies
    );

    const user = res.data;

    if (!user) {
      throw new Error("Not Logged In");
    }

    return user; // accessible via useLoaderData if needed
  } catch (error) {
    return redirect("/login");
  }
};
