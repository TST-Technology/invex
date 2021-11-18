import React from 'react';
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider,  } from '@material-ui/core/styles';

const CustomMuiDataTable = ({tableData}) => {

    const columns = [
        {
            name: "id",
            label: "No.",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "ticker",
            label: "Ticker",
            options: {
                filter: true,
                sort: true,
                setCellProps: () => ({
                    style: {
                      whiteSpace: "nowrap",
                      fontWeight:"bold",
                    }
                }),
            }
        },
        {
            name: "marketCap",
            label: "Market Cap",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "PE",
            label: "P/E",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "fwdPE",
            label: "FWD P/E",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "PEG",
            label: "PEG",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "PS",
            label: "P/S",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "PB",
            label: "P/B",
            options: {
                filter: true,
                sort: true,
            }
        },
    ];

    const options = {
        filter: false,
        responsive: 'standard',
        elevation: 0,
        selectableRowsHeader: false,
        selectableRows: 'none',
        textLabels:{
            pagination: {
                next: "Next Page",
                previous: "Previous Page",
                rowsPerPage: "Rows per page:",
                displayRows: "of",
            },
        }
    };

    const getMuiTheme = () => createTheme({
        overrides: {
            MUIDataTable: {
                root: {
                    backgroundColor: "#000"
                },
                paper:{
                    margin:"0 1em",
                    border:"1px solid #dee2e6",
                    fontFamily:"Poppins"
                }
            },
            MuiTableCell: {
                head: {
                  backgroundColor: '#000',
                },
            },
        }
    })

    return (
        <>
            <ThemeProvider theme={getMuiTheme()}>
                <MUIDataTable data={tableData} columns={columns} options={options}  />
            </ThemeProvider>
        </>
    )
}

export default CustomMuiDataTable
