import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import { IoMdClose } from "react-icons/io";

import TwoFAPopup from "./TwoFAPopup";

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

export default function PopupBox({ open, setOpen }) {
  const [twoFA, setTwoFa] = useState(false);

  return (
    <>
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
              <p>Fee increased to 0.0001 BTC.</p>
              <p className="text-xl text-[#07EAD3]">Proceed</p>
              <div className="flex gap-5 ">
                <button
                  onClick={() => setOpen(false)}
                  className="px-10 py-1 bg-[#76C6E063] rounded-md cursor-pointer"
                >
                  No
                </button>
                <button
                  onClick={() => {
                    setOpen(false);
                    setTwoFa(true);
                  }}
                  className="px-10 py-1 bg-[#0194FE] rounded-md cursor-pointer"
                >
                  Yes
                </button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
      <TwoFAPopup open={twoFA} setOpen={setTwoFa} />
    </>
  );
}
