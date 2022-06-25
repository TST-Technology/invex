import React,{useState , useEffect} from 'react'
import { CircularProgress } from '@material-ui/core';

const VolatilityIndex = ({ Options, Loading }) => {
  const [Implieddata, setImplieddata] = useState([]);
  const [volatiledata, setVolatiledata] = useState([]);
  var name = [
    '30 Days',
    '60 Days',
    '90 Days',
    '120 Days',
    '150 Days',
    '180 Days',
    '360 Days',
  ];

  useEffect(() => {
    if (Options) {
      var current = [
        {
          col0: name[0],
          col1: Options?.Implied_Volatility_Index?.Current_IV_Index?.['30_Days']
            ?.Call,
          col2: Options?.Implied_Volatility_Index?.Current_IV_Index?.['30_Days']
            ?.Put,
          col3: Options?.Implied_Volatility_Index?.Current_IV_Index?.['30_Days']
            ?.Mean,
          col4: Options?.Implied_Volatility_Index?.['1_Week_Ago']?.['30_Days']
            ?.Call,
          col5: Options?.Implied_Volatility_Index?.['1_Week_Ago']?.['30_Days']
            ?.Put,
          col6: Options?.Implied_Volatility_Index?.['1_Week_Ago']?.['30_Days']
            ?.Mean,
          col7: Options?.Implied_Volatility_Index?.['1_month_Ago']?.['30_Days']
            ?.Call,
          col8: Options?.Implied_Volatility_Index?.['1_month_Ago']?.['30_Days']
            ?.Put,
          col9: Options?.Implied_Volatility_Index?.['1_month_Ago']?.['30_Days']
            ?.Mean,
          col10:
            Options?.Implied_Volatility_Index?.['3_month_Ago']?.['30_Days']
              ?.Call,
          col11:
            Options?.Implied_Volatility_Index?.['3_month_Ago']?.['30_Days']
              ?.Put,
          col12:
            Options?.Implied_Volatility_Index?.['3_month_Ago']?.['30_Days']
              ?.Mean,
        },
        {
          col0: name[1],
          col1: Options?.Implied_Volatility_Index?.Current_IV_Index?.['60_Days']
            ?.Call,
          col2: Options?.Implied_Volatility_Index?.Current_IV_Index?.['60_Days']
            ?.Put,
          col3: Options?.Implied_Volatility_Index?.Current_IV_Index?.['60_Days']
            ?.Mean,
          col4: Options?.Implied_Volatility_Index?.['1_Week_Ago']?.['60_Days']
            ?.Call,
          col5: Options?.Implied_Volatility_Index?.['1_Week_Ago']?.['60_Days']
            ?.Put,
          col6: Options?.Implied_Volatility_Index?.['1_Week_Ago']?.['60_Days']
            ?.Mean,
          col7: Options?.Implied_Volatility_Index?.['1_month_Ago']?.['60_Days']
            ?.Call,
          col8: Options?.Implied_Volatility_Index?.['1_month_Ago']?.['60_Days']
            ?.Put,
          col9: Options?.Implied_Volatility_Index?.['1_month_Ago']?.['60_Days']
            ?.Mean,
          col10:
            Options?.Implied_Volatility_Index?.['3_month_Ago']?.['60_Days']
              ?.Call,
          col11:
            Options?.Implied_Volatility_Index?.['3_month_Ago']?.['60_Days']
              ?.Put,
          col12:
            Options?.Implied_Volatility_Index?.['3_month_Ago']?.['60_Days']
              ?.Mean,
        },
        {
          col0: name[2],
          col1: Options?.Implied_Volatility_Index?.Current_IV_Index?.['90_Days']
            ?.Call,
          col2: Options?.Implied_Volatility_Index?.Current_IV_Index?.['90_Days']
            ?.Put,
          col3: Options?.Implied_Volatility_Index?.Current_IV_Index?.['90_Days']
            ?.Mean,
          col4: Options?.Implied_Volatility_Index?.['1_Week_Ago']?.['90_Days']
            ?.Call,
          col5: Options?.Implied_Volatility_Index?.['1_Week_Ago']?.['90_Days']
            ?.Put,
          col6: Options?.Implied_Volatility_Index?.['1_Week_Ago']?.['90_Days']
            ?.Mean,
          col7: Options?.Implied_Volatility_Index?.['1_month_Ago']?.['90_Days']
            ?.Call,
          col8: Options?.Implied_Volatility_Index?.['1_month_Ago']?.['90_Days']
            ?.Put,
          col9: Options?.Implied_Volatility_Index?.['1_month_Ago']?.['90_Days']
            ?.Mean,
          col10:
            Options?.Implied_Volatility_Index?.['3_month_Ago']?.['90_Days']
              ?.Call,
          col11:
            Options?.Implied_Volatility_Index?.['3_month_Ago']?.['90_Days']
              ?.Put,
          col12:
            Options?.Implied_Volatility_Index?.['3_month_Ago']?.['90_Days']
              ?.Mean,
        },
        {
          col0: name[3],
          col1: Options?.Implied_Volatility_Index?.Current_IV_Index?.[
            '120_Days'
          ]?.Call,
          col2: Options?.Implied_Volatility_Index?.Current_IV_Index?.[
            '120_Days'
          ]?.Put,
          col3: Options?.Implied_Volatility_Index?.Current_IV_Index?.[
            '120_Days'
          ]?.Mean,
          col4: Options?.Implied_Volatility_Index?.['1_Week_Ago']?.['120_Days']
            ?.Call,
          col5: Options?.Implied_Volatility_Index?.['1_Week_Ago']?.['120_Days']
            ?.Put,
          col6: Options?.Implied_Volatility_Index?.['1_Week_Ago']?.['120_Days']
            ?.Mean,
          col7: Options?.Implied_Volatility_Index?.['1_month_Ago']?.['120_Days']
            ?.Call,
          col8: Options?.Implied_Volatility_Index?.['1_month_Ago']?.['120_Days']
            ?.Put,
          col9: Options?.Implied_Volatility_Index?.['1_month_Ago']?.['120_Days']
            ?.Mean,
          col10:
            Options?.Implied_Volatility_Index?.['3_month_Ago']?.['120_Days']
              ?.Call,
          col11:
            Options?.Implied_Volatility_Index?.['3_month_Ago']?.['120_Days']
              ?.Put,
          col12:
            Options?.Implied_Volatility_Index?.['3_month_Ago']?.['120_Days']
              ?.Mean,
        },
        {
          col0: name[4],
          col1: Options?.Implied_Volatility_Index?.Current_IV_Index?.[
            '150_Days'
          ]?.Call,
          col2: Options?.Implied_Volatility_Index?.Current_IV_Index?.[
            '150_Days'
          ]?.Put,
          col3: Options?.Implied_Volatility_Index?.Current_IV_Index?.[
            '150_Days'
          ]?.Mean,
          col4: Options?.Implied_Volatility_Index?.['1_Week_Ago']?.['150_Days']
            ?.Call,
          col5: Options?.Implied_Volatility_Index?.['1_Week_Ago']?.['150_Days']
            ?.Put,
          col6: Options?.Implied_Volatility_Index?.['1_Week_Ago']?.['150_Days']
            ?.Mean,
          col7: Options?.Implied_Volatility_Index?.['1_month_Ago']?.['150_Days']
            ?.Call,
          col8: Options?.Implied_Volatility_Index?.['1_month_Ago']?.['150_Days']
            ?.Put,
          col9: Options?.Implied_Volatility_Index?.['1_month_Ago']?.['150_Days']
            ?.Mean,
          col10:
            Options?.Implied_Volatility_Index?.['3_month_Ago']?.['150_Days']
              ?.Call,
          col11:
            Options?.Implied_Volatility_Index?.['3_month_Ago']?.['150_Days']
              ?.Put,
          col12:
            Options?.Implied_Volatility_Index?.['3_month_Ago']?.['150_Days']
              ?.Mean,
        },
        {
          col0: name[5],
          col1: Options?.Implied_Volatility_Index?.Current_IV_Index?.[
            '180_Days'
          ]?.Call,
          col2: Options?.Implied_Volatility_Index?.Current_IV_Index?.[
            '180_Days'
          ]?.Put,
          col3: Options?.Implied_Volatility_Index?.Current_IV_Index?.[
            '180_Days'
          ]?.Mean,
          col4: Options?.Implied_Volatility_Index?.['1_Week_Ago']?.['180_Days']
            ?.Call,
          col5: Options?.Implied_Volatility_Index?.['1_Week_Ago']?.['180_Days']
            ?.Put,
          col6: Options?.Implied_Volatility_Index?.['1_Week_Ago']?.['180_Days']
            ?.Mean,
          col7: Options?.Implied_Volatility_Index?.['1_month_Ago']?.['180_Days']
            ?.Call,
          col8: Options?.Implied_Volatility_Index?.['1_month_Ago']?.['180_Days']
            ?.Put,
          col9: Options?.Implied_Volatility_Index?.['1_month_Ago']?.['180_Days']
            ?.Mean,
          col10:
            Options?.Implied_Volatility_Index?.['3_month_Ago']?.['180_Days']
              ?.Call,
          col11:
            Options?.Implied_Volatility_Index?.['3_month_Ago']?.['180_Days']
              ?.Put,
          col12:
            Options?.Implied_Volatility_Index?.['3_month_Ago']?.['180_Days']
              ?.Mean,
        },
        {
          col0: name[6],
          col1: Options?.Implied_Volatility_Index?.Current_IV_Index?.[
            '360_Days'
          ]?.Call,
          col2: Options?.Implied_Volatility_Index?.Current_IV_Index?.[
            '360_Days'
          ]?.Put,
          col3: Options?.Implied_Volatility_Index?.Current_IV_Index?.[
            '360_Days'
          ]?.Mean,
          col4: Options?.Implied_Volatility_Index?.['1_Week_Ago']?.['360_Days']
            ?.Call,
          col5: Options?.Implied_Volatility_Index?.['1_Week_Ago']?.['360_Days']
            ?.Put,
          col6: Options?.Implied_Volatility_Index?.['1_Week_Ago']?.['360_Days']
            ?.Mean,
          col7: Options?.Implied_Volatility_Index?.['1_month_Ago']?.['360_Days']
            ?.Call,
          col8: Options?.Implied_Volatility_Index?.['1_month_Ago']?.['360_Days']
            ?.Put,
          col9: Options?.Implied_Volatility_Index?.['1_month_Ago']?.['360_Days']
            ?.Mean,
          col10:
            Options?.Implied_Volatility_Index?.['3_month_Ago']?.['360_Days']
              ?.Call,
          col11:
            Options?.Implied_Volatility_Index?.['3_month_Ago']?.['360_Days']
              ?.Put,
          col12:
            Options?.Implied_Volatility_Index?.['3_month_Ago']?.['360_Days']
              ?.Mean,
        },
      ];
      setVolatiledata(current);
      var nonCurrent = [
        {
          col0: name[0],
          col1: Options?.Historical_Volatility?.Current_HV?.['30_Days'],
          col2: Options?.Historical_Volatility?.['1_Week_Ago']?.['30_Days'],
          col3: Options?.Historical_Volatility?.['1_Month_Ago']?.['30_Days'],
          col4: Options?.Historical_Volatility?.['3_Month_Ago']?.['30_Days'],
        },
        {
          col0: name[1],
          col1: Options?.Historical_Volatility?.Current_HV?.['60_Days'],
          col2: Options?.Historical_Volatility?.['1_Week_Ago']?.['60_Days'],
          col3: Options?.Historical_Volatility?.['1_Month_Ago']?.['60_Days'],
          col4: Options?.Historical_Volatility?.['3_Month_Ago']?.['60_Days'],
        },
        {
          col0: name[2],
          col1: Options?.Historical_Volatility?.Current_HV?.['90_Days'],
          col2: Options?.Historical_Volatility?.['1_Week_Ago']?.['90_Days'],
          col3: Options?.Historical_Volatility?.['1_Month_Ago']?.['90_Days'],
          col4: Options?.Historical_Volatility?.['3_Month_Ago']?.['90_Days'],
        },
        {
          col0: name[3],
          col1: Options?.Historical_Volatility?.Current_HV?.['120_Days'],
          col2: Options?.Historical_Volatility?.['1_Week_Ago']?.['120_Days'],
          col3: Options?.Historical_Volatility?.['1_Month_Ago']?.['120_Days'],
          col4: Options?.Historical_Volatility?.['3_Month_Ago']?.['120_Days'],
        },
        {
          col0: name[4],
          col1: Options?.Historical_Volatility?.Current_HV?.['150_Days'],
          col2: Options?.Historical_Volatility?.['1_Week_Ago']?.['150_Days'],
          col3: Options?.Historical_Volatility?.['1_Month_Ago']?.['150_Days'],
          col4: Options?.Historical_Volatility?.['3_Month_Ago']?.['150_Days'],
        },
        {
          col0: name[5],
          col1: Options?.Historical_Volatility?.Current_HV?.['180_Days'],
          col2: Options?.Historical_Volatility?.['1_Week_Ago']?.['180_Days'],
          col3: Options?.Historical_Volatility?.['1_Month_Ago']?.['180_Days'],
          col4: Options?.Historical_Volatility?.['3_Month_Ago']?.['180_Days'],
        },
        {
          col0: name[6],
          col1: Options?.Historical_Volatility?.Current_HV?.['360_Days'],
          col2: Options?.Historical_Volatility?.['1_Week_Ago']?.['360_Days'],
          col3: Options?.Historical_Volatility?.['1_Month_Ago']?.['360_Days'],
          col4: Options?.Historical_Volatility?.['3_Month_Ago']?.['360_Days'],
        },
      ];
      setImplieddata(nonCurrent);
    }
  }, [Options]);

  return (
    <>
      {Loading && (
        <div
          style={{
            height: 790,
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress />
        </div>
      )}
      {!Loading && (
        <div className='row'>
          <div className='table-responsive mb-4'>
            <h6 className='m-0 mb-3'>
              <strong>Historical Volatility Index</strong>
            </h6>
            <table className='table table-bordered m-0 most_tables normal_table'>
              <thead className='table-light'>
                <tr>
                  <th rowspan='2'>Term</th>
                  <th colspan='3'>Current IV Index</th>
                  <th colspan='3'>1 Week Ago</th>
                  <th colspan='3'>1 Month Ago</th>
                  <th colspan='3'>3 Month Ago</th>
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
                {volatiledata &&
                  volatiledata.length > 0 &&
                  volatiledata.map((ob, i) => {
                    return (
                      <tr key={i}>
                        {ob.col0 && <td>{ob.col0}</td>}
                        {ob.col1 && <td>{ob.col1}</td>}
                        {ob.col2 && <td>{ob.col2}</td>}
                        {ob.col3 && <td>{ob.col3}</td>}
                        {ob.col4 && <td>{ob.col4}</td>}
                        {ob.col5 && <td>{ob.col5}</td>}
                        {ob.col6 && <td>{ob.col6}</td>}
                        {ob.col7 && <td>{ob.col7}</td>}
                        {ob.col8 && <td>{ob.col8}</td>}
                        {ob.col9 && <td>{ob.col9}</td>}
                        {ob.col10 && <td>{ob.col10}</td>}
                        {ob.col11 && <td>{ob.col11}</td>}
                        {ob.col12 && <td>{ob.col12}</td>}
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div className='table-responsive mb-4'>
            <h6 className='m-0 mb-3'>
              <strong>Historical Volatility Index</strong>
            </h6>
            <table className='table table-bordered mt-4 most_tables'>
              <thead className='table-light'>
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
                {Implieddata &&
                  Implieddata.length > 0 &&
                  Implieddata.map((ob, i) => {
                    return (
                      <tr key={i}>
                        {ob.col0 && <td>{ob.col0}</td>}
                        {ob.col1 && <td>{ob.col1}</td>}
                        {ob.col2 && <td>{ob.col2}</td>}
                        {ob.col3 && <td>{ob.col3}</td>}
                        {ob.col4 && <td>{ob.col4}</td>}
                        {<td>29.46%</td>}
                        {<td>29.46%</td>}
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default VolatilityIndex