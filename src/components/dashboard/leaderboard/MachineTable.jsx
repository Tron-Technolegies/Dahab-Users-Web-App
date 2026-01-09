import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function MachineTable({ data }) {
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
              Rank
            </TableCell>
            <TableCell
              sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
            >
              User
            </TableCell>
            <TableCell
              sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
            >
              Miners
            </TableCell>
            <TableCell
              sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
            >
              Mined BTC
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row, i) => (
            <TableRow
              key={row.userId}
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
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: "1px solid #76C6E036",
                  color: "#FFFFFF",
                }}
              >
                {(i === 0 || i === 1 || i === 2) && (
                  <img
                    src={
                      i === 0
                        ? "/home/leaderboard-1.png"
                        : i === 1
                        ? "/home/leaderboard-2.png"
                        : "/home/leaderboard-3.png"
                    }
                    alt="rank"
                    className="w-4"
                  />
                )}
                {i + 1}
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
                  {row.profilePic && (
                    <img
                      src={row.profilePic}
                      alt="profilePic"
                      className="w-5 h-5 rounded-full object-cover"
                    />
                  )}
                  <p>{row.name}</p>
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
                <div className="flex items-center gap-5 justify-center">
                  <img src="/home/increase.png" className="w-3 object-cover" />
                  {row.totalMiners}
                </div>
              </TableCell>
              <TableCell
                sx={{
                  textAlign: "center",
                  border: "0",
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: "1px solid #76C6E036",
                  color: "#FFFFFF",
                }}
              >
                <img src="/home/bitcoin-sm.png" />
                {row.totalRevenue.toFixed(7)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
