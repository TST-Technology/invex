import React from 'react'

const VolatalityChart = () => {
  return (
   <div className="price_chart mb-5">
                <h6 className="mb-4"><strong>AAPL: Saily 1 Year Volatility Chart</strong></h6>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="top_button_panel mb-3">
                        <button type="button" className="btn btn-light">3M</button>
                        <button type="button" className="btn btn-light"> 6M</button>
                        <button type="button" className="btn btn-info"> 1Y</button>
                    </div>
                    <div className="top_button_panel mb-3">
                        <button type="button" className="btn btn-light">IV Call</button>
                        <button type="button" className="btn btn-light"> IV Put</button>
                        <button type="button" className="btn btn-light"> IV Call & Put</button>
                        <button type="button" className="btn btn-info"> IV Mean</button>
                    </div>
                </div>
                <img src={require('../../../Common/Images/symbol-chart-3.png').default} className="img-fluid" alt="symbol" />
            </div>
  )
}

export default VolatalityChart