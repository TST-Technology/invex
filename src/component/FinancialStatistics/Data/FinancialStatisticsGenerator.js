import React, { useState, useEffect } from 'react';
import abbreviateNumber from '../../Common/NumberFormat';
import CustomChart from '../../Graph/CustomChart';
import { CircularProgress } from '@material-ui/core';

const FinancialStatisticsGenerator = ({ data, Loading, columnList }) => {
  const [tableData, setTableData] = useState([]);
  const [chartLabel, setChartLabel] = useState();
  const [checkedValues, setCheckedValues] = useState([]);
  const [dataSets, setDataSets] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const finalData = columnList.map((columns) => {
        let newObj = {};
        newObj.tooltip = columns.tooltip;
        newObj.heading = columns.label;
        data?.map((row, index) => {
          newObj[`col${index}`] = row[columns.key];
        });
        return newObj;
      });
      setTableData(finalData);

      const labels = data?.map((row, index) => row?.column);

      setChartLabel(labels.reverse());
      setCheckedValues([]);
    }
  }, [data, columnList]);

  useEffect(() => {
    setDataSets(
      checkedValues &&
        checkedValues.map((index) => {
          const row = Object.values(tableData[index]);

          return {
            label: row[1],
            data: row.slice(2, row.length).reverse(),
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
    <>
      <div className='col-lg-12'>
        <div className='top_competitors'>
          <div className='mb-5'>
            <div className='table-responsive'>
              {Loading && (
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
              {!Loading && tableData && (
                <table className='table table-bordered table-striped m-0 most_tables'>
                  <thead>
                    <tr>
                      <th scope='col'>-</th>
                      <th scope='col'>Historical Visualisation</th>
                      {data &&
                        data.map((row, index) => {
                          return (
                            <th key={index} scope='col'>
                              {row?.column}
                            </th>
                          );
                        })}
                    </tr>
                  </thead>
                  <tbody className='border-top-0'>
                    {tableData.map((row, index) => {
                      return (
                        <tr key={index}>
                          <td>
                            {row?.heading}{' '}
                            <i
                              className='bi bi-info-circle m-1'
                              data-toggle='tooltip'
                              title={row?.tooltip}
                            ></i>
                          </td>
                          <td>
                            <div className='form-check float-end'>
                              <input
                                key={row['col1']}
                                className='form-check-input'
                                type='checkbox'
                                defaultValue
                                id='flexCheckChecked'
                                onChange={(e) => onChange(e, index)}
                              />
                            </div>
                          </td>
                          {data &&
                            data.map((value, i) => {
                              return (
                                <td key={i}>
                                  {abbreviateNumber(row[`col${i}`])}
                                </td>
                              );
                            })}
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

      {dataSets && dataSets.length > 0 && (
        <CustomChart
          title='Invex Chart'
          chartLables={chartLabel}
          dataSets={dataSets}
        />
      )}
    </>
  );
};

export default FinancialStatisticsGenerator;
