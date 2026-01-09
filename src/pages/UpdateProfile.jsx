import React, { useContext, useState } from "react";
import FormInput from "../components/FormInput";
import { UserContext } from "../UserContext";
import Loading from "../components/Loading";
import {
  useUpdateProfile,
  useUpdateProfilePic,
} from "../hooks/auth/useUpdateProfile";

export default function UpdateProfile() {
  const { user } = useContext(UserContext);
  const { isPending, updateProfile } = useUpdateProfile();
  const { isPending: DPLoading, updateDp } = useUpdateProfilePic();

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    updateProfile({ data });
    e.target.reset();
  }

  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 flex flex-col gap-5">
      <p className="text-2xl text-[#76C6E0]">My Profile</p>
      {user?.profilePic ? (
        <img
          src={user?.profilePic}
          alt="profile"
          className="w-16 h-16 object-cover rounded-full"
        />
      ) : (
        <div className="w-16 h-16 bg-white rounded-full text-black text-2xl font-bold flex justify-center items-center">
          {user?.username?.slice(0, 1).toUpperCase()}
        </div>
      )}
      <label className="shadow-lg p-3 rounded-md cursor-pointer bg-[#07EAD3] w-fit">
        <input
          type="file"
          accept="image/*"
          name="profilePic"
          className="hidden"
          onChange={(e) => {
            const formData = new FormData();
            formData.append("profilePic", e.target.files[0]);
            updateDp({ formData });
            e.target.value = "";
          }}
        />
        <p type="submit">
          {DPLoading ? "Updating..." : "Change Profile Picture"}
        </p>
      </label>
      <form
        className="lg:w-1/2 w-full flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <FormInput
          title={"Username"}
          type={"text"}
          styles={"bg-[#011532]"}
          required
          name={"username"}
          defaultValue={user?.username}
        />
        <FormInput
          title={"Email"}
          type={"email"}
          styles={"bg-[#011532]"}
          required
          name={"email"}
          defaultValue={user?.email}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-[#07EAD3] rounded-md w-1/2 cursor-pointer"
        >
          Save
        </button>
        {isPending && <Loading />}
      </form>
    </div>
  );
}
