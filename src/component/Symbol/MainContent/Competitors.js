import React from 'react'

function Competitors () {

  const competitorData = [
    {
        asOf:"Industry",
        aapl:4100,
        industryAvg:13.25,
        hpq:13.25,
        csco:13.25,
        msi:13.25,
        intc:13.25
    },
    {
        asOf:"Equity Summary Score",
        aapl:4100,
        industryAvg:13.25,
        hpq:13.25,
        csco:13.25,
        msi:13.25,
        intc:13.25
    },
    {
        asOf:"Price Performance(52 Weeks)",
        aapl:4100,
        industryAvg:13.25,
        hpq:13.25,
        csco:13.25,
        msi:13.25,
        intc:13.25
    },
    {
        asOf:"P/E (This Year's Estimate)",
        aapl:4100,
        industryAvg:13.25,
        hpq:13.25,
        csco:13.25,
        msi:13.25,
        intc:13.25
    },
    {
        asOf:"Beta",
        aapl:4100,
        industryAvg:13.25,
        hpq:13.25,
        csco:13.25,
        msi:13.25,
        intc:13.25
    },
    {
        asOf:"Shares Outstanding",
        aapl:4100,
        industryAvg:13.25,
        hpq:13.25,
        csco:13.25,
        msi:13.25,
        intc:13.25
    },
  ]

  return (
    <div class='top_competitors'>
      <div class='mb-5'>
        <div class='d-flex align-items-center justify-content-between border p-3 border-bottom-0'>
          <h6 class='m-0'>
            <strong>Top Competitors</strong>
          </h6>
          <a href='javascript:void(0)' class='text-dark viewmore'>
            View More
          </a>
        </div>
        <div class='table-responsive'>
          <table class='table table-bordered m-0 most_tables'>
            <thead class='table-light'>
              <tr>
                <th scope='col'>AS OF 11/11/21</th>
                <th scope='col'>AAPL</th>
                <th scope='col'>Industry Average</th>
                <th scope='col'>HPQ</th>
                <th scope='col'>CSCO</th>
                <th scope='col'>MSI</th>
                <th scope='col'>INTC</th>
              </tr>
            </thead>
            <tbody class='border-top-0'>
              {
                  competitorData.map((data,index)=>{
                    return(
                      <tr>
                        <td>{data.asOf}</td>
                        <td>{data.aapl}</td>
                        <td>{data.industryAvg}</td>
                        <td>{data.hpq}</td>
                        <td>{data.csco}</td>
                        <td>{data.msi}</td>
                        <td>{data.intc}</td>
                      </tr>
                    )
                  })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Competitors
