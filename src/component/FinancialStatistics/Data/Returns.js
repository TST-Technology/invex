import { CircularProgress } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import abbreviateNumber from '../../Common/NumberFormat';

const Returns = ({data,Loading}) =>{
    const[Returnsdata, setReturnsdata] = useState([]);
    var name = [
        'Operating Return on Assets (OROA)',
        'Return on Assets (ROA)',
        'Return on Equity (ROE)',
        'Return on Capital Employed (ROCE)',
        'Return on Invested Capital (ROIC)',
    ]

    useEffect(() => {
        if (data && data.length > 0) {
            var current = [
                {
                    col0: name[0],
                    col1: data[0]?.operatingReturnOnAssets,
                    col2: data[1]?.operatingReturnOnAssets,
                    col3: data[2]?.operatingReturnOnAssets,
                    col4: data[3]?.operatingReturnOnAssets,
                    col5: data[4]?.operatingReturnOnAssets,
                    col6: data[5]?.operatingReturnOnAssets,
                    col7: data[6]?.operatingReturnOnAssets,
                    col8: data[7]?.operatingReturnOnAssets,
                    col9: data[8]?.operatingReturnOnAssets,
                    col10: data[9]?.operatingReturnOnAssets,
                },
                {
                    col0: name[1],
                    col1: data[0]?.returnOnAssets,
                    col2: data[1]?.returnOnAssets,
                    col3: data[2]?.returnOnAssets,
                    col4: data[3]?.returnOnAssets,
                    col5: data[4]?.returnOnAssets,
                    col6: data[5]?.returnOnAssets,
                    col7: data[6]?.returnOnAssets,
                    col8: data[7]?.returnOnAssets,
                    col9: data[8]?.returnOnAssets,
                    col10: data[9]?.returnOnAssets,
                },
                {
                    col0: name[2],
                    col1: data[0]?.returnOnEquity,
                    col2: data[1]?.returnOnEquity,
                    col3: data[2]?.returnOnEquity,
                    col4: data[3]?.returnOnEquity,
                    col5: data[4]?.returnOnEquity,
                    col6: data[5]?.returnOnEquity,
                    col7: data[6]?.returnOnEquity,
                    col8: data[7]?.returnOnEquity,
                    col9: data[8]?.returnOnEquity,
                    col10: data[9]?.returnOnEquity,
                },
                {
                    col0: name[3],
                    col1: data[0]?.roce,
                    col2: data[1]?.roce,
                    col3: data[2]?.roce,
                    col4: data[3]?.roce,
                    col5: data[4]?.roce,
                    col6: data[5]?.roce,
                    col7: data[6]?.roce,
                    col8: data[7]?.roce,
                    col9: data[8]?.roce,
                    col10: data[9]?.roce,
                },
                {
                    col0: name[4],
                    col1: data[0]?.roic,
                    col2: data[1]?.roic,
                    col3: data[2]?.roic,
                    col4: data[3]?.roic,
                    col5: data[4]?.roic,
                    col6: data[5]?.roic,
                    col7: data[6]?.roic,
                    col8: data[7]?.roic,
                    col9: data[8]?.roic,
                    col10: data[9]?.roic,
                },
            ]
        setReturnsdata(current)
        }
    }, [data])
    return(
        <div class="table-responsive mt-4">
        <table class="table table-bordered m-0 most_tables">
            <thead class="table-light">
                <tr>
                    <th scope="col">-</th>
                    <th scope="col">Historical Visualisation</th>
                    {data && data.length > 0 && data.map((el, i) => {
                                    return (
                                        <th key={i} scope="col">{el.quarter > 0 ? 'Q' + el.quarter : ''} {el.year}</th>
                                    )
                    })}
                  
                </tr>
            </thead>
            <tbody class="border-top-0">
                            {Loading && <tr style={{ height: 100, textAlign: 'center' }}>
                                <td colSpan={6} style={{textAlign:'center'}}><CircularProgress size={50} /></td>
                            </tr>}
                            {!Loading && Returnsdata && Returnsdata.length > 0 && Returnsdata.map((ob, i) => {
                                return (
                                    <tr key={i}>
                                        {ob.col0 && <td>{ob.col0}</td>}
                                        { <td class="float-end">
                                                <div class="form-check mb-0">
                                                    <input class="form-check-input" type="checkbox" value="" id="" />
                                                </div>
                                            </td>}
                                        {ob.col1 && <td>{abbreviateNumber(ob.col1.slice(0, 5))}</td>}
                                        {ob.col2 && <td>{abbreviateNumber(ob.col2)}</td>}
                                        {ob.col3 && <td>{abbreviateNumber(ob.col3)}</td>}
                                        {ob.col4 && <td>{abbreviateNumber(ob.col4)}</td>}
                                        {ob.col5 && <td>{abbreviateNumber(ob.col5)}</td>}
                                        {ob.col6 && <td>{abbreviateNumber(ob.col6)}</td>}
                                        {ob.col7 && <td>{abbreviateNumber(ob.col7)}</td>}
                                        {ob.col8 && <td>{abbreviateNumber(ob.col8)}</td>}
                                        {ob.col9 && <td>{abbreviateNumber(ob.col9)}</td>}
                                        {ob.col10 && <td>{abbreviateNumber(ob.col10)}</td>}
                                    </tr>
                                )
                            })}
            </tbody>
        </table>
    </div>
     )
}

export default Returns;