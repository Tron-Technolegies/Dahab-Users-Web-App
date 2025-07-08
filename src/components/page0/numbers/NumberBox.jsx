import React from "react";

export default function NumberBox({ heading, content, styles }) {
  return (
    <div className={`px-5 flex flex-col items-center gap-5 ${styles}`}>
      <p className="text-xl text-center">{heading}</p>
      <p className="text-sm text-[#979797] text-center">{content}</p>
    </div>
  );
}
