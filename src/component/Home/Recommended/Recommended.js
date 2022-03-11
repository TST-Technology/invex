import React from 'react'
import RecommendedCard from './RecommendedCard'
import recommendedData from './recommendedData'

const Recommended = () => {

    return (
        <>
            <div className="testimonial">
            <div className="container">
                <div className="recommanded_list">
                    <h2 className="main-title">Most Recomanded for your list</h2>
                    <span>(Data for last 30 Days)</span>
                </div>
                <div className="row">
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
