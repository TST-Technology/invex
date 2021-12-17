import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const CollapsableTable = (props) => {
  console.log("Collapsable table props", props);
  const createData = (name, callIr, putIr, cp, hvtv) => {
    console.log("create table variables", name, callIr, putIr, cp, hvtv);
    return {
      name,
      callIr,
      putIr,
      cp,
      hvtv,
      history: [
        {
          companyName: "AVV",
          date: "2020-01-05",
          compCallIr: "11091700",
          compPutIr: 3,
          compCp: 0,
          compHvtv: 0,
        },
      ],
    };
  };

  // Here I have manually added the rows.
  // Add a function to add values to the row (get value from props)

  const rows = [
    // createData("AAPB", 159, 6.0, 24, 4.0, 3.99, [
    //     {
    //       companyName: "AVV",
    //       date: "2020-01-05",
    //       compCallIr: "11091700",
    //       compPutIr: 3,
    //       compCp: 0,
    //       compHvtv: 0,
    //     },
    //   ],),
    createData("AAL", 237, 9.0, 37, 4.3, 4.99),
    createData("BAL", 262, 16.0, 24, 6.0, 3.79),
    createData("BAL", 305, 3.7, 67, 4.3, 2.5),
    createData("AVV", 356, 16.0, 49, 3.9, 1.5),
  ];
  const Row = (props) => {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
      <React.Fragment>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="center">{row.callIr}</TableCell>
          <TableCell align="center">{row.putIr}</TableCell>
          <TableCell align="center">{row.cp}</TableCell>
          <TableCell align="center">{row.hvtv}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  company name
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Call Ir</TableCell>
                      <TableCell>Put Ir</TableCell>
                      <TableCell>CP ratio</TableCell>
                      <TableCell>HVTV</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.history.map((historyRow) => (
                      <TableRow key={historyRow.date}>
                        <TableCell component="th" scope="row">
                          {historyRow.date}
                        </TableCell>
                        <TableCell>{historyRow.compCallIr}</TableCell>
                        <TableCell align="right">
                          {historyRow.compPutIr}
                        </TableCell>
                        <TableCell align="right">{historyRow.compCp}</TableCell>
                        <TableCell align="right">
                          {historyRow.compHvtv}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Company Name</TableCell>
              <TableCell align="center">Call IR</TableCell>
              <TableCell align="center">Put IR</TableCell>
              <TableCell align="center">CP Ratio</TableCell>
              <TableCell align="center">HVTF</TableCell>
              {/* <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default CollapsableTable;
