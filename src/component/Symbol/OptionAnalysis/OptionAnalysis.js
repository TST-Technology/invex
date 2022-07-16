import React from 'react';
import OptionAnalysisImg from '../../Common/Images/option-analysis-img-1.png';
import OptionImg2 from '../../Common/Images/options-aapl-2.png';
import OptionImg3 from '../../Common/Images/options-aapl-3.png';

const OptionAnalysis = () => {
  return (
    <>
      <div className='col-lg-12'>
        <div className='d-flex align-items-center justify-content-between mt-5'>
          <h4 className='me-auto mb-0'>Option Analysis</h4>
          <form
            className='form-group'
            role='search'
            method='get'
            id='searchform'
            action
          >
            <div className='d-lg-inline-flex d-md-flex align-items-center float-start'>
              <label htmlFor className='me-3 font-bd'>
                Period
              </label>
              <select
                className='form-select me-3'
                aria-label='Default select example'
              >
                <option selected>Annual</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
              <label htmlFor className='me-3 font-bd'>
                View
              </label>
              <select
                className='form-select me-0'
                aria-label='Default select example'
              >
                <option selected>5 Y</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
            </div>
          </form>
        </div>
      </div>
      <div className='col-lg-12'>
        <div className='top_button_panel v2 mt-4 mb-3'>
          <button type='button' className='btn btn-info'>
            {' '}
            Quote
          </button>
          <button type='button' className='btn btn-light'>
            {' '}
            Option Chain
          </button>
        </div>
      </div>
      <div className='col-lg-12'>
        <div className='row'>
          <div className='col-lg-6'>
            <div>
              <h5 className='mb-4'>Volatility</h5>
              <div className='row mb-5'>
                <div className='col-lg-4 border-end'>
                  <div className='d-flex justify-content-between mb-3'>
                    <b>IV30</b>
                    <span>81.25</span>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <b>HV30</b>
                    <span>27</span>
                  </div>
                </div>
                <div className='col-lg-4 border-end'>
                  <div className='d-flex justify-content-between mb-3'>
                    <b>IV60</b>
                    <span>31.56</span>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <b>IV90</b>
                    <span>31.85</span>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='d-flex justify-content-between mb-3'>
                    <b>IV30</b>
                    <span>81.25</span>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <b>HV30</b>
                    <span>27</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h5 className='mb-4'>52 Weeks Rnge</h5>
              <div className='row mb-5'>
                <div className='col-lg-12'>
                  <div className='d-flex justify-content-between mb-3'>
                    <b>IV30</b>
                    <span>22.38 (L) - 81.25 (H)</span>
                    <b>100th Percentile</b>
                  </div>
                  <div className='d-flex justify-content-between mb-3'>
                    <b>HV30</b>
                    <span>17.86 (L) - 35.21 (H)</span>
                    <b>52th Percentile</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div>
              <img src={OptionAnalysisImg} alt='Option Analysis' />
            </div>
          </div>
        </div>
      </div>
      <div className='col-lg-12'>
        <div className='table-responsive mb-4'>
          <h5 className='m-0 mb-3'>Implied Volatility Index</h5>
          <table className='table table-bordered table-striped m-0 most_tables normal_table'>
            <thead>
              <tr>
                <th rowSpan={2}>Term</th>
                <th colSpan={3}>Current IV Index</th>
                <th colSpan={3}>1 Week Ago</th>
                <th colSpan={3}>1 Month Ago</th>
                <th colSpan={3}>3 Month Ago</th>
              </tr>
              <tr>
                <th>Call</th>
                <th>Put</th>
                <th>Mean</th>
                <th>Call</th>
                <th>Put</th>
                <th>Mean</th>
                <th>Call</th>
                <th>Put</th>
                <th>Mean</th>
                <th>Call</th>
                <th>Put</th>
                <th>Mean</th>
              </tr>
            </thead>
            <tbody className='border-top-0'>
              <tr>
                <td>30 Days</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
              </tr>
              <tr>
                <td>60 Days</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
              </tr>
              <tr>
                <td>90 Days</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
              </tr>
              <tr>
                <td>120 Days</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
              </tr>
              <tr>
                <td>150 Days</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
              </tr>
              <tr>
                <td>180 Days</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
              </tr>
              <tr>
                <td>360 Days</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
                <td>25.88%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='col-lg-12'>
        <div className='table-responsive mb-4'>
          <h5 className='m-0 mb-3'>Implied Volatility Index</h5>
          <table className='table table-bordered table-striped mt-4 most_tables'>
            <thead>
              <tr>
                <th scope='col'>Term</th>
                <th scope='col'>Current HV</th>
                <th scope='col'>1 Week Ago</th>
                <th scope='col'>1 Month Ago</th>
                <th scope='col'>3 Months Ago</th>
                <th scope='col'>52 Weeks High</th>
                <th scope='col'>52 Weeks Low</th>
              </tr>
            </thead>
            <tbody className='border-top-0'>
              <tr>
                <td>30 Days</td>
                <td>29.46%</td>
                <td>29.46%</td>
                <td>29.46%</td>
                <td>29.46%</td>
                <td>29.46%</td>
                <td>29.46%</td>
              </tr>
              <tr>
                <td>60 Days</td>
                <td>29.46%</td>
                <td>29.46%</td>
                <td>29.46%</td>
                <td>29.46%</td>
                <td>29.46%</td>
                <td>29.46%</td>
              </tr>
              <tr>
                <td>90 Days</td>
                <td>29.46%</td>
                <td>29.46%</td>
                <td>29.46%</td>
                <td>29.46%</td>
                <td>29.46%</td>
                <td>29.46%</td>
              </tr>
              <tr>
                <td>120 Days</td>
                <td>29.46%</td>
                <td>29.46%</td>
                <td>29.46%</td>
                <td>29.46%</td>
                <td>29.46%</td>
                <td>29.46%</td>
              </tr>
              <tr>
                <td>150 Days</td>
                <td>29.46%</td>
                <td>29.46%</td>
                <td>29.46%</td>
                <td>29.46%</td>
                <td>29.46%</td>
                <td>29.46%</td>
              </tr>
              <tr>
                <td>180 Days</td>
                <td>29.46%</td>
                <td>29.46%</td>
                <td>29.46%</td>
                <td>29.46%</td>
                <td>29.46%</td>
                <td>29.46%</td>
              </tr>
              <tr>
                <td>360 Days</td>
                <td>29.46%</td>
                <td>29.46%</td>
                <td>29.46%</td>
                <td>29.46%</td>
                <td>29.46%</td>
                <td>29.46%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='col-lg-12 mb-5'>
        <h5 className='mb-4'>AAPL: Daily 1 Year Volatility</h5>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='top_button_panel top_button_panel_light mb-3'>
            <button type='button' className='btn btn-info'>
              IV Index Call
            </button>
            <button type='button' className='btn btn-light'>
              {' '}
              IV Index Put
            </button>
            <button type='button' className='btn btn-light'>
              {' '}
              IV Index Call &amp; Put
            </button>
            <button type='button' className='btn btn-light'>
              {' '}
              IV Index Mean
            </button>
          </div>
          <div className='top_button_panel top_button_panel_light mb-3'>
            <button type='button' className='btn btn-light'>
              {' '}
              3 Months
            </button>
            <button type='button' className='btn btn-light'>
              {' '}
              6 Months
            </button>
            <button type='button' className='btn btn-info'>
              {' '}
              1 Year
            </button>
          </div>
        </div>
        <img src={OptionImg2} className='img-fluid' alt='options' />
      </div>
      <div className='col-lg-12 mb-5'>
        <h5 className='mb-4'>Option Volume</h5>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='top_button_panel top_button_panel_light mb-3'>
            <button type='button' className='btn btn-info'>
              Volume Call
            </button>
            <button type='button' className='btn btn-light'>
              {' '}
              Volume Put
            </button>
            <button type='button' className='btn btn-light'>
              {' '}
              Volume Call &amp; Put
            </button>
            <button type='button' className='btn btn-light'>
              {' '}
              Volume Total
            </button>
          </div>
          <div className='top_button_panel top_button_panel_light mb-3'>
            <button type='button' className='btn btn-light'>
              {' '}
              3 Months
            </button>
            <button type='button' className='btn btn-light'>
              {' '}
              6 Months
            </button>
            <button type='button' className='btn btn-info'>
              {' '}
              1 Year
            </button>
          </div>
        </div>
        <img src={OptionImg3} className='img-fluid' alt='options' />
      </div>
    </>
  );
};

export default OptionAnalysis;
