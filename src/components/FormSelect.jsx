import React from "react";

export default function FormSelect({
  title,
  defaultOption,
  list,
  onChange,
  value,
}) {
  return (
    <div className="flex flex-col gap-2 w-fit">
      {title && <label className="text-sm">{title}</label>}
      <select
        className="p-2 text-[#0194FE] bg-[#011532] rounded-md"
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
