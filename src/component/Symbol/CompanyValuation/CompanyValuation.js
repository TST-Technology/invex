import React from 'react'
import abbreviateNumber from '../../Common/NumberFormat';

const CompanyValuation = ({ KeyStatus }) => {
    return (
        <>
            <div className="col-lg-12">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h6 className="mb-4"><strong>Price Summary & Volume</strong></h6>
                                <div className="row ">
                                    <div className="col-lg-4">
                                        <div className="title-lt">Open</div>
                                        <span>{KeyStatus?.open}</span>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="title-lt">Previous Close</div>
                                        <span>{KeyStatus?.previousClose}</span>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="title-lt">Today’s High</div>
                                        <span>{KeyStatus?.high}</span>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="title-lt">Today’s Low</div>
                                        <span>{KeyStatus?.low}</span>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="title-lt">52 Week High</div>
                                        <span>{KeyStatus?.week52High}</span>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="title-lt">52 Week Low</div>
                                        <span>{KeyStatus?.week52Low}</span>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="title-lt">Latest Volume</div>
                                        <span>{abbreviateNumber(KeyStatus?.volume)}</span>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="title-lt">Previous Volume</div>
                                        <span>{abbreviateNumber(KeyStatus?.previousVolume)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h6 className="mb-4"><strong>Company Essentials</strong></h6>
                                <div className="row ">
                                    <div className="col-lg-4">
                                        <div className="title-lt">Market Cap</div>
                                        <span>{abbreviateNumber(KeyStatus?.marketCap)}</span>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="title-lt">Shares Outstanding</div>
                                        <span>{KeyStatus?.peRatio}</span>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="title-lt">Beta</div>
                                        <span>{KeyStatus?.peRatio}</span>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="title-lt">PE Ratio</div>
                                        <span>{KeyStatus?.peRatio}</span>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="title-lt">EPS(TTM)</div>
                                        <span>{KeyStatus?.peRatio}</span>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="title-lt">Next Earnings Date</div>
                                        <span>{KeyStatus?.peRatio}</span>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="title-lt">Dividend Rate(TTM)</div>
                                        <span>{KeyStatus?.peRatio}</span>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="title-lt">Dividend Yield</div>
                                        <span>{KeyStatus?.peRatio}</span>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="title-lt">Ex-Dividend Date</div>
                                        <span>{KeyStatus?.peRatio}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyValuation