import React from "react";

export default function FormInput({
  title,
  type,
  styles,
  value,
  placeholder,
  onChange,
  disabled,
}) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <label className="text-sm">{title}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`px-4 py-2 rounded-md outline-0 disabled:cursor-not-allowed ${styles}`}
      />
    </div>
  );
}
