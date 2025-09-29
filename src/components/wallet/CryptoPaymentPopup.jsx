import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import { IoMdClose } from "react-icons/io";
import { QRCodeSVG } from "qrcode.react";
import { useNavigate } from "react-router-dom";

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

export default function CryptoPaymentPopup({ open, setOpen, paymentData }) {
  const navigate = useNavigate();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
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
            <div className="mx-auto bg-[#011532] rounded-md p-5 flex flex-col gap-5 w-full">
              <p className="text-[#76C6E0] text-xl">Send Payment</p>
              <p>
                Payment Amount:{" "}
                <span className="text-[#76C6E0]">{`${paymentData?.payment_amount} ${paymentData?.payment_currency}`}</span>
              </p>
              <p>
                Address:{" "}
                <span className="text-[#76C6E0] text-xs md:text-base">{`${
                  paymentData?.addresses?.BTC || paymentData?.addresses?.ETH
                }`}</span>
              </p>
              <QRCodeSVG
                value={`${paymentData?.payment_currency}:${paymentData?.addresses?.BTC}?amount=${paymentData?.payment_amount}`}
                size={180}
                className="mx-auto"
              />

              <p className="text-xs text-justify">
                Once You transfer the exact amount to this address , click
                finish. After payment completion your wallet balance will update
              </p>
              <button
                onClick={() => {
                  navigate("/dashboard/crypto-transactions");
                  setOpen(false);
                }}
                className="w-full py-2 rounded-lg bg-[#07EAD3] text-black cursor-pointer"
              >
                Finish Transaction
              </button>
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}
