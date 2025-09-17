import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import { Link } from "react-router-dom";
import useAgreeTerms from "../../hooks/termsAndPrivacy/useAgreeTerms";
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

export default function TermsUpdatePopup({ open, setOpen }) {
  const [agree, setAgree] = useState(false);
  const { loading, agreeTerms } = useAgreeTerms();
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
            <p className="text-xl text-[#76C6E0] text-center">
              We have Updated our Terms And Conditions & Privacy Policy
            </p>
            <p>
              We advice you to read and review our new terms and condition and
              Privacy Policy
            </p>
            <div className="flex gap-1 items-start">
              <input
                type="checkbox"
                value={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              <p className="text-xs text-center max-w-[500px]">
                I have read and agree to the of{" "}
                <Link to={"/terms"} className="text-[#76C6E0]">
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link to={"/privacy"} className="text-[#76C6E0]">
                  Privacy Policy
                </Link>{" "}
                of Dahab Miners. I understand that digital miners are not
                physical machines, and that mining returns are subject to market
                risks and operational factors.{" "}
              </p>
            </div>
            <button
              disabled={agree ? false : true}
              onClick={async () => {
                try {
                  await agreeTerms();
                  setOpen(false);
                } catch (err) {
                  throw err;
                }
              }}
              className="px-3 py-1 rounded-md bg-gray-600 cursor-pointer min-w-20 disabled:cursor-not-allowed"
            >
              Submit
            </button>
            {loading && <Loading />}
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}
