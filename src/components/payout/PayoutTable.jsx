import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FormSelect from "../FormSelect";
import useGetPayouts from "../../hooks/payout/useGetPayouts";
import Loading from "../Loading";
import PaginationComponent from "./Pagination";

export default function PayoutTable() {
  const [status, setStatus] = useState("All");
  const [page, setPage] = useState(1);
  const { loading, payouts, refetch, totalPages } = useGetPayouts({
    currentPage: page,
    status,
  });
  function handlePageChange(event, value) {
    setPage(value);
  }
  useEffect(() => {
    refetch();
  }, [page, status]);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 self-end">
        <label>Sort</label>
        <FormSelect
          list={["All", "Pending", "Completed", "Failed"]}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
      </div>
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
                  Date
                </TableCell>
                <TableCell
                  sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
                >
                  Amount
                </TableCell>
                <TableCell
                  sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
                >
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {payouts.map((row) => (
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
                    {row.amount}
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
                        row.status === "Completed"
                          ? "text-[#07EAD3]"
                          : row.status === "Failed"
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
          totalPage={totalPages}
          page={page}
          pageChange={handlePageChange}
        />
      )}
    </div>
  );
}
