import React, { useContext, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { UserContext } from "../../UserContext";
import Pagination from "./Pagination";
import PaginationComponent from "./Pagination";
import { useGetRewards } from "../../hooks/payout/useGetRewards";
import Loading from "../Loading";

export default function RewardsTable() {
  const [page, setPage] = useState(1);
  const { isError, isLoading, data } = useGetRewards({ currentPage: page });

  const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Dubai", // UAE timezone
  };
  function handlePageChange(event, value) {
    setPage(value);
  }

  return isLoading ? (
    <Loading />
  ) : isError ? (
    <p>Something went wrong</p>
  ) : (
    <>
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
                Settlement (MM/DD/YYYY)
              </TableCell>
              <TableCell
                sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
              >
                Amount
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.allRewards.map((row, i) => (
              <TableRow
                key={row._id}
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
                  {row.amount.toFixed(8)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {data.totalPages > 1 && (
        <PaginationComponent
          totalPage={data.totalPages}
          page={page}
          pageChange={handlePageChange}
        />
      )}
    </>
  );
}
