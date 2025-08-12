import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import { IoMdClose } from "react-icons/io";
import useSetPayoutMode from "../../hooks/cart/useSetPayoutMode";
import Loading from "../Loading";

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

export default function ConfirmPopup({ open, setOpen, mode, setMode }) {
  const { loading, selectPayout } = useSetPayoutMode();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={() => {
        setOpen(false);
        mode === "profit" && setMode("hold");
        mode === "hold" && setMode("profit");
      }}
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
              onClick={() => {
                setOpen(false);
                mode === "profit" && setMode("hold");
                mode === "hold" && setMode("profit");
              }}
            >
              <IoMdClose />
            </button>
            <div className="flex flex-col items-center gap-5">
              <p className="text-center">
                Are you Sure want to switch the Payout Mode?
                <br />
                You will only be able to switch it back after 60 days.
              </p>
              <div className="flex  gap-3 items-center">
                <button
                  onClick={() => {
                    setOpen(false);
                    mode === "profit" && setMode("hold");
                    mode === "hold" && setMode("profit");
                  }}
                  className="px-10 py-1 rounded-full bg-gray-400 text-black cursor-pointer"
                >
                  No
                </button>
                <button
                  onClick={async () => {
                    await selectPayout({ mode: mode });
                    setOpen(false);
                    window.location.reload();
                  }}
                  className="px-10 py-1 rounded-full bg-[#07EAD3] text-black cursor-pointer"
                >
                  Yes
                </button>
              </div>
              {loading && <Loading />}
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}
