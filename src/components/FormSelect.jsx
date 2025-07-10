import React from "react";

export default function FormSelect({
  title,
  defaultOption,
  list,
  onChange,
  value,
  styles,
  full,
}) {
  return (
    <div className={`flex flex-col gap-3 ${full ? "w-full" : "w-fit"}`}>
      {title && <label className="text-sm">{title}</label>}
      <select
        className={`p-2 text-[#0194FE] rounded-md outline-0 ${
          styles ? styles : "bg-[#011532]"
        }`}
        value={value}
        onChange={onChange}
      >
        {defaultOption && <option value={""}>Choose One</option>}
        {list &&
          list.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
      </select>
    </div>
  );
}
