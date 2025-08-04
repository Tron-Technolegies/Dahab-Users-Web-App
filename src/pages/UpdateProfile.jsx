import React, { useContext, useState } from "react";
import FormInput from "../components/FormInput";
import { UserContext } from "../UserContext";
import useUpdateProfile from "../hooks/auth/useUpdateProfile";
import Loading from "../components/Loading";

export default function UpdateProfile() {
  const { user } = useContext(UserContext);
  const [name, setName] = useState(user?.username);
  const [email, setEmail] = useState(user?.email);
  const { loading, updateProfile } = useUpdateProfile();
  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 flex flex-col gap-5">
      <p className="text-2xl text-[#76C6E0]">My Profile</p>
      <div className="lg:w-1/2 w-full flex flex-col gap-5">
        <FormInput
          title={"Username"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          type={"text"}
          styles={"bg-[#011532]"}
        />
        <FormInput
          title={"Email"}
          value={email}
          onChange={(e) => setName(e.target.value)}
          type={"email"}
          styles={"bg-[#011532]"}
        />
        <button
          onClick={() => updateProfile({ email, username: name })}
          className="px-4 py-2 bg-[#07EAD3] rounded-md w-1/2 cursor-pointer"
        >
          Save
        </button>
        {loading && <Loading />}
      </div>
    </div>
  );
}
