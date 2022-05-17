import React from 'react'
import { Bar } from 'react-chartjs-2'

const OptionVolume = () => {
  return (
    <>
      <div className="row">
        <h6 className="mb-4"><strong>Option Volume</strong></h6>
        <div className="d-flex align-items-center justify-content-between">
          <div className="top_button_panel mb-3">
            <button type="button" className="btn btn-info">Volume Call</button>
            <button type="button" className="btn btn-light"> Volume Put</button>
            <button type="button" className="btn btn-light"> Volume Call & Put</button>
            <button type="button" className="btn btn-light"> Volume Total</button>
          </div>
          <div className="top_button_panel mb-3">
            <button type="button" className="btn btn-light"> 3 Months</button>
            <button type="button" className="btn btn-light"> 6 Months</button>
            <button type="button" className="btn btn-info"> 1 Year</button>
          </div>
        </div>
        <img src={require("../../Common/Images/options-aapl-3.png").default} className="img-fluid" alt="options" />
      </div>
    </>
  )
}

export default OptionVolume