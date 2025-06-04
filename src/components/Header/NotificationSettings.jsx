import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import { IoMdClose } from "react-icons/io";
import Switch from "@mui/material/Switch";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "90%",
    md: "50%",
  },
  bgcolor: "#00253F",
  border: "2px solid #0194FE",
  borderRadius: "16px",
  boxShadow: 24,
  p: 4,
};

export default function NotificationSettings({ open, setOpen }) {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <div className="flex flex-col gap-5 items-start w-full">
            <button
              className="self-end text-[#22657B80] cursor-pointer text-xl"
              onClick={() => setOpen(false)}
            >
              <IoMdClose />
            </button>
            <p className="text-xl text-[#76C6E0]">Notification Settings</p>
            <div className="flex justify-between items-center w-full">
              <p>Offline Alerts</p>
              <Switch
                checked={checked1}
                onChange={(e) => setChecked1(e.target.checked)}
              />
            </div>
            <div className="flex justify-between items-center w-full">
              <p>Payout Notifications</p>
              <Switch
                checked={checked2}
                onChange={(e) => setChecked2(e.target.checked)}
              />
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}
