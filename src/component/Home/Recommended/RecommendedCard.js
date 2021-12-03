import React, { useState } from 'react'
import Chart from "../../Common/Chart/Chart";

const RecommendedCard = ({data}) => {

    const [stockSaved, setStockSaved] = useState(false);

    return (
        <div class="col-lg-4 col-sm-6">
            <div class="card companyviewblk">
                <div class="saved-blk" onClick={()=>setStockSaved(!stockSaved)}>
                    <img class="upper" src={require("../../Common/Images/"+(stockSaved?"bookMarked.png":"image4.png")).default} alt="bookmark" />
                </div>
                <div class="card-body">
                    <div class="logo">
                        <div class="img">
                            <img src={require("../../Common/Images/"+data.image).default} alt="Company Logo" />
                        </div>
                        <div class="title1">
                            <h5 class="card-title">{data.title[0]} <span>{data.title[1]}</span></h5>
                            <p class="company">{data.companyName}</p>
                        </div>
                    </div>
                    <div class="chart">
                        <div class="chart-text">
                            <p class="card-text">&#8377; {data.price}</p>
                            <p class="text">+{data.change}</p>
                        </div>
                        <div class="chart-img ms-auto">
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
