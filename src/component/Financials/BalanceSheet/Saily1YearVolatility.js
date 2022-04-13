import React from 'react'

const Saily1YearVolatility = ({data}) => {
    console.log('data',data);
    return (
        <>
            <h6 className="mb-4"><strong>AAPL: Saily 1 Year Volatility Chart</strong></h6>
            <div className="table-responsive">
                <table className="table table-bordered m-0 most_tables">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">Current Assets</th>
                            <th scope="col">Q1 2022</th>
                            <th scope="col">Q4 2021</th>
                            <th scope="col">Q3 2021</th>
                            <th scope="col">Q2 2021</th>
                            <th scope="col">Q1 2021</th>
                        </tr>
                    </thead>
                    <tbody className="border-top-0">
                        {data && data?.length > 0 && data.map((ob,i)=>{
                            return(
                                <tr>
                                    <td>{ob.name}</td>
                                    <td>{ob.col1}</td>
                                    <td>{ob.col2}</td>
                                    <td>{ob.col3}</td>
                                    <td>{ob.col4}</td>
                                    <td>{ob.col5}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <tbody className="border-top-0">
                        <tr>
                            <td className="p-3"></td>
                        </tr>
                    </tbody>
                    <thead className="table-light border-top-0">
                        <tr>
                            <th scope="col">Non-Current Assets</th>
                            <th scope="col">Q1 2022</th>
                            <th scope="col">Q4 2021</th>
                            <th scope="col">Q3 2021</th>
                            <th scope="col">Q2 2021</th>
                            <th scope="col">Q1 2021</th>
                        </tr>
                    </thead>
                    <tbody className="border-top-0">
                        <tr>
                            <td>PropertyPlantEquipment</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                        </tr>
                        <tr>
                            <td>IntangibleAssets</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                        </tr>
                        <tr>
                            <td>Goodwill</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                        </tr>
                        <tr>
                            <td>OtherCurrentAssets</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                        </tr>
                        <tr>
                            <td>Long Term Investments</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                        </tr>
                        <tr>
                            <td>Other Non-Current Assets</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                        </tr>
                        <tr>
                            <td>Non-Current Assets Total</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                        </tr>
                        <tr>
                            <td className="p-3"></td>
                        </tr>
                        <tr>
                            <td>TotalAssets</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                            <td>639M</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Saily1YearVolatility