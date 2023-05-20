import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(userName, email, lat, lng, phone) {
  return { userName, email, lat, lng, phone };
}

const rows = [
  createData(
    " pukar47",
    "pukar@gmail.com",
    "87.455557",
    "87.333311",
    "9841719564"
  ),
  createData("ahmed", "hamza@gmai.com", "87.455557", "87.333311", "9823719571"),
  createData(
    "dikkim34",
    "dikkim@gmail.com",
    "87.455557",
    "87.333311",
    "9849719511"
  ),
];

const makeStyle = (status) => {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

export default function BasicTable() {
  return (
    <div className="Table">
      <TableContainer
        component={Paper}
        style={{
          boxShadow: "0px 13px 20px 0px #80808029",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Latitude</TableCell>
              <TableCell align="left"> Longitude</TableCell>
              <TableCell align="left">Phone Number </TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row) => (
              <TableRow
                key={row.userName}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.userName}
                </TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.lat}</TableCell>
                <TableCell align="left">{row.lng}</TableCell>
                <TableCell align="left" className="Details">
                  {row.phone}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
