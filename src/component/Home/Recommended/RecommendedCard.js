import React, { useState } from 'react'
import Chart from "../../Common/Chart/Chart";

const RecommendedCard = ({data}) => {

    const [stockSaved, setStockSaved] = useState(false);

    return (
        <div className="col-lg-4 col-sm-6">
            <div className="card companyviewblk">
                <div className="saved-blk" onClick={()=>setStockSaved(!stockSaved)}>
                    <img className="upper" src={require("../../Common/Images/"+(stockSaved?"bookMarked.png":"image4.png")).default} alt="bookmark" />
                </div>
                <div className="card-body">
                    <div className="logo">
                        <div className="img">
                            <img src={require("../../Common/Images/"+data.image).default} alt="Company Logo" />
                        </div>
                        <div className="title1">
                            <h5 className="card-title">{data.title[0]} <span>{data.title[1]}</span></h5>
                            <p className="company">{data.companyName}</p>
                        </div>
                    </div>
                    <div className="chart">
                        <div className="chart-text">
                            <p className="card-text">&#8377; {data.price}</p>
                            <p className="text">+{data.change}</p>
                        </div>
                        <div className="chart-img ms-auto">
                            {/* <img src={require("../../Common/Images/graph.png").default} alt="Graph" /> */}
                            <Chart />
                            {/* <ApexChart /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommendedCard
