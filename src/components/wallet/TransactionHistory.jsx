import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { UserContext } from "../../UserContext";

export default function TransactionHistory() {
  const { user } = useContext(UserContext);
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Dubai", // UAE timezone
  };
  return (
    <div className="flex flex-col gap-3">
      <p
        className={`px-4 py-1 w-fit rounded-b-md border-b text-white border-[#0194FE]`}
      >
        Transactions
      </p>
      <TableContainer component={Paper} id="payout">
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
                Date (MM/DD/YYYY)
              </TableCell>
              <TableCell
                sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
              >
                Amount
              </TableCell>
              <TableCell
                sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
              >
                Current Balance
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user?.walletTransactions
              ?.slice()
              .reverse()
              .map((row) => (
                <TableRow
                  key={row.id}
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
                    {new Date(row.date).toLocaleDateString("en-US", options)}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "0",
                      borderBottom: "1px solid #76C6E036",
                      color: "#FFFFFF",
                    }}
                  >
                    <div className="flex justify-center items-center gap-5">
                      {row.type === "debited" ? (
                        <p className="text-red-500 text-xl font-semibold">
                          <FiMinus />
                        </p>
                      ) : (
                        <p className="text-green-600 text-xl font-semibold">
                          <GoPlus />
                        </p>
                      )}
                      {row.amount.toFixed(2)}
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
                    {row.currentWalletBalance?.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
