import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import FormInput from "../../FormInput";
import PopupBox from "./PopupBox";
import TwoFAPopup from "./TwoFAPopup";
import { UserContext } from "../../../UserContext";
import AlertBox from "../../Alert";

export default function WithdrawForm() {
  const { user, setAlertError, alertError } = useContext(UserContext);
  const MIN = 0;
  const STEP = 0.00001;

  const [amount, setAmount] = useState(MIN);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState(false);
  const [MAX, setMAX] = useState(user?.currentBalance?.toFixed(8));
  const [address, setAddress] = useState("");
  const marks = [
    {
      value: 0,
      label: "0 BTC",
    },
    {
      value: MAX,
      label: `${MAX} BTC`,
    },
  ];

  function handleConfirm() {
    // if (amount === 0 || amount > MAX) {
    //   setAlertError("Invalid Amount");
    //   return;
    // }
    // if (address === "") {
    //   setAlertError("Please Enter valid BTC Address");
    //   return;
    // }
    if (user?.is2FAEnabled) {
      setOpen(true);
    } else {
      setInfo(true);
    }
  }
  function valuetext(value) {
    return `${value} BTC`;
  }
  return (
    <div
      className="p-10 rounded-md bg-[#011532] flex flex-col items-center gap-5 lg:w-1/2 w-full mx-auto my-10"
      id="withdraw-form"
    >
      {alertError && (
        <AlertBox
          message={alertError}
          severity={"error"}
          onClose={() => setAlertError("")}
        />
      )}
      <Box sx={{ width: 330 }}>
        <Slider
          aria-label="Custom marks"
          getAriaValueText={valuetext}
          valueLabelDisplay="on"
          value={amount}
          onChange={(e, newValue) => setAmount(newValue)}
          min={MIN}
          max={MAX}
          step={STEP}
          marks={marks}
          sx={{
            color: "#0194FE", // Slider track and thumb color
            "& .MuiSlider-markLabel": {
              color: "#CCF2FF", // Text color of mark labels
              fontSize: "0.8rem",
            },
            "& .MuiSlider-valueLabel": {
              backgroundColor: "#0194FE", // Background of the value label
              color: "#FFFFFF", // Text color of the value label
              borderRadius: "999px",
              padding: "10px",
            },
            "& .MuiSlider-thumb": {
              border: "2px solid white",
            },
            "& .MuiSlider-rail": {
              backgroundColor: "#B4D6FF",
            },
          }}
        />
      </Box>
      <FormInput
        title={"Withdraw Amount"}
        type={"number"}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder={"Enter Amount"}
        styles={"bg-[#858E9147] text-[#CCF2FF] w-full"}
      />
      <FormInput
        title={"BTC Address"}
        styles={"bg-[#858E9147] text-[#CCF2FF] w-full"}
        placeholder={"Enter Address"}
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button
        onClick={handleConfirm}
        className="px-10 py-1 rounded-full bg-[#07EAD3] text-black cursor-pointer"
      >
        Confirm
      </button>
      <PopupBox open={info} setOpen={setInfo} />
      <TwoFAPopup open={open} setOpen={setOpen} />
    </div>
  );
}
