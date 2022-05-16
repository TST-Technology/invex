import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { getBookKeyStatus } from '../../api/commonApi';
import { getTopCompetitors } from '../../api/company';
import abbreviateNumber from '../../Common/NumberFormat';

const CompetitorsNews = ({ KeyStatus, NewsData }) => {
    const [tableData, settableData] = useState()
    const [tableHeader, settableHeader] = useState()
    const [params] = useSearchParams();
    var name = ['Company', 'Price', 'Market Cap', 'Beta', 'PE Ratio', 'EPS (TTM)', 'YTD Change', '52 Week Change']

    const [Tcol1, setTcol1] = useState(null)
    const [Tcol2, setTcol2] = useState(null)
    const [Tcol3, setTcol3] = useState(null)
    const [Tcol4, setTcol4] = useState(null)
    const [Tcol5, setTcol5] = useState(null)
    const [Tcol6, setTcol6] = useState(null)
    const [Tcol7, setTcol7] = useState(null)

    useEffect(() => {
        (async () => {
            if (params.get('symbol')) {
                var data = await getTopCompetitors(params.get('symbol'));
                if (data && data?.status == 200) {
                    // KeyStatus
                    var api = []
                    data?.data?.companySymbols.map((symbol, i) => {
                        api.push(getBookKeyStatus(symbol))
                    })
                    const symbolList = await Promise.all(api)
                    if (symbolList && symbolList?.length > 0) {
                        setTcol1(symbolList[0]?.data?.quote)
                        setTcol2(symbolList[1]?.data?.quote)
                        setTcol3(symbolList[2]?.data?.quote)
                        setTcol4(symbolList[3]?.data?.quote)
                        setTcol5(symbolList[4]?.data?.quote)
                        setTcol6(symbolList[5]?.data?.quote)
                        setTcol7(symbolList[6]?.data?.quote)
                    }

                    settableHeader(name)
                }
            }
        })()
    }, [params.get('symbol')
    ])
    useEffect(() => {
        var tempArr = [
            {
                asOf: Tcol1?.symbol,
                col1: Tcol1?.latestPrice,
                col2: Tcol1?.marketCap,
                col3: Tcol1?.peRatio,
                col4: Tcol1?.peRatio,
                col5: Tcol1?.peRatio,
                col6: Tcol1?.peRatio,
                col7: Tcol1?.peRatio,
            },
            {
                asOf: Tcol2?.symbol,
                col1: Tcol2?.latestPrice,
                col2: Tcol2?.marketCap,
                col3: Tcol2?.peRatio,
                col4: Tcol2?.peRatio,
                col5: Tcol2?.peRatio,
                col6: Tcol2?.peRatio,
                col7: Tcol2?.peRatio,
            },
            {
                asOf: Tcol3?.symbol,
                col1: Tcol3?.latestPrice,
                col2: Tcol3?.marketCap,
                col3: Tcol3?.peRatio,
                col4: Tcol3?.peRatio,
                col5: Tcol3?.peRatio,
                col6: Tcol3?.peRatio,
                col7: Tcol3?.peRatio,
            },
            {
                asOf: Tcol4?.symbol,
                col1: Tcol4?.latestPrice,
                col2: Tcol4?.marketCap,
                col3: Tcol4?.peRatio,
                col4: Tcol4?.peRatio,
                col5: Tcol4?.peRatio,
                col6: Tcol4?.peRatio,
                col7: Tcol4?.peRatio,
            },
            {
                asOf: Tcol5?.symbol,
                col1: Tcol5?.latestPrice,
                col2: Tcol5?.marketCap,
                col3: Tcol5?.peRatio,
                col4: Tcol5?.peRatio,
                col5: Tcol5?.peRatio,
                col6: Tcol5?.peRatio,
                col7: Tcol5?.peRatio,
            },
            {
                asOf: Tcol6?.symbol,
                col1: Tcol6?.latestPrice,
                col2: Tcol6?.marketCap,
                col3: Tcol6?.peRatio,
                col4: Tcol6?.peRatio,
                col5: Tcol6?.peRatio,
                col6: Tcol6?.peRatio,
                col7: Tcol6?.peRatio,
            },
            {
                asOf: Tcol7?.symbol,
                col1: Tcol7?.latestPrice,
                col2: Tcol7?.marketCap,
                col3: Tcol7?.peRatio,
                col4: Tcol7?.peRatio,
                col5: Tcol7?.peRatio,
                col6: Tcol7?.peRatio,
                col7: Tcol7?.peRatio,
            }
        ]
        settableData(tempArr)

    }, [Tcol1, Tcol2, Tcol3, Tcol4, Tcol5, Tcol6, Tcol7])
    const newsData = [
        {
            img: "news-1.png",
            title: "Lucid shares soar on news of first electric sedan deliveries",
            business: "Money Wise"
        },
        {
            img: "news-2.png",
            title: "Lucid shares soar on news of first electric sedan deliveries",
            business: "Money Wise"
        },
        {
            img: "news-3.png",
            title: "Lucid shares soar on news of first electric sedan deliveries",
            business: "Money Wise"
        },
        {
            img: "news-4.png",
            title: "Lucid shares soar on news of first electric sedan deliveries",
            business: "Money Wise"
        },
        {
            img: "news-5.png",
            title: "Lucid shares soar on news of first electric sedan deliveries",
            business: "Money Wise"
        },
        {
            img: "news-6.png",
            title: "Lucid shares soar on news of first electric sedan deliveries",
            business: "Money Wise"
        },
        {
            img: "news-7.png",
            title: "Lucid shares soar on news of first electric sedan deliveries",
            business: "Money Wise"
        },
        {
            img: "news-8.png",
            title: "Lucid shares soar on news of first electric sedan deliveries",
            business: "Money Wise"
        },
        {
            img: "news-9.png",
            title: "Lucid shares soar on news of first electric sedan deliveries",
            business: "Money Wise"
        },
        {
            img: "news-10.png",
            title: "Lucid shares soar on news of first electric sedan deliveries",
            business: "Money Wise"
        },
    ]
    return (
        <>
            <div className="col-lg-12">
                <div className="top_competitors">
                    <div className="mb-5">
                        <div className="d-flex align-items-center justify-content-between border p-3 border-bottom-0">
                            <h6 className="m-0"><strong>Top Competitors</strong></h6>
                            <a href="javascript:void(0)" className="text-dark viewmore">View More</a>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-bordered m-0 most_tables">
                                <thead className="table-light">
                                    <tr>
                                        {tableHeader && tableHeader?.length > 0 && tableHeader.map((el, i) => {
                                            return (
                                                <th key={i} scope='col'>{el}</th>
                                            )
                                        })}
                                    </tr>
                                </thead>
                                <tbody className="border-top-0">
                                    {tableData && tableData?.length > 0 && tableData?.map((el, i) => {
                                        return (
                                            <tr>
                                                <td>{el?.asOf}</td>
                                                <td>{el?.col1}</td>
                                                <td>{abbreviateNumber(el?.col2)}</td>
                                                <td>{el?.col3}</td>
                                                <td>{el?.col4}</td>
                                                <td><span class="up">{el?.col5}</span></td>
                                                <td><span class="up">{el?.col6}</span></td>
                                                <td><span class="down">{el?.col7}</span></td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div className="market_news mb-5">
                    <div className="d-flex align-items-center justify-content-between bg-light p-3 border-bottom-0">
                        <h6 className="m-0"><strong>Company News</strong></h6>
                        <a href="javascript:void(0)" className="text-dark viewmore">View More</a>
                    </div>
                    <div className="row">
                        {
                            NewsData && NewsData.length > 0 && NewsData.map((data, index) => {
                                return (
                                    <div className="col-lg-4">
                                        <div className="news_block mt-3 mb-3">
                                            <div className="news_img">
                                                <a href={data.qmUrl} target='_blank'><img src={data.image} className="img-fluid" alt="news_image" /></a>
                                            </div>
                                            <div className="news_content">
                                                <a href={data.qmUrl} target='_blank' className="text-dark"><h5> {data.headline}</h5></a>
                                                <a className="text-primary">Business</a><span> · {data.provider}</span>
                                            </div>
                                        </div>
                                    </div>)
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default CompetitorsNews