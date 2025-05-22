import React from "react";

export default function FormInput({
  title,
  type,
  styles,
  value,
  placeholder,
  onChange,
}) {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm">{title}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`px-4 py-2 bg-white rounded-md outline-0 text-black ${styles}`}
      />
    </div>
  );
}
