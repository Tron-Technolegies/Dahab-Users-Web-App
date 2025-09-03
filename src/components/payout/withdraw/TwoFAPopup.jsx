import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import { IoMdClose } from "react-icons/io";
import useVerifyWithdrawal from "../../../hooks/auth/useVerifyWithdrawal";
import Loading from "../../Loading";
import useMakeWithdrawal from "../../../hooks/payout/useMakeWithdrawal";

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

export default function TwoFAPopup({ open, setOpen, amount, btcAddress }) {
  const [code, setCode] = useState("");
  const { loading, verifyWithdrawal } = useVerifyWithdrawal();
  const { loading: withdrawLoading, makeWithdrawal } = useMakeWithdrawal();

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
            <div className="flex flex-col items-center gap-5">
              <p>Enter Your 2FA Code</p>
              <div className="flex flex-col gap-3 items-center">
                <input
                  type="number"
                  className="px-4 py-2 rounded-md outline-0 bg-[#858E9147] text-[#CCF2FF]"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
                <button
                  onClick={async () => {
                    try {
                      await verifyWithdrawal({ code });

                      await makeWithdrawal({ address: btcAddress, amount });
                      setOpen(false);
                      setCode("");
                      setTimeout(() => {
                        window.location.reload();
                      }, 2000);
                    } catch (error) {
                      console.log("something went wrong");
                    }
                  }}
                  className="px-10 py-1 rounded-full bg-[#07EAD3] text-black cursor-pointer"
                >
                  Confirm
                </button>
                {loading && <Loading />}
                {withdrawLoading && <Loading />}
              </div>
            </div>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}
