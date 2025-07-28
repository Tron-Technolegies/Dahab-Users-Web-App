import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function PurchaseSummary() {
  const rows = JSON.parse(localStorage.getItem("cart_items"));
  return (
    <div className="w-full flex flex-col gap-5">
      <p className="text-[#76C6E0] text-left">Purchase Summary</p>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#011532",
                borderColor: "#07EAD345",
              }}
            >
              <TableCell
                sx={{ color: "#0194FE", border: "0", textAlign: "left" }}
              >
                Product
              </TableCell>
              <TableCell
                sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
              >
                Qty
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row) => (
              <TableRow
                key={row?._id}
                sx={{
                  //
                  cursor: "pointer",

                  backgroundColor: "#000C26",
                  "&:hover": {
                    backgroundColor: "#011840",
                  },
                }}
              >
                <TableCell
                  sx={{
                    textAlign: "center",
                    border: "0",
                    borderBottom: "1px solid #76C6E036",
                    color: "#FFFFFF",
                  }}
                >
                  <div className="flex gap-3 items-center ">
                    <img src={row.itemId.image} className="w-16 object-cover" />
                    <div className="flex flex-col gap-2 justify-center">
                      <p className="text-lg font-semibold">{row.itemId.name}</p>
                      <p className="text-sm">{row.itemId.price} AED</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    border: "0",
                    borderBottom: "1px solid #76C6E036",
                    color: "#FFFFFF",
                  }}
                >
                  {row.qty}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
