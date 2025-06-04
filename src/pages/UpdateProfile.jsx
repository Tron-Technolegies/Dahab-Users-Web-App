import React, { useState } from "react";
import FormInput from "../components/FormInput";

export default function UpdateProfile() {
  const [name, setName] = useState("Shafi");
  const [email, setEmail] = useState("email@gmail.com");
  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 flex flex-col gap-5">
      <p>My Profile</p>
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
        <button className="px-4 py-2 bg-[#07EAD3] rounded-md w-1/2">
          Save
        </button>
      </div>
    </div>
  );
}
