import React from 'react'
import RecommendedCard from './RecommendedCard'
import recommendedData from './recommendedData'

const Recommended = () => {

    return (
        <>
            <div class="testimonial">
            <div class="container">
                <div class="recommanded_list">
                    <h2 class="main-title">Most Recomanded for your list</h2>
                    <span>(Data for last 30 Days)</span>
                </div>
                <div class="row">
                    {
                        recommendedData.map((recommendedStock,index)=>{
                            return <RecommendedCard key={index} data={recommendedStock} />
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default Recommended
