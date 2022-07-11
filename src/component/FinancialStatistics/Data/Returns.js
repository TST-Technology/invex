import { CircularProgress } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import abbreviateNumber from '../../Common/NumberFormat';
import { ReturnDef } from './defination';
import CustomChart from '../../Graph/CustomChart';

const Returns = ({ data, Loading }) => {
  const [Returnsdata, setReturnsdata] = useState([]);
  const [ReturnsDataAsc, setReturnsDataAsc] = useState([]);
  const [chartLabel, setChartLabel] = useState();
  const [checkedValues, setCheckedValues] = useState([]);
  const [dataSets, setDataSets] = useState([]);

  var name = [
    'Operating Return on Assets (OROA)',
    'Return on Assets (ROA)',
    'Return on Equity (ROE)',
    'Return on Capital Employed (ROCE)',
    'Return on Invested Capital (ROIC)',
  ];

  useEffect(() => {
    if (data && data.length > 0) {
      data.sort(function (a, b) {
        return b.year - a.year || b.quarter - a.quarter;
      });

      const labels = data.map((el) => {
        const quarter = el.quarter > 0 ? 'Q' + el.quarter : '';
        return `${quarter} ${el.year}`;
      });

      setChartLabel(labels.reverse());

      var current = [
        {
          col0: name[0],
          col1: data[0]?.operatingReturnOnAssets,
          col2: data[1]?.operatingReturnOnAssets,
          col3: data[2]?.operatingReturnOnAssets,
          col4: data[3]?.operatingReturnOnAssets,
          col5: data[4]?.operatingReturnOnAssets,
          col6: data[5]?.operatingReturnOnAssets,
          col7: data[6]?.operatingReturnOnAssets,
          col8: data[7]?.operatingReturnOnAssets,
          col9: data[8]?.operatingReturnOnAssets,
          col10: data[9]?.operatingReturnOnAssets,
          tooltip: ReturnDef.operatingReturnOnAssets,
        },
        {
          col0: name[1],
          col1: data[0]?.returnOnAssets,
          col2: data[1]?.returnOnAssets,
          col3: data[2]?.returnOnAssets,
          col4: data[3]?.returnOnAssets,
          col5: data[4]?.returnOnAssets,
          col6: data[5]?.returnOnAssets,
          col7: data[6]?.returnOnAssets,
          col8: data[7]?.returnOnAssets,
          col9: data[8]?.returnOnAssets,
          col10: data[9]?.returnOnAssets,
          tooltip: ReturnDef.returnOnAssets,
        },
        {
          col0: name[2],
          col1: data[0]?.returnOnEquity,
          col2: data[1]?.returnOnEquity,
          col3: data[2]?.returnOnEquity,
          col4: data[3]?.returnOnEquity,
          col5: data[4]?.returnOnEquity,
          col6: data[5]?.returnOnEquity,
          col7: data[6]?.returnOnEquity,
          col8: data[7]?.returnOnEquity,
          col9: data[8]?.returnOnEquity,
          col10: data[9]?.returnOnEquity,
          tooltip: ReturnDef.returnOnEquity,
        },
        {
          col0: name[3],
          col1: data[0]?.roce,
          col2: data[1]?.roce,
          col3: data[2]?.roce,
          col4: data[3]?.roce,
          col5: data[4]?.roce,
          col6: data[5]?.roce,
          col7: data[6]?.roce,
          col8: data[7]?.roce,
          col9: data[8]?.roce,
          col10: data[9]?.roce,
          tooltip: ReturnDef.roce,
        },
        {
          col0: name[4],
          col1: data[0]?.roic,
          col2: data[1]?.roic,
          col3: data[2]?.roic,
          col4: data[3]?.roic,
          col5: data[4]?.roic,
          col6: data[5]?.roic,
          col7: data[6]?.roic,
          col8: data[7]?.roic,
          col9: data[8]?.roic,
          col10: data[9]?.roic,
          tooltip: ReturnDef.roic,
        },
      ];
      setReturnsdata(current);

      const dataAsc = data.slice();

      dataAsc.sort(function (a, b) {
        return a.year - b.year || a.quarter - b.quarter;
      });

      var currentAsc = [
        {
          col0: name[0],
          col1: dataAsc[0]?.operatingReturnOnAssets,
          col2: dataAsc[1]?.operatingReturnOnAssets,
          col3: dataAsc[2]?.operatingReturnOnAssets,
          col4: dataAsc[3]?.operatingReturnOnAssets,
          col5: dataAsc[4]?.operatingReturnOnAssets,
          col6: dataAsc[5]?.operatingReturnOnAssets,
          col7: dataAsc[6]?.operatingReturnOnAssets,
          col8: dataAsc[7]?.operatingReturnOnAssets,
          col9: dataAsc[8]?.operatingReturnOnAssets,
          col10: dataAsc[9]?.operatingReturnOnAssets,
          tooltip: ReturnDef.operatingReturnOnAssets,
        },
        {
          col0: name[1],
          col1: dataAsc[0]?.returnOnAssets,
          col2: dataAsc[1]?.returnOnAssets,
          col3: dataAsc[2]?.returnOnAssets,
          col4: dataAsc[3]?.returnOnAssets,
          col5: dataAsc[4]?.returnOnAssets,
          col6: dataAsc[5]?.returnOnAssets,
          col7: dataAsc[6]?.returnOnAssets,
          col8: dataAsc[7]?.returnOnAssets,
          col9: dataAsc[8]?.returnOnAssets,
          col10: dataAsc[9]?.returnOnAssets,
          tooltip: ReturnDef.returnOnAssets,
        },
        {
          col0: name[2],
          col1: dataAsc[0]?.returnOnEquity,
          col2: dataAsc[1]?.returnOnEquity,
          col3: dataAsc[2]?.returnOnEquity,
          col4: dataAsc[3]?.returnOnEquity,
          col5: dataAsc[4]?.returnOnEquity,
          col6: dataAsc[5]?.returnOnEquity,
          col7: dataAsc[6]?.returnOnEquity,
          col8: dataAsc[7]?.returnOnEquity,
          col9: dataAsc[8]?.returnOnEquity,
          col10: dataAsc[9]?.returnOnEquity,
          tooltip: ReturnDef.returnOnEquity,
        },
        {
          col0: name[3],
          col1: dataAsc[0]?.roce,
          col2: dataAsc[1]?.roce,
          col3: dataAsc[2]?.roce,
          col4: dataAsc[3]?.roce,
          col5: dataAsc[4]?.roce,
          col6: dataAsc[5]?.roce,
          col7: dataAsc[6]?.roce,
          col8: dataAsc[7]?.roce,
          col9: dataAsc[8]?.roce,
          col10: dataAsc[9]?.roce,
          tooltip: ReturnDef.roce,
        },
        {
          col0: name[4],
          col1: dataAsc[0]?.roic,
          col2: dataAsc[1]?.roic,
          col3: dataAsc[2]?.roic,
          col4: dataAsc[3]?.roic,
          col5: dataAsc[4]?.roic,
          col6: dataAsc[5]?.roic,
          col7: dataAsc[6]?.roic,
          col8: dataAsc[7]?.roic,
          col9: dataAsc[8]?.roic,
          col10: dataAsc[9]?.roic,
          tooltip: ReturnDef.roic,
        },
      ];

      setReturnsDataAsc(currentAsc);

      setCheckedValues([]);
    }
  }, [data]);

  useEffect(() => {
    setDataSets(
      checkedValues &&
        checkedValues.map((index) => {
          const row = Object.values(ReturnsDataAsc[index]);
          return {
            label: row[0],
            data: row.slice(1, row.length),
            borderColor:
              'rgb(' +
              Math.floor(Math.random() * 255) +
              ',' +
              Math.floor(Math.random() * 255) +
              ',' +
              Math.floor(Math.random() * 255) +
              ')',
            backgroundColor:
              'rgba(' +
              Math.floor(Math.random() * 255) +
              ',' +
              Math.floor(Math.random() * 255) +
              ',' +
              Math.floor(Math.random() * 255) +
              ', 0.5)',
          };
        })
    );
  }, [checkedValues]);

  const onChange = (event, index) => {
    if (event.target.checked) {
      if (!checkedValues.includes(index)) {
        const tempArr = checkedValues;
        tempArr.push(index);
        setCheckedValues([...tempArr]);
      }
    } else {
      const tempArr = checkedValues;
      const i = tempArr.indexOf(index);
      if (i > -1) {
        tempArr.splice(i, 1);
      }
      setCheckedValues([...tempArr]);
    }
  };

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
            Returnsdata &&
            Returnsdata.length > 0 &&
            Returnsdata.map((ob, i) => {
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
                          onChange={(e) => onChange(e, i)}
                        />
                      </div>
                    </td>
                  }
                  <td>{abbreviateNumber(ob.col1)}</td>
                  <td>{abbreviateNumber(ob.col2)}</td>
                  <td>{abbreviateNumber(ob.col3)}</td>
                  <td>{abbreviateNumber(ob.col4)}</td>
                  <td>{abbreviateNumber(ob.col5)}</td>
                  <td>{abbreviateNumber(ob.col6)}</td>
                  <td>{abbreviateNumber(ob.col7)}</td>
                  <td>{abbreviateNumber(ob.col8)}</td>
                  <td>{abbreviateNumber(ob.col9)}</td>
                  <td>{abbreviateNumber(ob.col10)}</td>
                </tr>
              );
            })}
        </tbody>
      </table>

      {dataSets && dataSets.length > 0 && (
        <CustomChart
          title='Invex Chart'
          chartLables={chartLabel}
          dataSets={dataSets}
        />
      )}
    </div>
  );
};

export default Returns;