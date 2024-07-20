import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

const BasicTable = ({ rows, onStatusChange }) => {
  const makeStyle = (status) => {
    if (status === 'Approved') {
      return {
        background: 'rgb(145 254 159 / 47%)',
        color: 'green',
      };
    } else if (status === 'Pending') {
      return {
        background: '#ffadad8f',
        color: 'red',
      };
    } else {
      return {
        background: '#59bfff',
        color: 'white',
      };
    }
  };

  return (
    <div className="Table">
      <TableContainer
        component={Paper}
        style={{
          boxShadow: "0px 13px 20px 0px #80808029",
          maxHeight: "400px", // Adjust height as per your requirement
          overflowY: "auto",  // Enable vertical scrolling
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Resource</TableCell>
              <TableCell align="left">Tracking ID</TableCell>
              <TableCell align="left">Time</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.trackingId}</TableCell>
                <TableCell align="left">{row.time}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  {row.status === "Request" ? (
                    <button
                      style={{
                        background: "rgb(89, 191, 255)", // RGB color
                        color: "white",       // White text color
                        padding: "10px 20px", // Padding
                        border: "none",       // No border
                        cursor: "pointer",    // Pointer cursor on hover
                        borderRadius: "5px",  // Rounded corners
                      }}
                      onClick={() => onStatusChange(row.trackingId)}
                    >
                      Approve
                    </button>
                  ) : (
                    <span className="status" style={makeStyle(row.status)}>
                      {row.status}
                    </span>
                  )}
                </TableCell>
                <TableCell align="left" className="Details">Details</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BasicTable;
