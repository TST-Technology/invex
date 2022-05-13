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
    {/* <div>
    <Bar
      data={{
        labels: ['', '', '', '', '', '','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',],
        datasets: [
          {
            
            data: [100, 200, 234 , 100 ,200,234,100, 200, 234 , 100 ,200,234,100, 200, 234 , 100 ,200,234,100, 200, 234 , 100 ,200,234,100, 200, 234 , 100 ,200,234,100, 200, 234 , 100 ,200,234,
                100, 200, 234 , 100 ,200,234,100, 200, 234 , 100 ,200,234,100, 200, 234 , 100 ,200,234,100, 200, 234 , 100 ,200,234,123,231,112,123,92,111,123,231,200,234,123,231,112,123,92,111,123,231,200,234,123,231,112,123,92,111,123,231,200,234,123,231,112,123,92,111,123,231],
            backgroundColor: [
                'rgba(55, 81, 255, 1)'
            ],
            borderColor: [
              'rgba(55, 81, 255, 1)'
            ],
            borderWidth: 1,
          },
          // {
          //   label: 'Quantity',
          //   data: [47, 52, 67, 58, 9, 50],
          //   backgroundColor: 'orange',
          //   borderColor: 'red',
          // },
        ],
      }}
      height={400}
      width={600}
      options={{
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
        legend: {
          labels: {
            fontSize: 25,
          },
        },
      }}
    />
  </div> */}
  </>
  )
}

export default OptionVolume