import React from "react";
import FormInput from "../../FormInput";

export default function Form() {
  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] md:py-5 py-2 my-10">
      <h3 className="text-3xl font-semibold text-[#76C6E0] text-center">
        Fill out the form and get a personalized offer
      </h3>
      <div className="bg-[#00182da4] p-10 rounded-md my-10 max-w-[1000px] mx-auto flex gap-10 items-center-safe">
        <img
          src="/page0/img-7.jpg"
          className="rounded-lg h-[450px] object-cover hidden md:block"
        />
        <div className="w-full">
          <p className="text-2xl">Submit Form</p>
          <form className="w-full">
            <FormInput placeholder={"Email"} styles={"bg-[#FFFFFF0D] w-full"} />
            <FormInput
              placeholder={"Phone Number"}
              styles={"bg-[#FFFFFF0D] w-full"}
            />
            <textarea
              className="bg-[#FFFFFF0D] p-2 rounded-md my-3 w-full
              "
              placeholder="Message"
              rows={7}
            ></textarea>
            <button
              style={{
                background:
                  "linear-gradient(90deg, #004DF4 0%, #42E8E0 117.18%)",
              }}
              className="px-4 py-1.5 w-full rounded-md"
            >
              Get Offer
            </button>
          </form>
          <p className="text-sm text-[#FFFFFF99] text-center mt-10">
            By clicking the button you agree to the processing of personal data
          </p>
        </div>
      </div>
    </div>
  );
}
