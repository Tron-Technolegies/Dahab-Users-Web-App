import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useGetCryptoTransactions from "../hooks/payment/useGetCryptoTransactions";
import Loading from "../components/Loading";
import PaginationComponent from "../components/payout/Pagination";

export default function CryptoTransactions() {
  const [page, setPage] = useState(1);
  const { loading, transactions, totalPages, refetch } =
    useGetCryptoTransactions({ currentPage: page });

  function handlePageChange(event, value) {
    setPage(value);
  }

  const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Dubai", // UAE timezone
  };

  useEffect(() => {
    refetch();
  }, [page]);

  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 flex flex-col gap-5">
      <p className="text-2xl text-[#76C6E0]">Crypto Transactions</p>
      {loading ? (
        <Loading />
      ) : (
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
                  Amount (AED)
                </TableCell>
                <TableCell
                  sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
                >
                  Transaction Amount
                </TableCell>
                <TableCell
                  sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
                >
                  Message
                </TableCell>
                <TableCell
                  sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
                >
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((row) => (
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
                    {new Date(row.createdAt).toLocaleDateString(
                      "en-US",
                      options
                    )}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "0",
                      borderBottom: "1px solid #76C6E036",
                      color: "#FFFFFF",
                    }}
                  >
                    {row.requestedAmount}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "0",
                      borderBottom: "1px solid #76C6E036",
                      color: "#FFFFFF",
                    }}
                  >
                    {`${row.paymentAmount} ${row.paymentCurrency}`}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "0",
                      borderBottom: "1px solid #76C6E036",
                      color: "#FFFFFF",
                    }}
                  >
                    {row.notes}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "0",
                      borderBottom: "1px solid #76C6E036",
                      color: "#FFFFFF",
                    }}
                  >
                    <p
                      className={`${
                        row.status === "complete"
                          ? "text-[#07EAD3]"
                          : row.status === "cancelled"
                          ? "text-red-600"
                          : "text-[#F7931A]"
                      }`}
                    >
                      {row.status}
                    </p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {totalPages > 1 && (
        <PaginationComponent
          page={page}
          pageChange={handlePageChange}
          totalPage={totalPages}
        />
      )}
    </div>
  );
}
