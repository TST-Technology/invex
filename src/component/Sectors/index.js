import React, { useState, useEffect } from 'react';
import SectorsContent from './content';
import SectorsList from './SectorsLits';
import abbreviateNumber from '../Common/NumberFormat';
import {
  getAllIndustryById,
  getAllSectors,
  getIndustry,
  getAllSectorsById,
  getAllSectorsOverview,
  getSectorWiseDefination,
  getIndustryWiseDefination,
  getAllsectorDefination,
  getSectors,
  getSectorETF,
  getIndustryETF,
  getParticularIndustryETF,
} from '../api/sectors';
import { CircularProgress } from '@material-ui/core';

const Sectors = () => {
  const [sectorId, setSectorId] = useState(null);
  const [industryId, setIndustryId] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [ChartData, setChartData] = useState([]);
  const [title, settitle] = useState('');
  const [defination, setdefination] = useState('');
  const [industries, setIndustries] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [etfData, setEtfdata] = useState([]);
  const [etfid, setetfid] = useState();
  const [etfitems, setetfitems] = useState(0);
  const [etfindid, setetfindid] = useState();
  const [etfinditems, setetfinditems] = useState(0);

  useEffect(() => {
    if (industries && industries[0] && industries[0].id)
      setetfindid(industries[0].id);
  }, [industries]);

  useEffect(() => {
    if (sectors && sectors[0] && sectors[0].id) setetfid(sectors[0].id);
  }, [sectors]);

  useEffect(() => {
    (async () => {
      setisLoading(true);
      var res;
      if (sectorId) {
        res = await getAllSectorsById(sectorId);
        if (res && res?.status === 200 && res?.data) {
          //id 1 and 2 data not comming and industry data null
          settitle(res.data.sectorName);
          setIndustries(res.data.Industry);
          let tempArray = [];
          for (let data of res.data.Industry) {
            let obj = {
              name: data.name,
              value: data.totalIndCap,
            };
            tempArray.push(obj);
          }
          setChartData(tempArray);
        }
        res = await getSectorWiseDefination(sectorId);
        if (res && res?.status === 200 && res?.data) {
          setdefination(res.data.defination);
        }
        setisLoading(false);
      } else {
        settitle('All sectors');
        res = await getAllsectorDefination();
        if (res && res?.status === 200 && res?.data) {
          res.data.defination && setdefination(res.data.defination);
        }
        var res = await getAllSectorsOverview();
        if (res && res?.status === 200 && res?.data) {
          let tempArray = [];
          for (let data of res.data.Sector) {
            let obj = {
              name: data.name,
              value: data.totalSectorCap,
            };
            tempArray.push(obj);
          }
          setChartData(tempArray);
        }
        setisLoading(false);
      }
    })();
  }, [sectorId]);

  useEffect(() => {
    (async () => {
      setisLoading(true);
      var res;
      if (industryId) {
        setIndustryId(industryId);
        res = await getAllIndustryById(industryId);
        console.log('res getAllIndustryById', res);
        if (res && res?.status === 200 && res?.data) {
          settitle(res.data.industryName);
          let tempArray = [];
          let industrys = res?.data?.IndustryWiseCompany?.sort((a, b) =>
            a.value < b.value ? 1 : -1
          );
          let Top10 = industrys.slice(0, 10);
          for (let data of Top10) {
            let obj = {
              name: data.companyName,
              value: data.marketCap,
            };
            tempArray.push(obj);
          }
          let remaining = industrys?.slice(10).reduce((pv, cv) => {
            return pv + cv.marketCap;
          }, 0);
          setChartData([
            ...tempArray,
            { name: 'Others', value: remaining, fill: '#000' },
          ]);
        }
        res = await getIndustryWiseDefination(industryId);
        if (res && res?.status === 200 && res?.data) {
          setdefination(res.data.defination);
        }
        res = await getParticularIndustryETF(industryId);
        if (res && res?.status === 200 && res?.etfData) {
          let tempArray = [];
          for (let data of res.etfData) {
            let obj = {
              symbol: data.symbol,
              companyName: data.companyName,
              latestPrice: data.latestPrice,
              change: data.change,
              changePercent: data.changePercent,
              marketCap: data.marketCap,
              avgTotalVolume: data.avgTotalVolume,
              week52Low: data.week52Low,
              week52High: data.week52High,
              beta: data.beta,
              sharesOutstanding: data.sharesOutstanding,
              month1ChangePercent: data.month1ChangePercent,
              month3ChangePercent: data.month3ChangePercent,
              month6ChangePercent: data.month6ChangePercent,
              ytdChangePercent: data.ytdChangePercent,
              year1ChangePercent: data.year1ChangePercent,
              year5ChangePercent: data.year5ChangePercent,
            };
            tempArray.push(obj);
          }
          setEtfdata(tempArray);
        }
      } else {
        res = await getAllSectorsById(sectorId);
        if (res && res?.status === 200 && res?.data) {
          settitle(res.data.sectorName);
          let tempArray = [];
          for (let data of res.data.Industry) {
            let obj = {
              name: data.name,
              value: data.totalIndCap,
            };
            tempArray.push(obj);
          }
          setChartData(tempArray);
        }
        res = await getSectorWiseDefination(sectorId);
        if (res && res?.status === 200 && res?.data) {
          setdefination(res.data.defination);
        }
      }
      setisLoading(false);
    })();
  }, [industryId]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      var res = await getSectors();
      if (res && res?.status == 200 && res?.data?.length > 0) {
        setSectors(res.data);
      }
      setLoading(false);
    })();
  }, []);

  const checkEtfActiveItems = (etf, secId) => {
    if (secId) {
      setetfid(secId);
    }
    if (etfitems !== etf) {
      setetfitems(etf);
    } else {
      setetfitems();
    }
  };

  useEffect(() => {
    (async () => {
      setisLoading(true);
      var res;
      if (etfid) {
        res = await getSectorETF(etfid);
        if (res && res?.status === 200 && res?.etfData) {
          let tempArray = [];
          for (let data of res.etfData) {
            let obj = {
              symbol: data.symbol,
              companyName: data.companyName,
              latestPrice: data.latestPrice,
              change: data.change,
              changePercent: data.changePercent,
              marketCap: data.marketCap,
              avgTotalVolume: data.avgTotalVolume,
              week52Low: data.week52Low,
              week52High: data.week52High,
              beta: data.beta,
              sharesOutstanding: data.sharesOutstanding,
              month1ChangePercent: data.month1ChangePercent,
              month3ChangePercent: data.month3ChangePercent,
              month6ChangePercent: data.month6ChangePercent,
              ytdChangePercent: data.ytdChangePercent,
              year1ChangePercent: data.year1ChangePercent,
              year5ChangePercent: data.year5ChangePercent,
            };
            tempArray.push(obj);
          }
          setEtfdata(tempArray);
        }
      } else {
        await getSectorETF();
      }
      setisLoading(false);
    })();
  }, [etfid]);

  const checketfindustryActive = (ind, indId) => {
    if (indId) {
      setetfindid(indId);
    }
    if (etfinditems !== ind) {
      setetfinditems(ind);
    } else {
      setetfinditems();
    }
  };

  useEffect(() => {
    (async () => {
      setisLoading(true);
      var res;
      if (etfindid) {
        res = await getIndustryETF(etfindid);
        if (res && res?.status === 200 && res?.etfData) {
          let tempArray = [];
          for (let data of res.etfData) {
            let obj = {
              symbol: data.symbol,
              companyName: data.companyName,
              latestPrice: data.latestPrice,
              change: data.change,
              changePercent: data.changePercent,
              marketCap: data.marketCap,
              avgTotalVolume: data.avgTotalVolume,
              week52Low: data.week52Low,
              week52High: data.week52High,
              beta: data.beta,
              sharesOutstanding: data.sharesOutstanding,
              month1ChangePercent: data.month1ChangePercent,
              month3ChangePercent: data.month3ChangePercent,
              month6ChangePercent: data.month6ChangePercent,
              ytdChangePercent: data.ytdChangePercent,
              year1ChangePercent: data.year1ChangePercent,
              year5ChangePercent: data.year5ChangePercent,
            };
            tempArray.push(obj);
          }
          setEtfdata(tempArray);
        }
      } else {
        await getIndustryETF();
      }
      setisLoading(false);
    })();
  }, [etfindid]);

  const getAllSectorsData = async () => {
    setisLoading(true);
    setSectorId(null);
    setIndustryId(null);
    setisLoading(false);
  };
  return (
    <div className='main'>
      <section className='sectors_sec'>
        <div className='container'>
          <div className='row'>
            <SectorsList
              getAllSectorsData={getAllSectorsData}
              setSectorId={setSectorId}
              setIndustryId={setIndustryId}
            />

            <SectorsContent
              ChartData={ChartData}
              title={title}
              defination={defination}
            />
          </div>
          <div className='row mt-4'>
            <div className='col-lg-12'>
              <div className='top_eta'>
                <div className='mb-5'>
                  <div className='d-flex align-items-center justify-content-between border p-3 border-bottom-0'>
                    <h6 className='m-0'>
                      <strong>Top ETF Preformance</strong>
                    </h6>
                  </div>
                  <div className='accordion' id='acc_sidefilter'>
                    {loading && (
                      <div
                        style={{
                          height: 110,
                          padding: 30,
                          textAlign: 'center',
                        }}
                      >
                        <div colSpan={6} style={{ textAlign: 'center' }}>
                          <CircularProgress size={50} />
                        </div>
                      </div>
                    )}
                    {!sectorId && !industryId ? (
                      <>
                        {!loading &&
                          sectors &&
                          sectors.length > 0 &&
                          sectors.map((items, i) => {
                            return (
                              <div key={i} className='in_acc_item'>
                                <h2
                                  className='in_acc_header'
                                  id='acc_industries'
                                >
                                  <button
                                    className={
                                      'accordion-button' +
                                      (etfitems == i
                                        ? ' active '
                                        : ' collapsed ')
                                    }
                                    onClick={() =>
                                      checkEtfActiveItems(i, items.id)
                                    }
                                  >
                                    <span className='d-block w-100'>
                                      {items.name}
                                    </span>
                                  </button>
                                </h2>
                                {etfid && (
                                  <div
                                    id='coll_industries'
                                    className={
                                      'accordion-collapse collapse' +
                                      (etfitems == i ? 'show' : '')
                                    }
                                  >
                                    <div className='in_acc_body'>
                                      <div className='table-responsive'>
                                        <table
                                          className='table table-bordered m-0 most_tables'
                                          style={{ width: '1800px' }}
                                        >
                                          <thead className='table-light'>
                                            <tr>
                                              <th scope='col'>Symbol</th>
                                              <th
                                                scope='col'
                                                colSpan={5}
                                                style={{ textAlign: 'left' }}
                                              >
                                                Company Name
                                              </th>
                                              <th scope='col'>Latest Price</th>
                                              <th scope='col'>Change</th>
                                              <th scope='col'>
                                                Change Percent
                                              </th>
                                              <th scope='col'>Market Cap</th>
                                              <th scope='col'>
                                                Avg Total Volume
                                              </th>
                                              <th scope='col'>52 Week Low</th>
                                              <th scope='col'>52 Week High</th>
                                              <th scope='col'>Beta</th>
                                              <th scope='col'>
                                                Shares Outstanding
                                              </th>
                                              <th scope='col'>1M</th>
                                              <th scope='col'>3M</th>
                                              <th scope='col'>6M</th>
                                              <th scope='col'>YTD</th>
                                              <th scope='col'>1Y</th>
                                              <th scope='col'>5Y</th>
                                            </tr>
                                          </thead>
                                          <tbody className='border-top-0'>
                                            {etfData.map((etfData) => {
                                              const symb = etfData.symbol || '';
                                              const cmpny =
                                                etfData.companyName || '';
                                              const ltstPrice =
                                                etfData.latestPrice || '';
                                              const chng = etfData.change || '';
                                              const chngper =
                                                etfData.changePercent || '';
                                              const mrktcap =
                                                abbreviateNumber(
                                                  etfData.marketCap
                                                ) || '';
                                              const avgTVolume =
                                                etfData.avgTotalVolume || '';
                                              const wkslow =
                                                etfData.week52Low || '';
                                              const wkshigh =
                                                etfData.week52High || '';
                                              const bta =
                                                etfData.beta.toFixed(3) || '';
                                              const sharesout =
                                                abbreviateNumber(
                                                  etfData.sharesOutstanding
                                                ) || '';
                                              const onemnth =
                                                etfData.month1ChangePercent.toFixed(
                                                  3
                                                ) || '';
                                              const threemnth =
                                                etfData.month3ChangePercent.toFixed(
                                                  3
                                                ) || '';
                                              const sixmnth =
                                                etfData.month6ChangePercent.toFixed(
                                                  3
                                                ) || '';
                                              const ytdchnge =
                                                etfData.ytdChangePercent.toFixed(
                                                  3
                                                ) || '';
                                              const oneyrchnge =
                                                etfData.year1ChangePercent.toFixed(
                                                  3
                                                ) || '';
                                              const fiveyerchange =
                                                etfData.year5ChangePercent.toFixed(
                                                  3
                                                ) || '';
                                              return (
                                                <tr>
                                                  <td>{symb}</td>
                                                  <td
                                                    colSpan={5}
                                                    style={{
                                                      textAlign: 'left',
                                                    }}
                                                  >
                                                    {cmpny}
                                                  </td>
                                                  <td>{ltstPrice}</td>
                                                  <td>{chng}</td>
                                                  <td>{chngper}</td>
                                                  <td>{mrktcap}</td>
                                                  <td>{avgTVolume}</td>
                                                  <td>{wkslow}</td>
                                                  <td>{wkshigh}</td>
                                                  <td>{bta}</td>
                                                  <td>{sharesout}</td>
                                                  <td>{onemnth}</td>
                                                  <td>{threemnth}</td>
                                                  <td>{sixmnth}</td>
                                                  <td>{ytdchnge}</td>
                                                  <td>{oneyrchnge}</td>
                                                  <td>{fiveyerchange}</td>
                                                </tr>
                                              );
                                            })}
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                      </>
                    ) : sectorId && !industryId ? (
                      <>
                        {!loading &&
                          industries &&
                          industries.length > 0 &&
                          industries.map((items, i) => {
                            return (
                              <div key={i} className='in_acc_item'>
                                <h2
                                  className='in_acc_header'
                                  id='acc_industries'
                                >
                                  <button
                                    className={
                                      'accordion-button' +
                                      (etfinditems == i
                                        ? ' active '
                                        : ' collapsed ')
                                    }
                                    onClick={() =>
                                      checketfindustryActive(i, items.id)
                                    }
                                  >
                                    <span className='d-block w-100'>
                                      {items.name}
                                    </span>
                                  </button>
                                </h2>
                                {etfindid && (
                                  <div
                                    id='coll_industries'
                                    className={
                                      'accordion-collapse collapse' +
                                      (etfinditems == i ? 'show' : '')
                                    }
                                  >
                                    <div className='in_acc_body'>
                                      <div className='table-responsive'>
                                        <table
                                          className='table table-bordered m-0 most_tables'
                                          style={{ width: '1800px' }}
                                        >
                                          <thead className='table-light'>
                                            <tr>
                                              <th scope='col'>Symbol</th>
                                              <th
                                                scope='col'
                                                colSpan={5}
                                                style={{ textAlign: 'left' }}
                                              >
                                                Company Name
                                              </th>
                                              <th scope='col'>Latest Price</th>
                                              <th scope='col'>Change</th>
                                              <th scope='col'>
                                                Change Percent
                                              </th>
                                              <th scope='col'>Market Cap</th>
                                              <th scope='col'>
                                                Avg Total Volume
                                              </th>
                                              <th scope='col'>52 Week Low</th>
                                              <th scope='col'>52 Week High</th>
                                              <th scope='col'>Beta</th>
                                              <th scope='col'>
                                                Shares Outstanding
                                              </th>
                                              <th scope='col'>1M</th>
                                              <th scope='col'>3M</th>
                                              <th scope='col'>6M</th>
                                              <th scope='col'>YTD</th>
                                              <th scope='col'>1Y</th>
                                              <th scope='col'>5Y</th>
                                            </tr>
                                          </thead>
                                          <tbody className='border-top-0'>
                                            {etfData.map((etfData) => {
                                              const symb = etfData.symbol || '';
                                              const cmpny =
                                                etfData.companyName || '';
                                              const ltstPrice =
                                                etfData.latestPrice || '';
                                              const chng = etfData.change || '';
                                              const chngper =
                                                etfData.changePercent || '';
                                              const mrktcap =
                                                abbreviateNumber(
                                                  etfData.marketCap
                                                ) || '';
                                              const avgTVolume =
                                                etfData.avgTotalVolume || '';
                                              const wkslow =
                                                etfData.week52Low || '';
                                              const wkshigh =
                                                etfData.week52High || '';
                                              const bta =
                                                etfData.beta.toFixed(3) || '';
                                              const sharesout =
                                                abbreviateNumber(
                                                  etfData.sharesOutstanding
                                                ) || '';
                                              const onemnth =
                                                etfData.month1ChangePercent.toFixed(
                                                  3
                                                ) || '';
                                              const threemnth =
                                                etfData.month3ChangePercent.toFixed(
                                                  3
                                                ) || '';
                                              const sixmnth =
                                                etfData.month6ChangePercent.toFixed(
                                                  3
                                                ) || '';
                                              const ytdchnge =
                                                etfData.ytdChangePercent.toFixed(
                                                  3
                                                ) || '';
                                              const oneyrchnge =
                                                etfData.year1ChangePercent.toFixed(
                                                  3
                                                ) || '';
                                              const fiveyerchange =
                                                etfData.year5ChangePercent.toFixed(
                                                  3
                                                ) || '';
                                              return (
                                                <tr>
                                                  <td>{symb}</td>
                                                  <td
                                                    colSpan={5}
                                                    style={{
                                                      textAlign: 'left',
                                                    }}
                                                  >
                                                    {cmpny}
                                                  </td>
                                                  <td>{ltstPrice}</td>
                                                  <td>{chng}</td>
                                                  <td>{chngper}</td>
                                                  <td>{mrktcap}</td>
                                                  <td>{avgTVolume}</td>
                                                  <td>{wkslow}</td>
                                                  <td>{wkshigh}</td>
                                                  <td>{bta}</td>
                                                  <td>{sharesout}</td>
                                                  <td>{onemnth}</td>
                                                  <td>{threemnth}</td>
                                                  <td>{sixmnth}</td>
                                                  <td>{ytdchnge}</td>
                                                  <td>{oneyrchnge}</td>
                                                  <td>{fiveyerchange}</td>
                                                </tr>
                                              );
                                            })}
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                      </>
                    ) : (
                      <>
                        {
                          <div className='in_acc_item'>
                            <div className='in_acc_body'>
                              <div className='table-responsive'>
                                <table
                                  className='table table-bordered m-0 most_tables'
                                  style={{ width: '1800px' }}
                                >
                                  <thead className='table-light'>
                                    <tr>
                                      <th scope='col'>Symbol</th>
                                      <th
                                        scope='col'
                                        colSpan={5}
                                        style={{ textAlign: 'left' }}
                                      >
                                        Company Name
                                      </th>
                                      <th scope='col'>Latest Price</th>
                                      <th scope='col'>Change</th>
                                      <th scope='col'>Change Percent</th>
                                      <th scope='col'>Market Cap</th>
                                      <th scope='col'>Avg Total Volume</th>
                                      <th scope='col'>52 Week Low</th>
                                      <th scope='col'>52 Week High</th>
                                      <th scope='col'>Beta</th>
                                      <th scope='col'>Shares Outstanding</th>
                                      <th scope='col'>1M</th>
                                      <th scope='col'>3M</th>
                                      <th scope='col'>6M</th>
                                      <th scope='col'>YTD</th>
                                      <th scope='col'>1Y</th>
                                      <th scope='col'>5Y</th>
                                    </tr>
                                  </thead>
                                  <tbody className='border-top-0'>
                                    {etfData.map((etfData) => {
                                      const symb = etfData.symbol || '';
                                      const cmpny = etfData.companyName || '';
                                      const ltstPrice =
                                        etfData.latestPrice || '';
                                      const chng = etfData.change || '';
                                      const chngper =
                                        etfData.changePercent || '';
                                      const mrktcap =
                                        abbreviateNumber(etfData.marketCap) ||
                                        '';
                                      const avgTVolume =
                                        etfData.avgTotalVolume || '';
                                      const wkslow = etfData.week52Low || '';
                                      const wkshigh = etfData.week52High || '';
                                      const bta = etfData.beta.toFixed(3) || '';
                                      const sharesout =
                                        abbreviateNumber(
                                          etfData.sharesOutstanding
                                        ) || '';
                                      const onemnth =
                                        etfData.month1ChangePercent.toFixed(
                                          3
                                        ) || '';
                                      const threemnth =
                                        etfData.month3ChangePercent.toFixed(
                                          3
                                        ) || '';
                                      const sixmnth =
                                        etfData.month6ChangePercent.toFixed(
                                          3
                                        ) || '';
                                      const ytdchnge =
                                        etfData.ytdChangePercent.toFixed(3) ||
                                        '';
                                      const oneyrchnge =
                                        etfData.year1ChangePercent.toFixed(3) ||
                                        '';
                                      const fiveyerchange =
                                        etfData.year5ChangePercent.toFixed(3) ||
                                        '';
                                      return (
                                        <tr>
                                          <td>{symb}</td>
                                          <td
                                            colSpan={5}
                                            style={{ textAlign: 'left' }}
                                          >
                                            {cmpny}
                                          </td>
                                          <td>{ltstPrice}</td>
                                          <td>{chng}</td>
                                          <td>{chngper}</td>
                                          <td>{mrktcap}</td>
                                          <td>{avgTVolume}</td>
                                          <td>{wkslow}</td>
                                          <td>{wkshigh}</td>
                                          <td>{bta}</td>
                                          <td>{sharesout}</td>
                                          <td>{onemnth}</td>
                                          <td>{threemnth}</td>
                                          <td>{sixmnth}</td>
                                          <td>{ytdchnge}</td>
                                          <td>{oneyrchnge}</td>
                                          <td>{fiveyerchange}</td>
                                        </tr>
                                      );
                                    })}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        }
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sectors;
