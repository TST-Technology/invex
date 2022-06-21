import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBookKeyStatus, getCompanyDataBySymbol } from '../../api/commonApi';
import { getCompanyLogo } from '../../api/company';
import { getOptionsChainData } from '../../api/Option';
import { getOneDayBeforeDate } from '../../Common/commonFunctions';
import CompanyView from '../Quote/CompanyView/CompanyView';
import ArrowDownImg from '../../Common/Images/arrow-down.svg';

const OptionsChain = () => {
  const { symbol } = useParams();
  const [Company, setCompany] = useState(null);
  const [KeyStatus, setKeyStatus] = useState(null);
  const [optionChainData, setOptionChainData] = useState([]);
  const [logo, setLogo] = useState();
  const [Loading, setLoading] = useState(false);

  const currentDate = getOneDayBeforeDate();

  useEffect(() => {
    (async () => {
      console.log(symbol);
      if (symbol) {
        setLoading(true);
        const param = {
          date: currentDate,
          symbol: symbol,
        };
        var chainData = await getOptionsChainData(param);
        console.log(chainData);
        setOptionChainData(chainData);

        var data = await getCompanyDataBySymbol(symbol);
        if (data && data.status === 200) {
          setCompany(data?.data);
        } else {
          setCompany(null);
        }
        var res = await getBookKeyStatus(symbol);
        if (res && res?.status === 200) {
          setKeyStatus(res?.data?.quote);
        }

        const logoData = await getCompanyLogo(symbol);
        if (
          logoData &&
          logoData.data &&
          logoData.data.url &&
          logoData.status === 200
        ) {
          setLogo(logoData.data.url);
        }

        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <div className='row'>
        <div className='col-lg-12 mb-4'>
          <CompanyView
            Loading={Loading}
            KeyStatus={KeyStatus}
            Company={Company}
            logo={logo}
          />
          <div className='card p-3'>
            <form
              className='form-group'
              role='search'
              method='get'
              id='searchform'
              action
            >
              <div className='d-lg-inline-flex d-md-flex align-items-center float-start'>
                <label htmlFor className='me-3 font-bd'>
                  Stratergy
                </label>
                <select
                  className='form-select me-3'
                  aria-label='Default select example'
                >
                  <option selected>Calls &amp; Puts</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
                <label htmlFor className='me-3 font-bd'>
                  Strikes
                </label>
                <select
                  className='form-select me-3'
                  aria-label='Default select example'
                >
                  <option selected>Calls &amp; Puts</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
                <label htmlFor className='me-3 font-bd'>
                  Volume
                </label>
                <select
                  className='form-select me-3'
                  aria-label='Default select example'
                >
                  <option selected>Calls &amp; Puts</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
                <label htmlFor className='me-3 font-bd'>
                  Open Int
                </label>
                <select
                  className='form-select me-3'
                  aria-label='Default select example'
                >
                  <option selected>Calls &amp; Puts</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
                <label htmlFor className='me-3 font-bd'>
                  Date
                </label>
                <select
                  className='form-select me-3'
                  aria-label='Default select example'
                >
                  <option selected>Calls &amp; Puts</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>
            </form>
          </div>
        </div>
        <div className='table-responsive mt-4'>
          <table className='table table-bordered m-0 cmplx-tbl'>
            <thead className='labels'>
              <tr>
                <th colSpan={8} className='text-center'>
                  <b className='text-success font-lbd'>Calls</b>
                </th>
                <th className='text-center'>Nov 05, 21 (2d)</th>
                <th colSpan={8} className='text-center'>
                  <b className='text-danger font-lbd'>Puts</b>
                  <span className='font-md font14 float-end'>
                    <label htmlFor='accounting'>Atribute selectior</label>
                    <img
                      src={ArrowDownImg}
                      className='img-fluid'
                      alt='Toggle'
                    />
                  </span>
                </th>
              </tr>
            </thead>
            <thead className='border-top-0 '>
              <tr>
                <th>Last</th>
                <th>Change</th>
                <th>Bid</th>
                <th>Ask</th>
                <th>Volume</th>
                <th>Open Int</th>
                <th>Imp Vol</th>
                <th>Data</th>
                <th />
                <th>Last</th>
                <th>Change</th>
                <th>Bid</th>
                <th>Ask</th>
                <th>Volume</th>
                <th>Open Int</th>
                <th>Imp Vol</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody className='hide border-top-0'>
              <tr>
                <td className='lup'>5.45</td>
                <td className='lup'>0.00</td>
                <td className='lup'>5.35</td>
                <td className='lup'>5.50</td>
                <td className='lup'>0</td>
                <td className='lup'>2,820</td>
                <td className='lup'>29.13%</td>
                <td className='lup'>0.751</td>
                <td className='text-center'>1,460.00</td>
                <td>5.45</td>
                <td>0.00</td>
                <td>5.35</td>
                <td>5.50</td>
                <td>0</td>
                <td>2,820</td>
                <td>29.13%</td>
                <td>0.751</td>
              </tr>
              <tr>
                <td className='lup'>5.45</td>
                <td className='lup'>0.00</td>
                <td className='lup'>5.35</td>
                <td className='lup'>5.50</td>
                <td className='lup'>0</td>
                <td className='lup'>2,820</td>
                <td className='lup'>29.13%</td>
                <td className='lup'>0.751</td>
                <td className='text-center'>1,480.00</td>
                <td>5.45</td>
                <td>0.00</td>
                <td>5.35</td>
                <td>5.50</td>
                <td>0</td>
                <td>2,820</td>
                <td>29.13%</td>
                <td>0.751</td>
              </tr>
              <tr>
                <td className='lup'>5.45</td>
                <td className='lup'>0.00</td>
                <td className='lup'>5.35</td>
                <td className='lup'>5.50</td>
                <td className='lup'>0</td>
                <td className='lup'>2,820</td>
                <td className='lup'>29.13%</td>
                <td className='lup'>0.751</td>
                <td className='text-center'>1,500.00</td>
                <td>5.45</td>
                <td>0.00</td>
                <td>5.35</td>
                <td>5.50</td>
                <td>0</td>
                <td>2,820</td>
                <td>29.13%</td>
                <td>0.751</td>
              </tr>
              <tr>
                <td className='lup'>5.45</td>
                <td className='lup'>0.00</td>
                <td className='lup'>5.35</td>
                <td className='lup'>5.50</td>
                <td className='lup'>0</td>
                <td className='lup'>2,820</td>
                <td className='lup'>29.13%</td>
                <td className='lup'>0.751</td>
                <td className='text-center'>1,520.00</td>
                <td>5.45</td>
                <td>0.00</td>
                <td>5.35</td>
                <td>5.50</td>
                <td>0</td>
                <td>2,820</td>
                <td>29.13%</td>
                <td>0.751</td>
              </tr>
              <tr>
                <td className='lup'>5.45</td>
                <td className='lup'>0.00</td>
                <td className='lup'>5.35</td>
                <td className='lup'>5.50</td>
                <td className='lup'>0</td>
                <td className='lup'>2,820</td>
                <td className='lup'>29.13%</td>
                <td className='lup'>0.751</td>
                <td className='text-center'>1,540.00</td>
                <td>5.45</td>
                <td>0.00</td>
                <td>5.35</td>
                <td>5.50</td>
                <td>0</td>
                <td>2,820</td>
                <td>29.13%</td>
                <td>0.751</td>
              </tr>
              <tr>
                <td className='lup'>5.45</td>
                <td className='lup'>0.00</td>
                <td className='lup'>5.35</td>
                <td className='lup'>5.50</td>
                <td className='lup'>0</td>
                <td className='lup'>2,820</td>
                <td className='lup'>29.13%</td>
                <td className='lup'>0.751</td>
                <td className='text-center'>1,460.00</td>
                <td>5.45</td>
                <td>0.00</td>
                <td>5.35</td>
                <td>5.50</td>
                <td>0</td>
                <td>2,820</td>
                <td>29.13%</td>
                <td>0.751</td>
              </tr>
              <tr>
                <td>5.45</td>
                <td>0.00</td>
                <td>5.35</td>
                <td>5.50</td>
                <td>0</td>
                <td>2,820</td>
                <td>29.13%</td>
                <td>0.751</td>
                <td className='text-center'>1,480.00</td>
                <td className='lup'>5.45</td>
                <td className='lup'>0.00</td>
                <td className='lup'>5.35</td>
                <td className='lup'>5.50</td>
                <td className='lup'>0</td>
                <td className='lup'>2,820</td>
                <td className='lup'>29.13%</td>
                <td className='lup'>0.751</td>
              </tr>
              <tr>
                <td>5.45</td>
                <td>0.00</td>
                <td>5.35</td>
                <td>5.50</td>
                <td>0</td>
                <td>2,820</td>
                <td>29.13%</td>
                <td>0.751</td>
                <td className='text-center'>1,480.00</td>
                <td className='lup'>5.45</td>
                <td className='lup'>0.00</td>
                <td className='lup'>5.35</td>
                <td className='lup'>5.50</td>
                <td className='lup'>0</td>
                <td className='lup'>2,820</td>
                <td className='lup'>29.13%</td>
                <td className='lup'>0.751</td>
              </tr>
              <tr>
                <td>5.45</td>
                <td>0.00</td>
                <td>5.35</td>
                <td>5.50</td>
                <td>0</td>
                <td>2,820</td>
                <td>29.13%</td>
                <td>0.751</td>
                <td className='text-center'>1,480.00</td>
                <td className='lup'>5.45</td>
                <td className='lup'>0.00</td>
                <td className='lup'>5.35</td>
                <td className='lup'>5.50</td>
                <td className='lup'>0</td>
                <td className='lup'>2,820</td>
                <td className='lup'>29.13%</td>
                <td className='lup'>0.751</td>
              </tr>
              <tr>
                <td>5.45</td>
                <td>0.00</td>
                <td>5.35</td>
                <td>5.50</td>
                <td>0</td>
                <td>2,820</td>
                <td>29.13%</td>
                <td>0.751</td>
                <td className='text-center'>1,480.00</td>
                <td className='lup'>5.45</td>
                <td className='lup'>0.00</td>
                <td className='lup'>5.35</td>
                <td className='lup'>5.50</td>
                <td className='lup'>0</td>
                <td className='lup'>2,820</td>
                <td className='lup'>29.13%</td>
                <td className='lup'>0.751</td>
              </tr>
              <tr>
                <td>5.45</td>
                <td>0.00</td>
                <td>5.35</td>
                <td>5.50</td>
                <td>0</td>
                <td>2,820</td>
                <td>29.13%</td>
                <td>0.751</td>
                <td className='text-center'>1,480.00</td>
                <td className='lup'>5.45</td>
                <td className='lup'>0.00</td>
                <td className='lup'>5.35</td>
                <td className='lup'>5.50</td>
                <td className='lup'>0</td>
                <td className='lup'>2,820</td>
                <td className='lup'>29.13%</td>
                <td className='lup'>0.751</td>
              </tr>
              <tr>
                <td>5.45</td>
                <td>0.00</td>
                <td>5.35</td>
                <td>5.50</td>
                <td>0</td>
                <td>2,820</td>
                <td>29.13%</td>
                <td>0.751</td>
                <td className='text-center'>1,480.00</td>
                <td className='lup'>5.45</td>
                <td className='lup'>0.00</td>
                <td className='lup'>5.35</td>
                <td className='lup'>5.50</td>
                <td className='lup'>0</td>
                <td className='lup'>2,820</td>
                <td className='lup'>29.13%</td>
                <td className='lup'>0.751</td>
              </tr>
              <tr>
                <td>5.45</td>
                <td>0.00</td>
                <td>5.35</td>
                <td>5.50</td>
                <td>0</td>
                <td>2,820</td>
                <td>29.13%</td>
                <td>0.751</td>
                <td className='text-center'>1,480.00</td>
                <td className='lup'>5.45</td>
                <td className='lup'>0.00</td>
                <td className='lup'>5.35</td>
                <td className='lup'>5.50</td>
                <td className='lup'>0</td>
                <td className='lup'>2,820</td>
                <td className='lup'>29.13%</td>
                <td className='lup'>0.751</td>
              </tr>
            </tbody>
            <thead className='border-top-0'>
              <tr>
                <th colSpan={8} className='text-center'>
                  <b className='text-success font-lbd'>Calls</b>
                  <span className='font-md font14 float-start'>
                    <img
                      src={ArrowDownImg}
                      className='img-fluid'
                      alt='Toggle'
                    />
                  </span>
                </th>
                <th className='text-center'>Nov 05, 21 (2d)</th>
                <th colSpan={8} className='text-center'>
                  <b className='text-danger font-lbd'>Puts</b>
                  <span className='font-md font14 float-end'>
                    <img
                      src={ArrowDownImg}
                      className='img-fluid'
                      alt='Toggle'
                    />
                  </span>
                </th>
              </tr>
            </thead>
            <thead className='border-top-0'>
              <tr>
                <th colSpan={8} className='text-center'>
                  <b className='text-success font-lbd'>Calls</b>
                  <span className='font-md font14 float-start'>
                    <img
                      src={ArrowDownImg}
                      className='img-fluid'
                      alt='Toggle'
                    />
                  </span>
                </th>
                <th className='text-center'>Nov 05, 21 (2d)</th>
                <th colSpan={8} className='text-center'>
                  <b className='text-danger font-lbd'>Puts</b>
                  <span className='font-md font14 float-end'>
                    <img
                      src={ArrowDownImg}
                      className='img-fluid'
                      alt='Toggle'
                    />
                  </span>
                </th>
              </tr>
            </thead>
            <thead className='border-top-0'>
              <tr>
                <th colSpan={8} className='text-center'>
                  <b className='text-success font-lbd'>Calls</b>
                  <span className='font-md font14 float-start'>
                    <img
                      src={ArrowDownImg}
                      className='img-fluid'
                      alt='Toggle'
                    />
                  </span>
                </th>
                <th className='text-center'>Nov 05, 21 (2d)</th>
                <th colSpan={8} className='text-center'>
                  <b className='text-danger font-lbd'>Puts</b>
                  <span className='font-md font14 float-end'>
                    <img
                      src={ArrowDownImg}
                      className='img-fluid'
                      alt='Toggle'
                    />
                  </span>
                </th>
              </tr>
            </thead>
            <thead className='border-top-0'>
              <tr>
                <th colSpan={8} className='text-center'>
                  <b className='text-success font-lbd'>Calls</b>
                  <span className='font-md font14 float-start'>
                    <img
                      src={ArrowDownImg}
                      className='img-fluid'
                      alt='Toggle'
                    />
                  </span>
                </th>
                <th className='text-center'>Nov 05, 21 (2d)</th>
                <th colSpan={8} className='text-center'>
                  <b className='text-danger font-lbd'>Puts</b>
                  <span className='font-md font14 float-end'>
                    <img
                      src={ArrowDownImg}
                      className='img-fluid'
                      alt='Toggle'
                    />
                  </span>
                </th>
              </tr>
            </thead>
            <thead className='border-top-0'>
              <tr>
                <th colSpan={8} className='text-center'>
                  <b className='text-success font-lbd'>Calls</b>
                  <span className='font-md font14 float-start'>
                    <img
                      src={ArrowDownImg}
                      className='img-fluid'
                      alt='Toggle'
                    />
                  </span>
                </th>
                <th className='text-center'>Nov 05, 21 (2d)</th>
                <th colSpan={8} className='text-center'>
                  <b className='text-danger font-lbd'>Puts</b>
                  <span className='font-md font14 float-end'>
                    <img
                      src={ArrowDownImg}
                      className='img-fluid'
                      alt='Toggle'
                    />
                  </span>
                </th>
              </tr>
            </thead>
            <thead className='border-top-0'>
              <tr>
                <th colSpan={8} className='text-center'>
                  <b className='text-success font-lbd'>Calls</b>
                  <span className='font-md font14 float-start'>
                    <img
                      src={ArrowDownImg}
                      className='img-fluid'
                      alt='Toggle'
                    />
                  </span>
                </th>
                <th className='text-center'>Nov 05, 21 (2d)</th>
                <th colSpan={8} className='text-center'>
                  <b className='text-danger font-lbd'>Puts</b>
                  <span className='font-md font14 float-end'>
                    <img
                      src={ArrowDownImg}
                      className='img-fluid'
                      alt='Toggle'
                    />
                  </span>
                </th>
              </tr>
            </thead>
            <thead className='border-top-0'>
              <tr>
                <th colSpan={8} className='text-center'>
                  <b className='text-success font-lbd'>Calls</b>
                  <span className='font-md font14 float-start'>
                    <img
                      src={ArrowDownImg}
                      className='img-fluid'
                      alt='Toggle'
                    />
                  </span>
                </th>
                <th className='text-center'>Nov 05, 21 (2d)</th>
                <th colSpan={8} className='text-center'>
                  <b className='text-danger font-lbd'>Puts</b>
                  <span className='font-md font14 float-end'>
                    <img
                      src={ArrowDownImg}
                      className='img-fluid'
                      alt='Toggle'
                    />
                  </span>
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </>
  );
};

export default OptionsChain;
