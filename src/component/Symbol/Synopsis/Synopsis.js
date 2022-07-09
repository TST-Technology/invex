import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCompanyProfileQuote, getCompanyStockPeers } from '../../api/Symbol';
import abbreviateNumber from '../../Common/NumberFormat';
import ReadMore from '../../Common/ReadMore/ReadMore';
import { TOP_COMPETITOR_COLUMNS } from '../Constants';
import { replaceEmpty } from '../../Common/commonFunctions';
import { CircularProgress } from '@material-ui/core';
import moment from 'moment';

const Synopsis = () => {
  const { symbol } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [topCompetitors, setTopCompetitors] = useState(null);

  useEffect(() => {
    (async () => {
      if (symbol) {
        setIsLoading(true);

        const resp = await Promise.all([
          getCompanyProfileQuote({ symbol: symbol }),
          getCompanyStockPeers({ symbol: symbol }),
        ]);

        const data = resp[0];
        const data2 = resp[1];
        if (data && data.status == 200 && data.data) {
          setData(data.data);
        }
        if (
          data2 &&
          data2.status == 200 &&
          data2.data &&
          data2.data[0] &&
          data2.data[0].peersList
        ) {
          setIsLoading(true);
          Promise.all(
            data2.data[0].peersList.map((company) => {
              return getCompanyProfileQuote({ symbol: company });
            })
          )
            .then((values) => {
              const tableData = values.map((value) => {
                return value.data;
              });
              setTopCompetitors(tableData);
            })
            .finally(() => {
              setIsLoading(false);
            });
        }

        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <>
      {isLoading && (
        <div
          style={{
            height: 450,
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress />
        </div>
      )}

      {!isLoading && data && (
        <>
          <div className='row mt-5'>
            <div className='col-lg-6'>
              <div className='mb-4'>
                <h4 className='me-auto mb-4'>Price Summary & Volume</h4>
                <div className='row '>
                  <div className='col-lg-3'>
                    <div className='title-lt mb-2'>Open</div>
                    <span>{data?.open}</span>
                  </div>
                  <div className='col-lg-3'>
                    <div className='title-lt mb-2'>Previous Close</div>
                    <span>{data?.previousClose}</span>
                  </div>
                  <div className='col-lg-3'>
                    <div className='title-lt mb-2'>Today’s Low</div>
                    <span>{data?.dayLow}</span>
                  </div>
                  <div className='col-lg-3'>
                    <div className='title-lt mb-2'>Today’s High</div>
                    <span>{data?.dayHigh}</span>
                  </div>

                  <hr />

                  <div className='col-lg-3'>
                    <div className='title-lt mb-2'>52 Week High</div>
                    <span>{data?.yearHigh}</span>
                  </div>
                  <div className='col-lg-3'>
                    <div className='title-lt mb-2'>52 Week Low</div>
                    <span>{data?.yearLow}</span>
                  </div>
                  <div className='col-lg-3'>
                    <div className='title-lt mb-2'>Latest Volume</div>
                    <span>{abbreviateNumber(data?.volume)}</span>
                  </div>
                  <div className='col-lg-3'>
                    <div className='title-lt mb-2'>Previous Volume</div>
                    <span>{abbreviateNumber(data?.avgVolume)}</span>
                  </div>

                  <hr />
                </div>

                <h4 className='me-auto mb-4 mt-3'>Company Essentials</h4>

                <div className='row '>
                  <div className='col-lg-3'>
                    <div className='title-lt mb-2'>Market Cap</div>
                    <span>{abbreviateNumber(data?.marketCap)}</span>
                  </div>
                  <div className='col-lg-3'>
                    <div className='title-lt mb-2'>Shares Outstanding</div>
                    <span>{data?.sharesOutstanding}</span>
                  </div>
                  <div className='col-lg-3'>
                    <div className='title-lt mb-2'>Beta</div>
                    <span>{parseFloat(data?.beta).toFixed(2)}</span>
                  </div>
                  <div className='col-lg-3'>
                    <div className='title-lt mb-2'>PE Ratio</div>
                    <span>{parseFloat(data?.pe).toFixed(2)}</span>
                  </div>

                  <hr />

                  <div className='col-lg-3'>
                    <div className='title-lt mb-2'>EPS(TTM)</div>
                    <span>{data?.eps}</span>
                  </div>
                  <div className='col-lg-3'>
                    <div className='title-lt mb-2'>Next Earnings Date</div>
                    <span>
                      {moment(data?.earningsAnnouncement).format('YYYY/MM/DD')}
                    </span>
                  </div>
                  <div className='col-lg-3'>
                    <div className='title-lt mb-2'>Dividend Rate(TTM)</div>
                    <span>-</span>
                  </div>
                  <div className='col-lg-3'>
                    <div className='title-lt mb-2'>Dividend Yield</div>
                    <span>-</span>
                  </div>

                  <hr />

                  <div className='col-lg-3'>
                    <div className='title-lt mb-2'>Ex-Dividend Date</div>
                    <span>-</span>
                  </div>

                  <hr />
                </div>
              </div>
            </div>

            <div className='col-lg-6'></div>
          </div>

          <div className='row'>
            <div className='col-lg-4'>
              <div className='mb-4'>
                <h4 className='me-auto mb-4 mt-3'>Company Info</h4>

                <ReadMore text={data?.description} limit={250} />

                <div className='d-flex justify-content-between'>
                  <div className='title-lt mb-2'>Website</div>
                  <span>{data?.website}</span>
                </div>

                <div className='d-flex justify-content-between'>
                  <div className='title-lt mb-2'>Employees</div>
                  <span>{abbreviateNumber(data?.fullTimeEmployees)}</span>
                </div>

                <div className='d-flex justify-content-between'>
                  <div className='title-lt mb-2'>Country</div>
                  <span>{data?.country}</span>
                </div>

                <div className='d-flex justify-content-between'>
                  <div className='title-lt mb-2'>CEO</div>
                  <span>{data?.ceo}</span>
                </div>
              </div>
            </div>

            <div className='col-lg-8'>
              <div className='mb-4'></div>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-12'>
              <h4 className='me-auto mb-4 mt-3'>Top Competitors</h4>

              <div className='mb-5'>
                <div className='table-responsive'>
                  {topCompetitors && (
                    <table className='table table-bordered table-striped m-0 most_tables'>
                      <thead>
                        <tr>
                          {TOP_COMPETITOR_COLUMNS &&
                            TOP_COMPETITOR_COLUMNS.map((heading, index) => {
                              return (
                                <th key={index} scope='col'>
                                  {heading}
                                </th>
                              );
                            })}
                        </tr>
                      </thead>
                      <tbody className='border-top-0'>
                        {topCompetitors.map((row, index) => {
                          return (
                            <tr key={index}>
                              <td>{replaceEmpty(row?.symbol)}</td>
                              <td>{replaceEmpty(row?.price)}</td>
                              <td>
                                {row?.marketCap
                                  ? abbreviateNumber(row?.marketCap)
                                  : '-'}
                              </td>
                              <td>
                                {row?.beta
                                  ? parseFloat(row?.beta).toFixed(2)
                                  : '-'}
                              </td>
                              <td>
                                {row?.pe ? parseFloat(row?.pe).toFixed(2) : '-'}
                              </td>
                              <td>{replaceEmpty(row?.eps)}</td>
                              <td>-</td>
                              <td>-</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Synopsis;
