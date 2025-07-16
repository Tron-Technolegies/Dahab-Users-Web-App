import React, { useContext, useState } from "react";
import FormSelect from "../../../FormSelect";
import { IoSearch } from "react-icons/io5";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Backdrop from "@mui/material/Backdrop";
import SingleGraph from "./SingleGraph";
import { UserContext } from "../../../../UserContext";

export default function DetailedTable() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const { user } = useContext(UserContext);
  const handleClose = () => {
    setName("");
    setOpen(false);
  };
  const handleOpen = (name) => {
    setName(name);
    setOpen(true);
  };

  return (
    <div className="flex flex-col gap-10" id="miner-table">
      <div className="flex items-center gap-5">
        <FormSelect list={["All", "Active", "Warning", "Inactive"]} />
        <div className="w-full relative">
          <p className="absolute text-xl text-[#0194FE] left-2 top-[10px]">
            <IoSearch />
          </p>
          <input
            type="text"
            className="px-4 ps-10 py-2 rounded-md bg-[#011532] text-[#0194FE] w-full outline-0"
            placeholder="Search Worker"
          />
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#000C26",
                borderColor: "#07EAD345",
              }}
            >
              <TableCell
                sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
              >
                HashRate
              </TableCell>
              <TableCell
                sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
              >
                Power
              </TableCell>
              <TableCell
                sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
              >
                Mined Revenue
              </TableCell>
              <TableCell
                sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
              >
                Purchased On
              </TableCell>
              <TableCell
                sx={{ color: "#0194FE", border: "0", textAlign: "center" }}
              >
                Validity Left
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user?.ownedMiners.map((row) => (
              <TableRow
                key={row._id}
                sx={{
                  //
                  // cursor: "pointer",
                  backgroundColor: "#000C26",
                  // "&:hover": {
                  //   backgroundColor: "#011840",
                  // },
                }}
                // onClick={() => {
                //   handleOpen(row?.itemId?.name);
                // }}
              >
                <TableCell
                  sx={{ textAlign: "center", border: "0", color: "#FFFFFF" }}
                >
                  {row?.itemId?.name}
                </TableCell>
                <TableCell
                  sx={{ textAlign: "center", border: "0", color: "#FFFFFF" }}
                >
                  {row?.itemId?.h24_hashRate}
                </TableCell>
                <TableCell
                  sx={{ textAlign: "center", border: "0", color: "#FFFFFF" }}
                >
                  {row?.itemId?.power}
                </TableCell>
                <TableCell
                  sx={{ textAlign: "center", border: "0", color: "#FFFFFF" }}
                >
                  {row?.itemId?.minedRewards || "N/A"}
                </TableCell>
                <TableCell
                  sx={{ textAlign: "center", border: "0", color: "#FFFFFF" }}
                >
                  {row?.itemId?.purchased_on || "N/A"}
                </TableCell>
                <TableCell
                  sx={{ textAlign: "center", border: "0", color: "#FFFFFF" }}
                >
                  {row?.itemId?.validity || "N/A"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <Backdrop
        sx={(theme) => ({
          color: "#fff",
          zIndex: theme.zIndex.drawer + 1,
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        })}
        open={open}
        onClick={handleClose}
      >
        <SingleGraph name={name} />
      </Backdrop> */}
    </div>
  );
}
