import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import QuantitySwitcher from "./QuantitySwitcher";
import { useGetCartItems } from "../../../hooks/cart/useCart";
import Loading from "../../Loading";

export default function CartTable() {
  const { isLoading, isError, data } = useGetCartItems();

  return isLoading ? (
    <Loading />
  ) : isError ? (
    <p>Something Went wrong</p>
  ) : (
    <div className="flex flex-col gap-5 my-5">
      <p>Total Items: {data?.length}</p>
      {data?.length < 1 && <p>Your Cart is Empty</p>}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#006EBD",
                borderColor: "#07EAD345",
              }}
            >
              <TableCell
                sx={{ color: "#FFFFFF", border: "0", textAlign: "center" }}
              >
                Product
              </TableCell>
              <TableCell
                sx={{ color: "#FFFFFF", border: "0", textAlign: "center" }}
              >
                Quantity
              </TableCell>
              <TableCell
                sx={{ color: "#FFFFFF", border: "0", textAlign: "center" }}
              >
                Price
              </TableCell>
              <TableCell
                sx={{ color: "#FFFFFF", border: "0", textAlign: "center" }}
              >
                Total
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.length > 0 &&
              data.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{
                    //

                    backgroundColor: "#011532",
                    "&:hover": {
                      backgroundColor: "#011840",
                    },
                  }}
                >
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "0",
                      borderBottom: "2px solid #000C26",
                      color: "#FFFFFF",
                    }}
                  >
                    <div className="flex justify-center items-center gap-2">
                      <img
                        src={row.itemId?.image}
                        className="w-10 object-cover"
                      />
                      <p>{row.itemId?.name}</p>
                    </div>
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "0",
                      borderBottom: "2px solid #000C26",
                      color: "#FFFFFF",
                    }}
                  >
                    <div className="flex justify-center">
                      <QuantitySwitcher qty={row.qty} id={row._id} />
                    </div>
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "0",
                      borderBottom: "2px solid #000C26",
                      color: "#FFFFFF",
                    }}
                  >
                    AED {row.itemId?.price}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "0",
                      borderBottom: "2px solid #000C26",
                      color: "#FFFFFF",
                    }}
                  >
                    AED {parseInt(row.itemId?.price) * row.qty}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
