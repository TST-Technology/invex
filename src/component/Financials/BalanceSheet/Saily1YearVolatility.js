import { CircularProgress } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import abbreviateNumber from '../../Common/NumberFormat'

const Saily1YearVolatility = ({ data, Loading }) => {
    const [SailyChart, setSailyChart] = useState([])
    const [NonCurrent, setNonCurrent] = useState([])
    var name = [
        'Cash, Cash Equivalents & Short Term Investments',
        'Receivables',
        'Inventory',
        'OtherCurrentAssets',
        'Current Assets Total',
    ]
    var nonName = [
        'PropertyPlantEquipment',
        'IntangibleAssets',
        'Goodwill',
        'Long Term Investments',
        'OtherCurrentAssets',
        'Other Non-Current Assets',
        'Non-Current Assets Total',
        'TotalAssets',
    ]
    useEffect(() => {
        if (data && data.length > 0) {
            var SailyChartData = [
                {
                    col0: name[0],
                    col1: data[0]?.currentCash,
                    col2: data[1]?.currentCash,
                    col3: data[2]?.currentCash,
                    col4: data[3]?.currentCash,
                    col5: data[4]?.currentCash,
                    col6: data[5]?.currentCash,
                    col7: data[6]?.currentCash,
                    col8: data[7]?.currentCash,
                    col9: data[8]?.currentCash,
                    col10: data[9]?.currentCash,
                },
                {
                    col0: name[1],
                    col1: data[0]?.receivables,
                    col2: data[1]?.receivables,
                    col3: data[2]?.receivables,
                    col4: data[3]?.receivables,
                    col5: data[4]?.receivables,
                    col6: data[5]?.receivables,
                    col7: data[6]?.receivables,
                    col8: data[7]?.receivables,
                    col9: data[8]?.receivables,
                    col10: data[9]?.receivables,
                },
                {
                    col0: name[2],
                    col1: data[0]?.inventory,
                    col2: data[1]?.inventory,
                    col3: data[2]?.inventory,
                    col4: data[3]?.inventory,
                    col5: data[4]?.inventory,
                    col6: data[5]?.inventory,
                    col7: data[6]?.inventory,
                    col8: data[7]?.inventory,
                    col9: data[8]?.inventory,
                    col10: data[9]?.inventory,
                },
                {
                    col0: name[3],
                    col1: data[0]?.otherCurrentAssets,
                    col2: data[1]?.otherCurrentAssets,
                    col3: data[2]?.otherCurrentAssets,
                    col4: data[3]?.otherCurrentAssets,
                    col5: data[4]?.otherCurrentAssets,
                    col6: data[5]?.otherCurrentAssets,
                    col7: data[6]?.otherCurrentAssets,
                    col8: data[7]?.otherCurrentAssets,
                    col9: data[8]?.otherCurrentAssets,
                    col10: data[9]?.otherCurrentAssets,
                },
                {
                    col0: name[4],
                    col1: data[0]?.currentAssets,
                    col2: data[1]?.currentAssets,
                    col3: data[2]?.currentAssets,
                    col4: data[3]?.currentAssets,
                    col5: data[4]?.currentAssets,
                    col6: data[5]?.currentAssets,
                    col7: data[6]?.currentAssets,
                    col8: data[7]?.currentAssets,
                    col9: data[8]?.currentAssets,
                    col10: data[9]?.currentAssets,
                }
            ]
            setSailyChart(SailyChartData)
            var nonCurrent = [
                {
                    col0: nonName[0],
                    col1: data[0]?.propertyPlantEquipment,
                    col2: data[1]?.propertyPlantEquipment,
                    col3: data[2]?.propertyPlantEquipment,
                    col4: data[3]?.propertyPlantEquipment,
                    col5: data[4]?.propertyPlantEquipment,
                    col6: data[5]?.propertyPlantEquipment,
                    col7: data[6]?.propertyPlantEquipment,
                    col8: data[7]?.propertyPlantEquipment,
                    col9: data[8]?.propertyPlantEquipment,
                    col10: data[9]?.propertyPlantEquipment,
                },
                {
                    col0: nonName[1],
                    col1: data[0]?.intangibleAssets,
                    col2: data[1]?.intangibleAssets,
                    col3: data[2]?.intangibleAssets,
                    col4: data[3]?.intangibleAssets,
                    col5: data[4]?.intangibleAssets,
                    col6: data[5]?.intangibleAssets,
                    col7: data[6]?.intangibleAssets,
                    col8: data[7]?.intangibleAssets,
                    col9: data[8]?.intangibleAssets,
                    col10: data[9]?.intangibleAssets,
                },
                {
                    col0: nonName[2],
                    col1: data[0]?.goodwill,
                    col2: data[1]?.goodwill,
                    col3: data[2]?.goodwill,
                    col4: data[3]?.goodwill,
                    col5: data[4]?.goodwill,
                    col6: data[5]?.goodwill,
                    col7: data[6]?.goodwill,
                    col8: data[7]?.goodwill,
                    col9: data[8]?.goodwill,
                    col10: data[9]?.goodwill,
                },
                {
                    col0: nonName[3],
                    col1: data[0]?.longTermInvestmentsWithoutCurrentAssets,
                    col2: data[1]?.longTermInvestmentsWithoutCurrentAssets,
                    col3: data[2]?.longTermInvestmentsWithoutCurrentAssets,
                    col4: data[3]?.longTermInvestmentsWithoutCurrentAssets,
                    col5: data[4]?.longTermInvestmentsWithoutCurrentAssets,
                    col6: data[5]?.longTermInvestmentsWithoutCurrentAssets,
                    col7: data[6]?.longTermInvestmentsWithoutCurrentAssets,
                    col8: data[7]?.longTermInvestmentsWithoutCurrentAssets,
                    col9: data[8]?.longTermInvestmentsWithoutCurrentAssets,
                    col10: data[9]?.longTermInvestmentsWithoutCurrentAssets,
                },
                {
                    col0: nonName[4],
                    col1: data[0]?.otherCurrentAssets,
                    col2: data[1]?.otherCurrentAssets,
                    col3: data[2]?.otherCurrentAssets,
                    col4: data[3]?.otherCurrentAssets,
                    col5: data[4]?.otherCurrentAssets,
                    col6: data[5]?.otherCurrentAssets,
                    col7: data[6]?.otherCurrentAssets,
                    col8: data[7]?.otherCurrentAssets,
                    col9: data[8]?.otherCurrentAssets,
                    col10: data[9]?.otherCurrentAssets,
                },
                {
                    col0: nonName[5],
                    col1: data[0]?.totalLiabilities,
                    col2: data[1]?.totalLiabilities,
                    col3: data[2]?.totalLiabilities,
                    col4: data[3]?.totalLiabilities,
                    col5: data[4]?.totalLiabilities,
                    col6: data[5]?.totalLiabilities,
                    col7: data[6]?.totalLiabilities,
                    col8: data[7]?.totalLiabilities,
                    col9: data[8]?.totalLiabilities,
                    col10: data[9]?.totalLiabilities,
                },
                {
                    col0: nonName[6],
                    col1: data[0]?.longTermInvestments,
                    col2: data[1]?.longTermInvestments,
                    col3: data[2]?.longTermInvestments,
                    col4: data[3]?.longTermInvestments,
                    col5: data[4]?.longTermInvestments,
                    col6: data[5]?.longTermInvestments,
                    col7: data[6]?.longTermInvestments,
                    col8: data[7]?.longTermInvestments,
                    col9: data[8]?.longTermInvestments,
                    col10: data[9]?.longTermInvestments,
                },
                {
                    col0: nonName[7],
                    col1: data[0]?.totalAssets,
                    col2: data[1]?.totalAssets,
                    col3: data[2]?.totalAssets,
                    col4: data[3]?.totalAssets,
                    col5: data[4]?.totalAssets,
                    col6: data[5]?.totalAssets,
                    col7: data[6]?.totalAssets,
                    col8: data[7]?.totalAssets,
                    col9: data[8]?.totalAssets,
                    col10: data[9]?.totalAssets,
                }
            ]
            setNonCurrent(nonCurrent)
        }

    }, [data])

    return (
        <>
            <h6 className="mb-4"><strong>AAPL: Saily 1 Year Volatility Chart</strong></h6>
            <div className="table-responsive">
                <table className="table table-bordered m-0 most_tables">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">Current Assets</th>
                            {data && data.length > 0 && data.map((el, i) => {
                                return (
                                    <th key={i} scope="col">{el.quarter > 0 ? 'Q' + el.quarter : ''} {el.year}</th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody className="border-top-0">
                        {Loading && <tr style={{ height: 100, textAlign: 'center' }}>
                            <td colSpan={6} style={{ textAlign: 'center' }}><CircularProgress size={50} /></td>
                        </tr>}
                        {!Loading && SailyChart && SailyChart?.length > 0 && SailyChart.map((ob, i) => {
                            return (
                                <tr key={i}>
                                    {ob.col0 && <td>{ob.col0}</td>}
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
                <br />
                <table className="table table-bordered m-0 most_tables">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">Non-Current Assets</th>
                            {data && data.length > 0 && data.map((el, i) => {
                                return (
                                    <th key={i} scope="col">{el.quarter > 0 ? 'Q' + el.quarter : ''} {el.year}</th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody className="border-top-0">
                        {Loading && <tr style={{ height: 100, textAlign: 'center' }}>
                            <td colSpan={6} style={{ textAlign: 'center' }}><CircularProgress size={50} /></td>
                        </tr>}
                        {!Loading && NonCurrent && NonCurrent?.length > 0 && NonCurrent.map((ob, i) => {
                            return (
                                <tr key={i}>
                                    {ob.col0 && <td>{ob.col0}</td>}
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
        </>
    )
}

export default Saily1YearVolatility