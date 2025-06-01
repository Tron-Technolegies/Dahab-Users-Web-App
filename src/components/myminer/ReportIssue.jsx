import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import { IoMdClose } from "react-icons/io";

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
export default function ReportIssue({ open, setOpen }) {
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
          <div className="flex flex-col gap-5 items-center w-full">
            <button
              className="self-end text-[#22657B80] cursor-pointer text-xl"
              onClick={() => setOpen(false)}
            >
              <IoMdClose />
            </button>
            <textarea
              rows={7}
              className="w-full bg-white outline-0 text-black rounded-md p-3"
              placeholder="Enter issue"
            />
            <button
              onClick={() => {
                setOpen(false);
              }}
              className="px-4 py-1 rounded-md bg-[#0194FE] cursor-pointer"
            >
              Submit
            </button>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}
