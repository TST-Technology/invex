import React from "react";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const CustomTable = ({ columns, tableData, title }) => {
  const options = {
    filter: false,
    search: false,
    download: false,
    rows: false,
    print: false,
    paging: false,
    viewColumns: false,
    responsive: "standard",
    elevation: 0,
    selectableRowsHeader: false,
    selectableRows: "none",
    rowsPerPageOptions: false,
    page: false,
    pagination: false,
    // textLabels: {
    //   pagination: {
    //     next: "Next Page",
    //     previous: "Previous Page",
    //     rowsPerPage: "Rows per page:",
    //     displayRows: "of",
    //   },
    // },
  };

  const getMuiTheme = () =>
    createTheme({
      overrides: {
        MUIDataTable: {
          root: {
            backgroundColor: "#000",
          },
          paper: {
            border: "1px solid #dee2e6",
            fontFamily: "Poppins",
            borderRadius: 0,
          },
        },
        MuiTableCell: {
          head: {
            fontWeight: "bold",
            backgroundColor: "white",
            justifyContent: "center",
          },
          root: {
            fontFamily: "Poppins",
          },
        },
      },
    });

  return (
    <>
      <ThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
          data={tableData}
          columns={columns}
          options={options}
          title={title}
        />
      </ThemeProvider>
    </>
  );
};

export default CustomTable;
