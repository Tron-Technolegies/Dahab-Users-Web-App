import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import { IoMdClose } from "react-icons/io";
import useCreatePaymentIntent from "../../hooks/payment/useCreatePaymentIntent";
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

export default function RechargePopup({ open, setOpen }) {
  const [amount, setAmount] = useState(0);
  const { loading, createPaymentIntent } = useCreatePaymentIntent();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={() => {
        setOpen(false);
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
              }}
            >
              <IoMdClose />
            </button>
            <p className="text-xl text-[#76C6E0] text-center">
              Enter Your Topup amount (AED)
            </p>
            <input
              type="number"
              className="bg-white p-2 rounded-lg text-black"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className="flex justify-center gap-5 items-center">
              <button
                className="px-3 py-1 rounded-md bg-gray-600 cursor-pointer min-w-20"
                onClick={async () => {
                  await createPaymentIntent({
                    amount: amount,
                    message: "wallet Topup",
                  });
                  setOpen(false);
                }}
              >
                Topup
              </button>
            </div>
            {loading && <Loading />}
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}
