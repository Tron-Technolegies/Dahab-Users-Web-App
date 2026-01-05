import React from "react";

export default function FormInput({
  title,
  type,
  styles,
  value,
  placeholder,
  onChange,
  name,
  required,
  disabled,
  defaultValue,
}) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <label className="text-sm">{title}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={`px-4 py-2 rounded-md outline-0 disabled:cursor-not-allowed ${styles}`}
      />
    </div>
  );
}
