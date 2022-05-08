import { CircularProgress } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import abbreviateNumber from '../../Common/NumberFormat';

const Growth = ({data,Loading}) => {
    const[Growthdata, setGrowthdata] = useState([]);
    var name = [
        'EBIT growth',
        'EBITDA growth',
        'Free Cash Flow Firm Growth',
        'Basic EPS Annual Growth',
        'Invested Capital Growth',
        'Net Profit growth',
        'Net Working Capital growth',
        'NOPAT Growth',
        'Operating Cash Flow Growth',
        'Revenue growth',
    ]

    useEffect(() => {
        if (data && data.length > 0) {
            var current = [
                {
                    col0: name[0],
                    col1: data[0]?.ebitGrowth,
                    col2: data[1]?.ebitGrowth,
                    col3: data[2]?.ebitGrowth,
                    col4: data[3]?.ebitGrowth,
                    col5: data[4]?.ebitGrowth,
                    col6: data[5]?.ebitGrowth,
                    col7: data[6]?.ebitGrowth,
                    col8: data[7]?.ebitGrowth,
                    col9: data[8]?.ebitGrowth,
                    col10: data[9]?.ebitGrowth,
                },
                {
                    col0: name[1],
                    col1: data[0]?.ebitdaGrowth,
                    col2: data[1]?.ebitdaGrowth,
                    col3: data[2]?.ebitdaGrowth,
                    col4: data[3]?.ebitdaGrowth,
                    col5: data[4]?.ebitdaGrowth,
                    col6: data[5]?.ebitdaGrowth,
                    col7: data[6]?.ebitdaGrowth,
                    col8: data[7]?.ebitdaGrowth,
                    col9: data[8]?.ebitdaGrowth,
                    col10: data[9]?.ebitdaGrowth,
                },
                {
                    col0: name[2],
                    col1: data[0]?.freeCashFlowGrowth,
                    col2: data[1]?.freeCashFlowGrowth,
                    col3: data[2]?.freeCashFlowGrowth,
                    col4: data[3]?.freeCashFlowGrowth,
                    col5: data[4]?.freeCashFlowGrowth,
                    col6: data[5]?.freeCashFlowGrowth,
                    col7: data[6]?.freeCashFlowGrowth,
                    col8: data[7]?.freeCashFlowGrowth,
                    col9: data[8]?.freeCashFlowGrowth,
                    col10: data[9]?.freeCashFlowGrowth,
                },
                {
                    col0: name[3],
                    col1: data[0]?.incomeNetPerWabsoSplitAdjustedYoyDeltaPercent,
                    col2: data[1]?.incomeNetPerWabsoSplitAdjustedYoyDeltaPercent,
                    col3: data[2]?.incomeNetPerWabsoSplitAdjustedYoyDeltaPercent,
                    col4: data[3]?.incomeNetPerWabsoSplitAdjustedYoyDeltaPercent,
                    col5: data[4]?.incomeNetPerWabsoSplitAdjustedYoyDeltaPercent,
                    col6: data[5]?.incomeNetPerWabsoSplitAdjustedYoyDeltaPercent,
                    col7: data[6]?.incomeNetPerWabsoSplitAdjustedYoyDeltaPercent,
                    col8: data[7]?.incomeNetPerWabsoSplitAdjustedYoyDeltaPercent,
                    col9: data[8]?.incomeNetPerWabsoSplitAdjustedYoyDeltaPercent,
                    col10: data[9]?.incomeNetPerWabsoSplitAdjustedYoyDeltaPercent,
                },
                {
                    col0: name[4],
                    col1: data[0]?.investedCapitalGrowth,
                    col2: data[1]?.investedCapitalGrowth,
                    col3: data[2]?.investedCapitalGrowth,
                    col4: data[3]?.investedCapitalGrowth,
                    col5: data[4]?.investedCapitalGrowth,
                    col6: data[5]?.investedCapitalGrowth,
                    col7: data[6]?.investedCapitalGrowth,
                    col8: data[7]?.investedCapitalGrowth,
                    col9: data[8]?.investedCapitalGrowth,
                    col10: data[9]?.investedCapitalGrowth,
                },
                {
                    col0: name[5],
                    col1: data[0]?.netIncomeGrowth,
                    col2: data[1]?.netIncomeGrowth,
                    col3: data[2]?.netIncomeGrowth,
                    col4: data[3]?.netIncomeGrowth,
                    col5: data[4]?.netIncomeGrowth,
                    col6: data[5]?.netIncomeGrowth,
                    col7: data[6]?.netIncomeGrowth,
                    col8: data[7]?.netIncomeGrowth,
                    col9: data[8]?.netIncomeGrowth,
                    col10: data[9]?.netIncomeGrowth,
                },
                {
                    col0: name[6],
                    col1: data[0]?.netWorkingCapitalGrowth,
                    col2: data[1]?.netWorkingCapitalGrowth,
                    col3: data[2]?.netWorkingCapitalGrowth,
                    col4: data[3]?.netWorkingCapitalGrowth,
                    col5: data[4]?.netWorkingCapitalGrowth,
                    col6: data[5]?.netWorkingCapitalGrowth,
                    col7: data[6]?.netWorkingCapitalGrowth,
                    col8: data[7]?.netWorkingCapitalGrowth,
                    col9: data[8]?.netWorkingCapitalGrowth,
                    col10: data[9]?.netWorkingCapitalGrowth,
                },
                {
                    col0: name[7],
                    col1: data[0]?.nopatGrowth,
                    col2: data[1]?.nopatGrowth,
                    col3: data[2]?.nopatGrowth,
                    col4: data[3]?.nopatGrowth,
                    col5: data[4]?.nopatGrowth,
                    col6: data[5]?.nopatGrowth,
                    col7: data[6]?.nopatGrowth,
                    col8: data[7]?.nopatGrowth,
                    col9: data[8]?.nopatGrowth,
                    col10: data[9]?.nopatGrowth,
                },
                {
                    col0: name[8],
                    col1: data[0]?.operatingCashFlowGrowth,
                    col2: data[1]?.operatingCashFlowGrowth,
                    col3: data[2]?.operatingCashFlowGrowth,
                    col4: data[3]?.operatingCashFlowGrowth,
                    col5: data[4]?.operatingCashFlowGrowth,
                    col6: data[5]?.operatingCashFlowGrowth,
                    col7: data[6]?.operatingCashFlowGrowth,
                    col8: data[7]?.operatingCashFlowGrowth,
                    col9: data[8]?.operatingCashFlowGrowth,
                    col10: data[9]?.operatingCashFlowGrowth,
                },
                {
                    col0: name[9],
                    col1: data[0]?.revenueGrowth,
                    col2: data[1]?.revenueGrowth,
                    col3: data[2]?.revenueGrowth,
                    col4: data[3]?.revenueGrowth,
                    col5: data[4]?.revenueGrowth,
                    col6: data[5]?.revenueGrowth,
                    col7: data[6]?.revenueGrowth,
                    col8: data[7]?.revenueGrowth,
                    col9: data[8]?.revenueGrowth,
                    col10: data[9]?.revenueGrowth,
                },
            ]
        setGrowthdata(current)
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
                            {!Loading && Growthdata && Growthdata.length > 0 && Growthdata.map((ob, i) => {
                                return (
                                    <tr key={i}>
                                        {ob.col0 && <td>{ob.col0}</td>}
                                        { <td class="float-end">
                                                <div class="form-check mb-0">
                                                    <input class="form-check-input" type="checkbox" value="" id="" />
                                                </div>
                                            </td>}
                                        {ob.col1 && <td>{abbreviateNumber(ob.col1)}</td>}
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

export default Growth;