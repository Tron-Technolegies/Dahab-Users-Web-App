import React, { useContext, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { UserContext } from "../../UserContext";
import PaginationComponent from "../payout/Pagination";
import { useGetProfitTransactions } from "../../hooks/transactions/useTransactions";
import Loading from "../Loading";

export default function ProfitModeTable() {
  const [page, setPage] = useState(1);
  const { isError, isLoading, data } = useGetProfitTransactions({
    currentPage: page,
  });
  function handlePageChange(event, value) {
    setPage(value);
  }
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Dubai", // UAE timezone
  };
  return isLoading ? (
    <Loading />
  ) : isError ? (
    <p>Something went wrong</p>
  ) : (
    <>
      <p className="font-semibold my-5">Profit Mode Transactions</p>
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
                Date (MM/DD/YYYY)
              </TableCell>
              <TableCell
                sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
              >
                Hosting Fee (AED)
              </TableCell>
              <TableCell
                sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
              >
                BTC Deducted
              </TableCell>
              <TableCell
                sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
              >
                Price of BTC
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.transactions.map((row, i) => (
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
                  <div>
                    <p>{row.amountAED.toFixed(2)}</p>
                    {row.message && <p className="text-xs">({row.message})</p>}
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
                  {row.amountBTC.toFixed(8)}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    border: "0",
                    borderBottom: "1px solid #76C6E036",
                    color: "#FFFFFF",
                  }}
                >
                  {row.rateBTCNowAED.toFixed(2)}
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
