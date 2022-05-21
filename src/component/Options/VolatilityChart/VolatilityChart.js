import React from 'react'

const VolatilityChart = () => {
  return (
    <div className="row mb-5">
                        <h6 className="mb-4"><strong>AAPL: Daily 1 Year Volatility</strong></h6>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="top_button_panel mb-3">
                                <button type="button" className="btn btn-info">IV Index Call</button>
                                <button type="button" className="btn btn-light"> IV Index Put</button>
                                <button type="button" className="btn btn-light"> IV Index Call & Put</button>
                                <button type="button" className="btn btn-light"> IV Index Mean</button>
                            </div>
                            <div className="top_button_panel mb-3">
                                <button type="button" className="btn btn-light"> 3 Months</button>
                                <button type="button" className="btn btn-light"> 6 Months</button>
                                <button type="button" className="btn btn-info"> 1 Year</button>
                            </div>
                        </div>
                        <img src={require("../../Common/Images/options-aapl-2.png").default} className="img-fluid" alt="options" />
                    </div>
    
  )
}

export default VolatilityChart