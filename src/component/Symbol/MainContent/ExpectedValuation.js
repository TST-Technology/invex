import React from 'react'

function ExpectedValuation () {
  return (
    <div className='mb-5'>
      <h6 className='mb-4'>
        <strong>Expected Company Valuation after 5 year</strong>
      </h6>
      <div className='row'>
        <div className='col-xl-3 col-lg-6 col-md-6'>
          <div className='scenario'>
            <span className='best_scena'>Best scenario</span>
            <div className='chart-text'>
              <p className='card-text up m-0'>$235.49</p>
              <p className='text up m-0 ms-2'>(+34%)</p>
            </div>
          </div>
        </div>
        <div className='col-xl-3 col-lg-6 col-md-6'>
          <div className='scenario'>
            <span className='base_scena'>Base scenario</span>
            <div className='chart-text'>
              <p className='card-text up m-0'>$235.49</p>
              <p className='text up m-0 ms-2'>(+34%)</p>
            </div>
          </div>
        </div>
        <div className='col-xl-3 col-lg-6 col-md-6'>
          <div className='scenario'>
            <span className='worst_scena'>Best scenario</span>
            <div className='chart-text'>
              <p className='card-text up m-0'>$235.49</p>
              <p className='text up m-0 ms-2'>(+34%)</p>
            </div>
          </div>
        </div>
        <div className='col-xl-3 col-lg-6 col-md-6'>
          <div className='scenario full_valuation_report'>
            <a
              href='javascript:void(0);'
              className='d-flex align-items-center justify-content-between'
            >
              <h6 className='m-0'>
                View Full <br />
                Valuation report
              </h6>
              <i className='bi bi-chevron-right'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpectedValuation
