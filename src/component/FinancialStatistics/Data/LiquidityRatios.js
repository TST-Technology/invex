import { CircularProgress } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import abbreviateNumber from '../../Common/NumberFormat';

const LiquidityRatios = ({data,Loading}) => {
    const[LiquidityRatiosdata, setLiquidityRatiosdata] = useState([]);
    var name = [
        'Current Ratio',
        'Quick Ratio',
        'Equity Multiplier',
        'Preferred Equity to Total Capital',
        'Interest Coverage',
        'Operating Cash Flow Interest Coverage Ratio',
        'Interest Burden',
    ]

    useEffect(() => {
        if (data && data.length > 0) {
            var current = [
                {
                    col0: name[0],
                    col1: data[0]?.currentRatio,
                    col2: data[1]?.currentRatio,
                    col3: data[2]?.currentRatio,
                    col4: data[3]?.currentRatio,
                    col5: data[4]?.currentRatio,
                    col6: data[5]?.currentRatio,
                    col7: data[6]?.currentRatio,
                    col8: data[7]?.currentRatio,
                    col9: data[8]?.currentRatio,
                    col10: data[9]?.currentRatio,
                },
                {
                    col0: name[1],
                    col1: data[0]?.quickRatio,
                    col2: data[1]?.quickRatio,
                    col3: data[2]?.quickRatio,
                    col4: data[3]?.quickRatio,
                    col5: data[4]?.quickRatio,
                    col6: data[5]?.quickRatio,
                    col7: data[6]?.quickRatio,
                    col8: data[7]?.quickRatio,
                    col9: data[8]?.quickRatio,
                    col10: data[9]?.quickRatio,
                },
                {
                    col0: name[2],
                    col1: data[0]?.assetsToEquity,
                    col2: data[1]?.assetsToEquity,
                    col3: data[2]?.assetsToEquity,
                    col4: data[3]?.assetsToEquity,
                    col5: data[4]?.assetsToEquity,
                    col6: data[5]?.assetsToEquity,
                    col7: data[6]?.assetsToEquity,
                    col8: data[7]?.assetsToEquity,
                    col9: data[8]?.assetsToEquity,
                    col10: data[9]?.assetsToEquity,
                },
                {
                    col0: name[3],
                    col1: data[0]?.preferredEquityToCapital,
                    col2: data[1]?.preferredEquityToCapital,
                    col3: data[2]?.preferredEquityToCapital,
                    col4: data[3]?.preferredEquityToCapital,
                    col5: data[4]?.preferredEquityToCapital,
                    col6: data[5]?.preferredEquityToCapital,
                    col7: data[6]?.preferredEquityToCapital,
                    col8: data[7]?.preferredEquityToCapital,
                    col9: data[8]?.preferredEquityToCapital,
                    col10: data[9]?.preferredEquityToCapital,
                },
                {
                    col0: name[4],
                    col1: data[0]?.ebitToInterestExpense,
                    col2: data[1]?.ebitToInterestExpense,
                    col3: data[2]?.ebitToInterestExpense,
                    col4: data[3]?.ebitToInterestExpense,
                    col5: data[4]?.ebitToInterestExpense,
                    col6: data[5]?.ebitToInterestExpense,
                    col7: data[6]?.ebitToInterestExpense,
                    col8: data[7]?.ebitToInterestExpense,
                    col9: data[8]?.ebitToInterestExpense,
                    col10: data[9]?.ebitToInterestExpense,
                },
                {
                    col0: name[5],
                    col1: data[0]?.operatingCashFlowInterestCoverage,
                    col2: data[1]?.operatingCashFlowInterestCoverage,
                    col3: data[2]?.operatingCashFlowInterestCoverage,
                    col4: data[3]?.operatingCashFlowInterestCoverage,
                    col5: data[4]?.operatingCashFlowInterestCoverage,
                    col6: data[5]?.operatingCashFlowInterestCoverage,
                    col7: data[6]?.operatingCashFlowInterestCoverage,
                    col8: data[7]?.operatingCashFlowInterestCoverage,
                    col9: data[8]?.operatingCashFlowInterestCoverage,
                    col10: data[9]?.operatingCashFlowInterestCoverage,
                },
                {
                    col0: name[6],
                    col1: data[0]?.interestBurden,
                    col2: data[1]?.interestBurden,
                    col3: data[2]?.interestBurden,
                    col4: data[3]?.interestBurden,
                    col5: data[4]?.interestBurden,
                    col6: data[5]?.interestBurden,
                    col7: data[6]?.interestBurden,
                    col8: data[7]?.interestBurden,
                    col9: data[8]?.interestBurden,
                    col10: data[9]?.interestBurden,
                },
            ]
        setLiquidityRatiosdata(current)
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
                            {!Loading && LiquidityRatiosdata && LiquidityRatiosdata.length > 0 && LiquidityRatiosdata.map((ob, i) => {
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

export default LiquidityRatios;