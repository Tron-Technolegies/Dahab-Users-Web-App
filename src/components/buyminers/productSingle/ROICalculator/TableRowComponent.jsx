import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import FormInput from "../../../FormInput";

export default function TableRowComponent({
  type,
  btcValue,
  setBtcChange,
  minerValue,
  setMinerChange,
}) {
  return (
    <TableRow
      sx={{
        //

        backgroundColor: "#011532",
      }}
    >
      <TableCell
        sx={{
          textAlign: "center",
          border: "0",

          color: "#FFFFFF",
        }}
      >
        {type}
      </TableCell>
      <TableCell
        sx={{
          textAlign: "center",
          border: "0",

          color: "#FFFFFF",
        }}
      >
        <FormInput
          styles={"bg-[#858E9147]"}
          value={btcValue}
          onChange={(e) => setBtcChange(e.target.value)}
        />
      </TableCell>
      <TableCell
        sx={{
          textAlign: "center",
          border: "0",

          color: "#FFFFFF",
        }}
      >
        <FormInput
          styles={"bg-[#858E9147]"}
          value={minerValue}
          onChange={(e) => setMinerChange(e.target.value)}
        />
      </TableCell>
    </TableRow>
  );
}
