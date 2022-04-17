import React, { useEffect, useState } from 'react'
import { getAllIndustryById, getAllSectors, getAllSectorsById, getAllSectorsOverview } from '../api/sectors';
import industrialChart from "../Common/Images/industrial_chart.png";
import SectorChart from './SectorChart';
import topETFData from "./topETFData.json";
import { CircularProgress } from '@material-ui/core';

// const data = [
//     { name: "Consumer Discretionary", value: 600 },
//     { name: "Group B", value: 300 },
//     { name: "Group C", value: 561 },
//     { name: "Group D", value: 61 },
//     { name: "Consumer Discretionary", value: 41 },
//     { name: "Group D", value: 54 },
//     { name: "Group D", value: 80 },
//     { name: "Group D", value: 64 },
//     { name: "Group D", value: 50 },
//     { name: "Group D", value: 12 }
// ];

const SectorsContent = ({ sectorId, industryId, isLoading, setisLoading }) => {

    const [ChartData, setChartData] = useState([])

    useEffect(() => {
        (async () => {
            setisLoading(true)
            var res;
            if (sectorId) {
                res = await getAllSectorsById(sectorId);
                if (res && res?.status === 200 && res?.data) {
                    let tempArray = []
                    for (let data of res.data.Industry) {
                        let obj = {
                            name: data.name,
                            value: data.totalIndCap
                        }
                        tempArray.push(obj)
                    }
                    setChartData(tempArray)
                }
            }else {
                res = await getAllSectorsOverview();
                if (res && res?.status === 200 && res?.data) {
                    let temp = []
                    for (let data of res.data.Sector) {
                        let obj = {
                            name: data.name,
                            value: data.totalSectorCap
                        }
                        temp.push(obj)
                    }
                    setChartData(temp)
                }
            }
            setisLoading(false)
        })()
    }, [sectorId])


    useEffect(() => {
        (async () => {
            setisLoading(true)
            var res;
            if (industryId) {
                res = await getAllIndustryById(industryId);
                console.log('res getAllIndustryById',res);
                if (res && res?.status === 200 && res?.data) {
                    let tempArray = []
                    for (let data of res.data.IndustryWiseCompany) {
                        let obj = {
                            name: data.companyName,
                            value: data.marketCap
                        }
                        tempArray.push(obj)
                    }
                    setChartData(tempArray)
                }
            }
            setisLoading(false)
        })()
    }, [industryId])

    return (
        <>
            {isLoading && (
                <div className='col-sm-8' style={{
                    height: 500, textAlign: 'center', display: 'flex',
                    alignItems: 'center', justifyContent: 'center'
                }}>
                    <CircularProgress />
                </div>
            )}
            {!isLoading && <div className="col-lg-8">
                <div className="row">
                    <div className="col-lg-12 mb-5">
                        <div className="card companyviewblk compprofile_block mb-5">
                            <div className="card-header">
                                <div className="d-flex align-items-center justify-content-left bg-light p-2 border-bottom-0">
                                    <h6 className="m-0">
                                        <strong>Industrials: Aerospace & Defense</strong>
                                    </h6>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="description-para">
                                    <div className="key_status">
                                        <p className="mb-4">
                                            The aerospace & defense industry includes companies
                                            that manufacture aerospace and defense products,
                                            including aircraft and aircraft parts, tanks, guided
                                            missiles, space vehicles, ships and marine
                                            equipment, and other aerospace and defense
                                            components and systems, as well as companies
                                            supporting these products through repair and
                                            maintenance services.
                                        </p>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <a href="#" className="btn btn-light">
                                                Read More
                                            </a>
                                            <a
                                                href="#"
                                                className="btn btn-primary"
                                                data-bs-toggle="modal"
                                                data-bs-target="#filtermodal"
                                            >
                                                Find Investnment
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 mb-5">
                            <h6 className="mb-4">
                                <strong>
                                    Market Cap (billions) by Industrial Sector
                                </strong>
                            </h6>
                            <SectorChart data={ChartData} />
                            {/* <img src={industrialChart} alt="chart" className="img-fluid" /> */}
                        </div>

                        <div className="top_eta">
                            <div className="mb-5">
                                <div className="d-flex align-items-center justify-content-between border p-3 border-bottom-0">
                                    <h6 className="m-0">
                                        <strong>Top ETF Preformance</strong>
                                    </h6>
                                    <a href="javascript:void(0)" className="text-dark viewmore">
                                        View More
                                    </a>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-bordered m-0 most_tables">
                                        <thead className="table-light">
                                            <tr>
                                                <th scope="col">Symbol</th>
                                                <th scope="col">Market cap(B)</th>
                                                <th scope="col">Current price</th>
                                                <th scope="col">52 Week low</th>
                                                <th scope="col">52 Week high</th>
                                                <th scope="col">Under valued</th>
                                            </tr>
                                        </thead>
                                        <tbody className="border-top-0">
                                            {topETFData.map((etfData) => {
                                                const symb = etfData.symbol || "";
                                                const marketCap = etfData.marketCap || "";
                                                const currPrice = etfData.currPrice || "";
                                                const weekLow = etfData["52WeekLow"] || "";
                                                const weekHigh = etfData["52WeekHigh"] || "";
                                                const underValued = etfData.underValued || "";

                                                return (
                                                    <tr>
                                                        <td>{symb}</td>
                                                        <td>{marketCap}</td>
                                                        <td>{currPrice}</td>
                                                        <td>{weekLow}</td>
                                                        <td>{weekHigh}</td>
                                                        <td>{underValued}</td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </>
    )
}

export default SectorsContent