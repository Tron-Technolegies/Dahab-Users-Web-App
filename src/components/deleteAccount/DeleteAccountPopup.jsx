import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import { IoMdClose } from "react-icons/io";
import { UserContext } from "../../UserContext";
import useDeleteAccount from "../../hooks/auth/useDeleteAccount";
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

export default function DeleteAccountPopup({ open, setOpen }) {
  const { setDeleteAccount2fa, user } = useContext(UserContext);
  const { loading, deleteAccount } = useDeleteAccount();
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
              Are you sure you want to delete your account?
            </p>
            <p className="text-center">
              Deleting your account is permanent and cannot be undone. All your
              data, miners, and wallet balances will be lost.
            </p>
            <div className="flex justify-center gap-5 items-center">
              <button
                className="px-3 py-1 rounded-md bg-gray-600 cursor-pointer min-w-20"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Cancel
              </button>
              <button
                className="px-3 py-1 rounded-md bg-red-600 cursor-pointer min-w-20"
                onClick={async () => {
                  if (user.is2FAEnabled) {
                    setDeleteAccount2fa(true);
                    setOpen(false);
                  } else {
                    await deleteAccount();
                  }
                }}
              >
                Yes, Delete
              </button>
            </div>
            {loading && <Loading />}
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}
