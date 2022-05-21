import { CircularProgress } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import abbreviateNumber from '../../Common/NumberFormat';
import { PricingDef } from './defination';

const Pricing = ({ data, Loading }) => {
  const [Pricingdata, setPricingdata] = useState([]);
  var name = [
    'EV/EBIT',
    'EV/EBITDA',
    'Enterprise Value to Free Cash Flow',
    'Enterprise Value to Invested Capital',
    'Enterprise Value to NOPAT',
    'Enterprise Value to Operating Cash Flow',
    'EV/Sales',
    'Free Cashflow Yield (%)',
    'P/BV',
    'P/E',
    'Price to Revenue',
  ];

  useEffect(() => {
    if (data && data.length > 0) {
      var current = [
        {
          col0: name[0],
          col1: data[0]?.evToEbit,
          col2: data[1]?.evToEbit,
          col3: data[2]?.evToEbit,
          col4: data[3]?.evToEbit,
          col5: data[4]?.evToEbit,
          col6: data[5]?.evToEbit,
          col7: data[6]?.evToEbit,
          col8: data[7]?.evToEbit,
          col9: data[8]?.evToEbit,
          col10: data[9]?.evToEbit,
          tooltip: PricingDef.evToEbit,
        },
        {
          col0: name[1],
          col1: data[0]?.evToEbitda,
          col2: data[1]?.evToEbitda,
          col3: data[2]?.evToEbitda,
          col4: data[3]?.evToEbitda,
          col5: data[4]?.evToEbitda,
          col6: data[5]?.evToEbitda,
          col7: data[6]?.evToEbitda,
          col8: data[7]?.evToEbitda,
          col9: data[8]?.evToEbitda,
          col10: data[9]?.evToEbitda,
          tooltip: PricingDef.evToEbitda,
        },
        {
          col0: name[2],
          col1: data[0]?.evToFcf,
          col2: data[1]?.evToFcf,
          col3: data[2]?.evToFcf,
          col4: data[3]?.evToFcf,
          col5: data[4]?.evToFcf,
          col6: data[5]?.evToFcf,
          col7: data[6]?.evToFcf,
          col8: data[7]?.evToFcf,
          col9: data[8]?.evToFcf,
          col10: data[9]?.evToFcf,
          tooltip: PricingDef.evToFcf,
        },
        {
          col0: name[3],
          col1: data[0]?.evToInvestedCapital,
          col2: data[1]?.evToInvestedCapital,
          col3: data[2]?.evToInvestedCapital,
          col4: data[3]?.evToInvestedCapital,
          col5: data[4]?.evToInvestedCapital,
          col6: data[5]?.evToInvestedCapital,
          col7: data[6]?.evToInvestedCapital,
          col8: data[7]?.evToInvestedCapital,
          col9: data[8]?.evToInvestedCapital,
          col10: data[9]?.evToInvestedCapital,
          tooltip: PricingDef.evToInvestedCapital,
        },
        {
          col0: name[4],
          col1: data[0]?.evToNopat,
          col2: data[1]?.evToNopat,
          col3: data[2]?.evToNopat,
          col4: data[3]?.evToNopat,
          col5: data[4]?.evToNopat,
          col6: data[5]?.evToNopat,
          col7: data[6]?.evToNopat,
          col8: data[7]?.evToNopat,
          col9: data[8]?.evToNopat,
          col10: data[9]?.evToNopat,
          tooltip: PricingDef.evToNopat,
        },
        {
          col0: name[5],
          col1: data[0]?.evToOcf,
          col2: data[1]?.evToOcf,
          col3: data[2]?.evToOcf,
          col4: data[3]?.evToOcf,
          col5: data[4]?.evToOcf,
          col6: data[5]?.evToOcf,
          col7: data[6]?.evToOcf,
          col8: data[7]?.evToOcf,
          col9: data[8]?.evToOcf,
          col10: data[9]?.evToOcf,
          tooltip: PricingDef.evToOcf,
        },
        {
          col0: name[6],
          col1: data[0]?.evToSales,
          col2: data[1]?.evToSales,
          col3: data[2]?.evToSales,
          col4: data[3]?.evToSales,
          col5: data[4]?.evToSales,
          col6: data[5]?.evToSales,
          col7: data[6]?.evToSales,
          col8: data[7]?.evToSales,
          col9: data[8]?.evToSales,
          col10: data[9]?.evToSales,
          tooltip: PricingDef.evToSales,
        },
        {
          col0: name[7],
          col1: data[0]?.fcfYield,
          col2: data[1]?.fcfYield,
          col3: data[2]?.fcfYield,
          col4: data[3]?.fcfYield,
          col5: data[4]?.fcfYield,
          col6: data[5]?.fcfYield,
          col7: data[6]?.fcfYield,
          col8: data[7]?.fcfYield,
          col9: data[8]?.fcfYield,
          col10: data[9]?.fcfYield,
          tooltip: PricingDef.fcfYield,
        },
        {
          col0: name[8],
          col1: data[0]?.pToBv,
          col2: data[1]?.pToBv,
          col3: data[2]?.pToBv,
          col4: data[3]?.pToBv,
          col5: data[4]?.pToBv,
          col6: data[5]?.pToBv,
          col7: data[6]?.pToBv,
          col8: data[7]?.pToBv,
          col9: data[8]?.pToBv,
          col10: data[9]?.pToBv,
          tooltip: PricingDef.pToBv,
        },
        {
          col0: name[9],
          col1: data[0]?.pToE,
          col2: data[1]?.pToE,
          col3: data[2]?.pToE,
          col4: data[3]?.pToE,
          col5: data[4]?.pToE,
          col6: data[5]?.pToE,
          col7: data[6]?.pToE,
          col8: data[7]?.pToE,
          col9: data[8]?.pToE,
          col10: data[9]?.pToE,
          tooltip: PricingDef.pToE,
        },
        {
          col0: name[10],
          col1: data[0]?.priceToRevenue,
          col2: data[1]?.priceToRevenue,
          col3: data[2]?.priceToRevenue,
          col4: data[3]?.priceToRevenue,
          col5: data[4]?.priceToRevenue,
          col6: data[5]?.priceToRevenue,
          col7: data[6]?.priceToRevenue,
          col8: data[7]?.priceToRevenue,
          col9: data[8]?.priceToRevenue,
          col10: data[9]?.priceToRevenue,
          tooltip: PricingDef.priceToRevenue,
        },
      ];
      setPricingdata(current);
    }
  }, [data]);
  return (
    <div className='table-responsive mt-4'>
      <table className='table table-bordered m-0 most_tables'>
        <thead className='table-light'>
          <tr>
            <th scope='col'>-</th>
            <th scope='col'>Historical Visualisation</th>
            {data &&
              data.length > 0 &&
              data.map((el, i) => {
                return (
                  <th key={i} scope='col'>
                    {el.quarter > 0 ? 'Q' + el.quarter : ''} {el.year}
                  </th>
                );
              })}
          </tr>
        </thead>
        <tbody className='border-top-0'>
          {Loading && (
            <tr style={{ height: 100, textAlign: 'center' }}>
              <td colSpan={6} style={{ textAlign: 'center' }}>
                <CircularProgress size={50} />
              </td>
            </tr>
          )}
          {!Loading &&
            Pricingdata &&
            Pricingdata.length > 0 &&
            Pricingdata.map((ob, i) => {
              return (
                <tr key={i}>
                  {ob.col0 && (
                    <td>
                      {ob.col0}{' '}
                      <i
                        class='bi bi-info-circle m-1'
                        data-toggle='tooltip'
                        title={ob.tooltip}
                      ></i>
                    </td>
                  )}
                  {
                    <td className='float-end'>
                      <div className='form-check mb-0'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          value=''
                          id=''
                        />
                      </div>
                    </td>
                  }
                  {ob.col1 && <td>{abbreviateNumber(ob.col1.slice(0, 6))}</td>}
                  {ob.col2 && <td>{abbreviateNumber(ob.col2.slice(0, 6))}</td>}
                  {ob.col3 && <td>{abbreviateNumber(ob.col3.slice(0, 6))}</td>}
                  {ob.col4 && <td>{abbreviateNumber(ob.col4.slice(0, 6))}</td>}
                  {ob.col5 && <td>{abbreviateNumber(ob.col5.slice(0, 6))}</td>}
                  {ob.col6 && <td>{abbreviateNumber(ob.col6.slice(0, 6))}</td>}
                  {ob.col7 && <td>{abbreviateNumber(ob.col7.slice(0, 6))}</td>}
                  {ob.col8 && <td>{abbreviateNumber(ob.col8.slice(0, 6))}</td>}
                  {ob.col9 && <td>{abbreviateNumber(ob.col9.slice(0, 6))}</td>}
                  {ob.col10 && (
                    <td>{abbreviateNumber(ob.col10.slice(0, 6))}</td>
                  )}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Pricing;