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
        name: "marketCap",
        label: "Current price",
        options: {
            filter: true,
            sort: true,
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


export const topTableData = [
    {
        ticker:"PHM",
        marketCap: 4100,
        curPrice: 13.25,
        weekLow: 13.25,
        weekHigh: 13.25,
        underValued: 13.25
    },
    {
        ticker:"LEN",
        marketCap: 4100,
        curPrice: 13.25,
        weekLow: 13.25,
        weekHigh: 13.25,
        underValued: 13.25
    },
    {
        ticker:"PHM",
        marketCap: 4100,
        curPrice: 13.25,
        weekLow: 13.25,
        weekHigh: 13.25,
        underValued: 13.25
    },
    {
        ticker:"LEN",
        marketCap: 4100,
        curPrice: 13.25,
        weekLow: 13.25,
        weekHigh: 13.25,
        underValued: 13.25
    },
    {
        ticker:"PHM",
        marketCap: 4100,
        curPrice: 13.25,
        weekLow: 13.25,
        weekHigh: 13.25,
        underValued: 13.25
    },
    {
        ticker:"LEN",
        marketCap: 4100,
        curPrice: 13.25,
        weekLow: 13.25,
        weekHigh: 13.25,
        underValued: 13.25
    },
    {
        ticker:"PHM",
        marketCap: 4100,
        curPrice: 13.25,
        weekLow: 13.25,
        weekHigh: 13.25,
        underValued: 13.25
    },
    {
        ticker:"LEN",
        marketCap: 4100,
        curPrice: 13.25,
        weekLow: 13.25,
        weekHigh: 13.25,
        underValued: 13.25
    },
    {
        ticker:"PHM",
        marketCap: 4100,
        curPrice: 13.25,
        weekLow: 13.25,
        weekHigh: 13.25,
        underValued: 13.25
    },
    {
        ticker:"LEN",
        marketCap: 4100,
        curPrice: 13.25,
        weekLow: 13.25,
        weekHigh: 13.25,
        underValued: 13.25
    },
    {
        ticker:"PHM",
        marketCap: 4100,
        curPrice: 13.25,
        weekLow: 13.25,
        weekHigh: 13.25,
        underValued: 13.25
    },
    {
        ticker:"LEN",
        marketCap: 4100,
        curPrice: 13.25,
        weekLow: 13.25,
        weekHigh: 13.25,
        underValued: 13.25
    },
    {
        ticker:"PHM",
        marketCap: 4100,
        curPrice: 13.25,
        weekLow: 13.25,
        weekHigh: 13.25,
        underValued: 13.25
    },
    {
        ticker:"LEN",
        marketCap: 4100,
        curPrice: 13.25,
        weekLow: 13.25,
        weekHigh: 13.25,
        underValued: 13.25
    },
    {
        ticker:"PHM",
        marketCap: 4100,
        curPrice: 13.25,
        weekLow: 13.25,
        weekHigh: 13.25,
        underValued: 13.25
    },
    {
        ticker:"LEN",
        marketCap: 4100,
        curPrice: 13.25,
        weekLow: 13.25,
        weekHigh: 13.25,
        underValued: 13.25
    },
    {
        ticker:"PHM",
        marketCap: 4100,
        curPrice: 13.25,
        weekLow: 13.25,
        weekHigh: 13.25,
        underValued: 13.25
    },
    {
        ticker:"LEN",
        marketCap: 4100,
        curPrice: 13.25,
        weekLow: 13.25,
        weekHigh: 13.25,
        underValued: 13.25
    },
]






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
        name: "delayedPrice",
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
        name: "high",
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

export const belowTableData = [
    {
        symbol:"PHM",
        price:4100,
        change:{
            dir:"up",
            data:13.25
        },
        marketCao: 13.25,
        volume: 13.25
    },
    {
        symbol:"LEN",
        price:4100,
        change:{
            dir:"down",
            data:13.25
        },
        marketCao: 13.25,
        volume: 13.25
    },
    {
        symbol:"PHM",
        price:4100,
        change:{
            dir:"up",
            data:13.25
        },
        marketCao: 13.25,
        volume: 13.25
    },
    {
        symbol:"LEN",
        price:4100,
        change:{
            dir:"down",
            data:13.25
        },
        marketCao: 13.25,
        volume: 13.25
    },
    {
        symbol:"PHM",
        price:4100,
        change:{
            dir:"up",
            data:13.25
        },
        marketCao: 13.25,
        volume: 13.25
    },
    {
        symbol:"LEN",
        price:4100,
        change:{
            dir:"down",
            data:13.25
        },
        marketCao: 13.25,
        volume: 13.25
    },
    {
        symbol:"PHM",
        price:4100,
        change:{
            dir:"up",
            data:13.25
        },
        marketCao: 13.25,
        volume: 13.25
    },
    {
        symbol:"LEN",
        price:4100,
        change:{
            dir:"down",
            data:13.25
        },
        marketCao: 13.25,
        volume: 13.25
    },
    {
        symbol:"PHM",
        price:4100,
        change:{
            dir:"up",
            data:13.25
        },
        marketCao: 13.25,
        volume: 13.25
    },
    {
        symbol:"LEN",
        price:4100,
        change:{
            dir:"down",
            data:13.25
        },
        marketCao: 13.25,
        volume: 13.25
    },
    {
        symbol:"PHM",
        price:4100,
        change:{
            dir:"up",
            data:13.25
        },
        marketCao: 13.25,
        volume: 13.25
    },
    {
        symbol:"LEN",
        price:4100,
        change:{
            dir:"down",
            data:13.25
        },
        marketCao: 13.25,
        volume: 13.25
    },
    {
        symbol:"PHM",
        price:4100,
        change:{
            dir:"up",
            data:13.25
        },
        marketCao: 13.25,
        volume: 13.25
    },
    {
        symbol:"LEN",
        price:4100,
        change:{
            dir:"down",
            data:13.25
        },
        marketCao: 13.25,
        volume: 13.25
    },
    {
        symbol:"PHM",
        price:4100,
        change:{
            dir:"up",
            data:13.25
        },
        marketCao: 13.25,
        volume: 13.25
    },
    {
        symbol:"LEN",
        price:4100,
        change:{
            dir:"down",
            data:13.25
        },
        marketCao: 13.25,
        volume: 13.25
    },
    {
        symbol:"PHM",
        price:4100,
        change:{
            dir:"up",
            data:13.25
        },
        marketCao: 13.25,
        volume: 13.25
    },
    {
        symbol:"LEN",
        price:4100,
        change:{
            dir:"down",
            data:13.25
        },
        marketCao: 13.25,
        volume: 13.25
    },
    {
        symbol:"PHM",
        price:4100,
        change:{
            dir:"up",
            data:13.25
        },
        marketCao: 13.25,
        volume: 13.25
    },
    {
        symbol:"LEN",
        price:4100,
        change:{
            dir:"down",
            data:13.25
        },
        marketCao: 13.25,
        volume: 13.25
    },
]