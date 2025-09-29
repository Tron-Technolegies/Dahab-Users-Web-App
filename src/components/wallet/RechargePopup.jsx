import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import { IoMdClose } from "react-icons/io";
import useCreatePaymentIntent from "../../hooks/payment/useCreatePaymentIntent";
import Loading from "../Loading";
import { UserContext } from "../../UserContext";
import { motion } from "framer-motion";
import useCreateCryptoPaymentIntent from "../../hooks/payment/useCreateCryptoPaymentIntent";
import CryptoPaymentPopup from "./CryptoPaymentPopup";

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
  const {
    loading: cryptoLoading,
    createCrptoPayment,
    paymentData,
  } = useCreateCryptoPaymentIntent();
  const { user, setAlertError } = useContext(UserContext);
  const [pay, setPay] = useState("fiat");
  const [cryptoPopup, setCryptoPopup] = useState(false);

  useEffect(() => {
    if (user?.walletBalance < 0) {
      setAmount(-Number(user?.walletBalance.toFixed(2)));
    }
  }, [user]);

  useEffect(() => {
    if (paymentData) {
      setCryptoPopup(true);
    }
  }, [paymentData]);
  return (
    <>
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
              <div className="flex gap-7 justify-between items-center py-5 border-b border-[#244A66] w-full lg:w-1/2">
                <p className="text-lg font-semibold">Pay with</p>
                <div
                  className={`bg-[#011532]  p-1 border border-[#76C6E04D] rounded-s-full rounded-e-full flex items-center gap-5`}
                >
                  <motion.button
                    className={`text-white p-1 px-2 cursor-pointer disabled:cursor-not-allowed`}
                    animate={{
                      backgroundColor: pay === "fiat" ? "#0194FE" : "#011532",
                      borderRadius: pay === "fiat" ? "999px" : "0px",
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    onClick={() => setPay("fiat")}
                  >
                    Fiat
                  </motion.button>
                  <motion.button
                    className={`text-white p-1 px-2 cursor-pointer disabled:cursor-not-allowed`}
                    animate={{
                      backgroundColor: pay === "crypto" ? "#0194FE" : "",
                      borderRadius: pay === "crypto" ? "999px" : "0px",
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    onClick={() => setPay("crypto")}
                  >
                    Crypto
                  </motion.button>
                </div>
              </div>
              <div className="flex justify-center gap-5 items-center">
                <button
                  className="px-3 py-1 rounded-md bg-gray-600 cursor-pointer min-w-20"
                  onClick={async () => {
                    if (
                      user?.walletBalance < 0 &&
                      Number(amount) < -Number(user?.walletBalance.toFixed(2))
                    ) {
                      setAlertError(
                        "Only able to topup amounts greater than your current negative balance"
                      );
                      return;
                    }
                    if (amount < 20) {
                      setAlertError(
                        "Only able to pay amounts greater than 50 AED"
                      );
                      return;
                    }
                    if (pay === "fiat") {
                      await createPaymentIntent({
                        amount: amount,
                        message: "wallet Topup",
                      });
                    }
                    if (pay === "crypto") {
                      await createCrptoPayment({
                        amount: Number(amount),
                        message: "wallet Topup",
                      });
                    }
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
      {paymentData && (
        <CryptoPaymentPopup
          open={cryptoPopup}
          setOpen={setCryptoPopup}
          paymentData={paymentData}
        />
      )}
    </>
  );
}
