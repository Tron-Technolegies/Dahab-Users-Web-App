import React from "react";
import MenuItem from "@mui/material/MenuItem";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

export default function AccountSettingItem({ handleClose, name, link, click }) {
  return (
    <MenuItem onClick={handleClose}>
      <Link
        to={link}
        className="flex justify-between items-center w-full"
        onClick={click && click}
      >
        <p className="text-sm">{name}</p>
        <MdOutlineKeyboardArrowRight />
      </Link>
    </MenuItem>
  );
}
