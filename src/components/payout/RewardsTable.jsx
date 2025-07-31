import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { UserContext } from "../../UserContext";

export default function RewardsTable() {
  const { user } = useContext(UserContext);
  return (
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
              sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
            >
              Settlement
            </TableCell>
            <TableCell
              sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
            >
              Amount
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user?.allMinedRewards?.map((row, i) => (
            <TableRow
              key={i}
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
                {row.date.slice(0, 10)}
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  border: "0",
                  borderBottom: "1px solid #76C6E036",
                  color: "#FFFFFF",
                }}
              >
                {row.amount.toFixed(8)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
