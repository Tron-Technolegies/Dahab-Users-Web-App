import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import FormInput from "../../FormInput";
import PopupBox from "./PopupBox";

export default function WithdrawForm() {
  const MIN = 0;
  const MAX = 0.0005897;
  const STEP = 0.00001;
  const [amount, setAmount] = useState(MIN);
  const [open, setOpen] = useState(false);
  const marks = [
    {
      value: 0,
      label: "0 BTC",
    },
    {
      value: 0.0005897,
      label: "0.0005897 BTC",
    },
  ];
  function valuetext(value) {
    return `${value} BTC`;
  }
  return (
    <div className="p-10 rounded-md bg-[#011532] flex flex-col items-center gap-5 lg:w-1/2 w-full mx-auto my-10">
      {" "}
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
      />
      <button
        onClick={() => setOpen(true)}
        className="px-10 py-1 rounded-full bg-[#07EAD3] text-black cursor-pointer"
      >
        Confirm
      </button>
      <PopupBox open={open} setOpen={setOpen} />
    </div>
  );
}
