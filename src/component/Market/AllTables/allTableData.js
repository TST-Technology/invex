export const topTableColumns = [
    {
        name: "symbol",
        label: "symbol",
        options: {
            filter: true,
            sort: true,
            setCellProps: () => ({
                style: {
                  whiteSpace: "nowrap",
                  fontWeight:"bold",
                }
            }),
            customHeadRender: (columnMeta, updateDirection) =>{
                return(
                    <th className="MuiTableCell-root MuiTableCell-head MUIDataTableHeadCell-root-3433 MUIDataTableHeadCell-fixedHeader-3434" scope="col">
                        <span role="button" className="MUIDataTableHeadCell-toolButton-3441" data-testid="headcol-1" tabindex="0">
                            <div className="MUIDataTableHeadCell-sortAction-3438" title="Sort">
                                <div className="MUIDataTableHeadCell-data-3437">
                                    <span style={{fontWeight:"bold"}}>
                                        {columnMeta.label}
                                    </span>
                                </div>
                                <div className="MUIDataTableHeadCell-sortAction-3438">
                                    <span className="MuiButtonBase-root MuiTableSortLabel-root MUIDataTableHeadCell-sortLabelRoot-3439" tabindex="0" role="button" aria-disabled="false"></span>
                                </div>
                            </div>
                        </span>
                    </th> 
                )
            }
        }
    },
    {
        name: "latestPrice",
        label: "Current price",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "week52Low",
        label: "52 Week low",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "week52High",
        label: "52 Week high",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "open",
        label: "Under valued",
        options: {
            filter: true,
            sort: true,
        }
    }
];


export const belowTableColumns = [
    {
        name: "symbol",
        label: "Symbol",
        options: {
            filter: true,
            sort: true,
            setCellProps: () => ({
                style: {
                  whiteSpace: "nowrap",
                  fontWeight:"bold",
                }
            }),
            customHeadRender: (columnMeta, updateDirection) =>{
                return(
                    <th className="MuiTableCell-root MuiTableCell-head MUIDataTableHeadCell-root-3433 MUIDataTableHeadCell-fixedHeader-3434" scope="col">
                        <span role="button" className="MUIDataTableHeadCell-toolButton-3441" data-testid="headcol-1" tabindex="0">
                            <div className="MUIDataTableHeadCell-sortAction-3438" title="Sort">
                                <div className="MUIDataTableHeadCell-data-3437">
                                    <span style={{fontWeight:"bold"}}>
                                        {columnMeta.label}
                                    </span>
                                </div>
                                <div className="MUIDataTableHeadCell-sortAction-3438">
                                    <span className="MuiButtonBase-root MuiTableSortLabel-root MUIDataTableHeadCell-sortLabelRoot-3439" tabindex="0" role="button" aria-disabled="false"></span>
                                </div>
                            </div>
                        </span>
                    </th> 
                )
            }
        }
    },
    {
        name: "latestPrice",
        label: "Price",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "change",
        label: "Change",
        options: {
            filter: true,
            sort: false,
            customBodyRender: (value, tableMeta, updateValue) =>{
                return (
                    <span style={{color:(value > 0 ? "#13A41B" : "#DF0822")}}>
                        {value}
                    </span>
                )
            }
        },
    },
    {
        name: "marketCap",
        label: "Market Cao (B)",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "volume",
        label: "Volume",
        options: {
            filter: true,
            sort: true,
        }
    }
]