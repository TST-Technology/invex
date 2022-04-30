import React, { useEffect, useState } from 'react'
import { getAllIndustryById, getAllSectors, getAllSectorsById, getAllSectorsOverview , getSectorWiseDefination,getIndustryWiseDefination,getAllsectorDefination,getSectors,getSectorETF } from '../api/sectors';
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

const SectorsContent = ({ sectorId, industryId, isLoading, setisLoading,ChartData,setChartData,getAllSectorsData,setSectorId , setIndustryId, }) => {

    const [title,settitle]=useState('')
    const [defination,setdefination]=useState('')

    useEffect(() => {
        (async () => {
            setisLoading(true)
            var res;
            if (sectorId) {
                res = await getAllSectorsById(sectorId);
                if (res && res?.status === 200 && res?.data) {
                    settitle(res.data.sectorName);
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
                res = await getSectorWiseDefination(sectorId);
                if (res && res?.status === 200 && res?.data) {
                    setdefination(res.data.defination);
                }
            }else {
                await getAllSectorsData()
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
                    settitle(res.data.industryName);
                    let tempArray = [];
                    let industrys = res?.data?.IndustryWiseCompany?.sort((a,b)=> a.value < b.value ? 1 : -1)
                    let Top10 = industrys.slice(0,10);
                    for (let data of Top10) {
                        let obj = {
                            name: data.companyName,
                            value: data.marketCap
                        }
                        tempArray.push(obj)
                    }
                    let remaining = industrys?.slice(10).reduce((pv,cv)=>{
                        return pv + cv.marketCap
                    },0)
                    setChartData([...tempArray,{name:'Others',value:remaining,fill:'#000'}])
                }
                res = await getIndustryWiseDefination(industryId);
                if (res && res?.status === 200 && res?.data) {
                    setdefination(res.data.defination)
                }
            }
            setisLoading(false)
        })()
    }, [industryId])

    const [sectors, setSectors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [activeItem, setActiveItem] = useState();
    const [subActiveItem, setSubActiveItem] = useState();
    const [etfData,setEtfdata] = useState([]);

    useEffect(() => {
        (async () => {
        setLoading(true)
        var res = await getSectors()
        if (res && res?.status == 200 && res?.data?.length > 0) {
            setSectors(res.data)
        }
        setLoading(false)
        })()
    }, [])

    const checkActiveItems = (index,secId) =>{
        setSubActiveItem()
        if(secId){
        setSectorId(secId);
        }
        if(activeItem !== index){
        setActiveItem(index)
        }else{
        setActiveItem()
        }
    }

    const checkSubItemsActive = (sub,indId) =>{
        if(indId) {
        setIndustryId(indId)
        }
        if(subActiveItem !== sub){
        setSubActiveItem(sub)
        }else{
        setSubActiveItem()
        }
    }

    useEffect(() => {
        (async () => 
        {
            setisLoading(true)
            var res;
            if (sectorId)
            {
                res = await getSectorETF(sectorId);
                if (res && res?.status === 200 && res?.etfData)
                {
                    let tempArray = []
                    for (let data of res.etfData)
                    {
                        let obj = {
                            symbol: data.symbol,
                            companyName : data.companyName,
                            latestPrice: data.latestPrice,
                            change: data.change,
                            changePercent : data.changePercent,
                            marketCap: data.marketCap,
                            avgTotalVolume: data.avgTotalVolume,
                            week52Low : data.week52Low,
                            week52High : data.week52High,
                            beta : data.beta,
                            sharesOutstanding: data.sharesOutstanding,
                            month1ChangePercent : data.month1ChangePercent,
                            month3ChangePercent : data.month3ChangePercent,
                            month6ChangePercent : data.month6ChangePercent,
                            ytdChangePercent : data.ytdChangePercent,
                            year1ChangePercent : data.year1ChangePercent,
                            year5ChangePercent : data.year5ChangePercent
                        }
                        tempArray.push(obj)
                    }
                    setEtfdata(tempArray);
                }
            }else {
                await getSectorETF()
            }
            setisLoading(false)
        })()
        }, [sectorId])
        
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
                                        <strong>{title}</strong>
                                    </h6>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="description-para">
                                    <div className="key_status">
                                        <p className="mb-4">
                                            {/* The aerospace & defense industry includes companies
                                            that manufacture aerospace and defense products,
                                            including aircraft and aircraft parts, tanks, guided
                                            missiles, space vehicles, ships and marine
                                            equipment, and other aerospace and defense
                                            components and systems, as well as companies
                                            supporting these products through repair and
                                            maintenance services. */}
                                            {defination}
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
                                </div>
                        <div className="accordion" id="acc_sidefilter">
                                {loading && <div style={{ height: 110, padding:30, textAlign: 'center' }}>
                        <div colSpan={6} style={{ textAlign: 'center' }}><CircularProgress size={50} /></div>
                        </div>}
                        {!loading && sectors && sectors.length > 0 && sectors.map((items, i) => {
                            return (
                            <div key={i} className="in_acc_item">
                                <h2 className="in_acc_header" id="acc_industries">
                                <button className={"accordion-button" + (activeItem == i ? ' active ' : ' collapsed ')} onClick={()=>checkActiveItems(i,items.id)}>
                                    <span className="d-block w-100">
                                    {items.name}
                                    </span>
                                </button>
                                </h2>
                                <div id="coll_industries" className={"accordion-collapse collapse" + (activeItem == i ? 'show' : '')}>
                                <div className="in_acc_body">
                                    <div className="table-responsive">
                                    <table className="table table-bordered m-0 most_tables">
                                        <thead className="table-light">
                                            <tr>
                                                <th scope="col">Symbol</th>
                                                <th scope="col">Company Name</th>
                                                <th scope="col">Latest Price</th>
                                                <th scope="col">Change</th>
                                                <th scope="col">Change Percent</th>
                                                <th scope="col">Market Cap</th>
                                                <th scope="col">Avg Total Volume</th>
                                                <th scope="col">52 Week Low</th>
                                                <th scope="col">52 Week High</th>
                                                <th scope="col">Beta</th>
                                                <th scope="col">Shares Outstanding</th>
                                                <th scope="col">1M</th>
                                                <th scope="col">3M</th>
                                                <th scope="col">6M</th>
                                                <th scope="col">YTD</th>
                                                <th scope="col">1Y</th>
                                                <th scope="col">5Y</th>
                                            </tr>
                                        </thead>
                                        <tbody className="border-top-0">
                                            {etfData.map((etfData) => {
                                                const symb = etfData.symbol || "";
                                                const cmpny = etfData.companyName || "";
                                                const ltstPrice = etfData.latestPrice || "";
                                                const chng = etfData.change || "";
                                                const chngper = etfData.changePercent || "";
                                                const mrktcap = etfData.marketCap || "";
                                                const avgTVolume = etfData.avgTotalVolume || "";
                                                const wkslow = etfData.week52Low || "";
                                                const wkshigh = etfData.week52High || "";
                                                const bta = etfData.beta || "";
                                                const sharesout = etfData.sharesOutstanding || "";
                                                const onemnth = etfData.month1ChangePercent || "";
                                                const threemnth = etfData.month3ChangePercent || "";
                                                const sixmnth = etfData.month6ChangePercent || "";
                                                const ytdchnge = etfData.ytdChangePercent || "";
                                                const oneyrchnge = etfData.year1ChangePercent || "";
                                                const fiveyerchange = etfData.year5ChangePercent || "";
                                                return (
                                                    <tr>
                                                        <td>{symb}</td>
                                                        <td>{cmpny}</td>
                                                        <td>{ltstPrice}</td>
                                                        <td>{chng}</td>
                                                        <td>{chngper}</td>
                                                        <td>{mrktcap}</td>
                                                        <td>{avgTVolume}</td>
                                                        <td>{wkslow}</td>
                                                        <td>{wkshigh}</td>
                                                        <td>{bta}</td>
                                                        <td>{sharesout}</td>
                                                        <td>{onemnth}</td>
                                                        <td>{threemnth}</td>
                                                        <td>{sixmnth}</td>
                                                        <td>{ytdchnge}</td>
                                                        <td>{oneyrchnge}</td>
                                                        <td>{fiveyerchange}</td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                                </div>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                                
                                {/* <ul>
                                    {items.SectorWiseIndustries.length > 0 && items.SectorWiseIndustries.map((sub,key)=>{
                                        return(
                                        <li key={key} className={subActiveItem == sub.name ? 'active' : ''}>
                                            <a href="javascript:void(0);" onClick={()=>checkSubItemsActive(sub.name,sub.id)}>
                                            {sub.name}
                                            </a>
                                        </li>
                                        )
                                    })}
                                    </ul> */}
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