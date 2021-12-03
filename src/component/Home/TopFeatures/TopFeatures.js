import React from 'react'

const TopFeatures = () => {

    const featuresData = [["Deep","Anaylsis"],["Full","Flexibility"],["Well Organised","Stocks"],["User","Friendly"],
                        ["Better","Compression"],["Multiple","Opportunities"],["Better","Compression"],["Multiple","Opportunities"]];

    return (
        <>
            <section className="topEndSection">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <h1 className="main-title">Top-end Features of Invex</h1>
                        </div>
                        <div className="dot">
                            <img src={require("../../Common/Images/features_Circle.png").default} alt="circle" />
                        </div>
                        {
                            featuresData.map((feature,index)=>{
                                return (
                                    <div key={index} className="col-lg-3 col-md-4">
                                        <div className="topfeatureblk">
                                            <p>{feature[0]} <br /> {feature[1]}</p>
                                            <img src={require("../../Common/Images/features.png").default} alt="graph" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default TopFeatures
