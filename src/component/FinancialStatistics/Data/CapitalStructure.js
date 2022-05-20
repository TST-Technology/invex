import { CircularProgress } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import abbreviateNumber from '../../Common/NumberFormat';
import { Badge } from 'primereact/badge';
import { Tooltip } from 'primereact/tooltip';
import { CapitalStructureDef } from './defination';

const CapitalStructure = ({ data, Loading }) => {
  const [CapitalStructuredata, setCapitalStructuredata] = useState([]);
  var name = [
    'Enterprise Value (EV)',
    'Market Cap at Period End',
    'Net Debt (including cash)',
    'Invested Capital',
    'Net Working Capital',
    'Net Property, Plant, and Equipmen',
    'Share Price Period End',
    'Total Capital',
    'Total Debt',
    'Basic Weighted Avg. Shares (Not Split-Adjusted)',
    'Basic Weighted Avg. Shares',
    'Diluted Weighted Avg. Shares (Not Split-Adjusted)',
    'Weighted Average Diluted Shares Outstanding (Split Adjusted)',
    'Basic Book Value per Share',
    'Tax Burden',
    'Altman Z-score',
  ];

  useEffect(() => {
    if (data && data.length > 0) {
      var current = [
        {
          col0: name[0],
          col1: data[0]?.enterpriseValue,
          col2: data[1]?.enterpriseValue,
          col3: data[2]?.enterpriseValue,
          col4: data[3]?.enterpriseValue,
          col5: data[4]?.enterpriseValue,
          col6: data[5]?.enterpriseValue,
          col7: data[6]?.enterpriseValue,
          col8: data[7]?.enterpriseValue,
          col9: data[8]?.enterpriseValue,
          col10: data[9]?.enterpriseValue,
          tooltip: CapitalStructureDef.enterpriseValue,
        },
        {
          col0: name[1],
          col1: data[0]?.marketCapPeriodEnd,
          col2: data[1]?.marketCapPeriodEnd,
          col3: data[2]?.marketCapPeriodEnd,
          col4: data[3]?.marketCapPeriodEnd,
          col5: data[4]?.marketCapPeriodEnd,
          col6: data[5]?.marketCapPeriodEnd,
          col7: data[6]?.marketCapPeriodEnd,
          col8: data[7]?.marketCapPeriodEnd,
          col9: data[8]?.marketCapPeriodEnd,
          col10: data[9]?.marketCapPeriodEnd,
          tooltip: CapitalStructureDef.marketCapPeriodEnd,
        },
        {
          col0: name[2],
          col1: data[0]?.netDebt,
          col2: data[1]?.netDebt,
          col3: data[2]?.netDebt,
          col4: data[3]?.netDebt,
          col5: data[4]?.netDebt,
          col6: data[5]?.netDebt,
          col7: data[6]?.netDebt,
          col8: data[7]?.netDebt,
          col9: data[8]?.netDebt,
          col10: data[9]?.netDebt,
          tooltip: CapitalStructureDef.netDebt,
        },
        {
          col0: name[3],
          col1: data[0]?.investedCapital,
          col2: data[1]?.investedCapital,
          col3: data[2]?.investedCapital,
          col4: data[3]?.investedCapital,
          col5: data[4]?.investedCapital,
          col6: data[5]?.investedCapital,
          col7: data[6]?.investedCapital,
          col8: data[7]?.investedCapital,
          col9: data[8]?.investedCapital,
          col10: data[9]?.investedCapital,
          tooltip: CapitalStructureDef.investedCapital,
        },
        {
          col0: name[4],
          col1: data[0]?.netWorkingCapital,
          col2: data[1]?.netWorkingCapital,
          col3: data[2]?.netWorkingCapital,
          col4: data[3]?.netWorkingCapital,
          col5: data[4]?.netWorkingCapital,
          col6: data[5]?.netWorkingCapital,
          col7: data[6]?.netWorkingCapital,
          col8: data[7]?.netWorkingCapital,
          col9: data[8]?.netWorkingCapital,
          col10: data[9]?.netWorkingCapital,
          tooltip: CapitalStructureDef.netWorkingCapital,
        },
        {
          col0: name[5],
          col1: data[0]?.ppAndENet,
          col2: data[1]?.ppAndENet,
          col3: data[2]?.ppAndENet,
          col4: data[3]?.ppAndENet,
          col5: data[4]?.ppAndENet,
          col6: data[5]?.ppAndENet,
          col7: data[6]?.ppAndENet,
          col8: data[7]?.ppAndENet,
          col9: data[8]?.ppAndENet,
          col10: data[9]?.ppAndENet,
          tooltip: CapitalStructureDef.ppAndENet,
        },
        {
          col0: name[6],
          col1: data[0]?.priceAccountingPeriodEnd,
          col2: data[1]?.priceAccountingPeriodEnd,
          col3: data[2]?.priceAccountingPeriodEnd,
          col4: data[3]?.priceAccountingPeriodEnd,
          col5: data[4]?.priceAccountingPeriodEnd,
          col6: data[5]?.priceAccountingPeriodEnd,
          col7: data[6]?.priceAccountingPeriodEnd,
          col8: data[7]?.priceAccountingPeriodEnd,
          col9: data[8]?.priceAccountingPeriodEnd,
          col10: data[9]?.priceAccountingPeriodEnd,
          tooltip: CapitalStructureDef.priceAccountingPeriodEnd,
        },
        {
          col0: name[7],
          col1: data[0]?.totalCapital,
          col2: data[1]?.totalCapital,
          col3: data[2]?.totalCapital,
          col4: data[3]?.totalCapital,
          col5: data[4]?.totalCapital,
          col6: data[5]?.totalCapital,
          col7: data[6]?.totalCapital,
          col8: data[7]?.totalCapital,
          col9: data[8]?.totalCapital,
          col10: data[9]?.totalCapital,
          tooltip: CapitalStructureDef.totalCapital,
        },
        {
          col0: name[8],
          col1: data[0]?.totalDebt,
          col2: data[1]?.totalDebt,
          col3: data[2]?.totalDebt,
          col4: data[3]?.totalDebt,
          col5: data[4]?.totalDebt,
          col6: data[5]?.totalDebt,
          col7: data[6]?.totalDebt,
          col8: data[7]?.totalDebt,
          col9: data[8]?.totalDebt,
          col10: data[9]?.totalDebt,
          tooltip: CapitalStructureDef.totalDebt,
        },
        {
          col0: name[9],
          col1: data[0]?.wabso,
          col2: data[1]?.wabso,
          col3: data[2]?.wabso,
          col4: data[3]?.wabso,
          col5: data[4]?.wabso,
          col6: data[5]?.wabso,
          col7: data[6]?.wabso,
          col8: data[7]?.wabso,
          col9: data[8]?.wabso,
          col10: data[9]?.wabso,
          tooltip: CapitalStructureDef.wabso,
        },
        {
          col0: name[10],
          col1: data[0]?.wabsoSplitAdjusted,
          col2: data[1]?.wabsoSplitAdjusted,
          col3: data[2]?.wabsoSplitAdjusted,
          col4: data[3]?.wabsoSplitAdjusted,
          col5: data[4]?.wabsoSplitAdjusted,
          col6: data[5]?.wabsoSplitAdjusted,
          col7: data[6]?.wabsoSplitAdjusted,
          col8: data[7]?.wabsoSplitAdjusted,
          col9: data[8]?.wabsoSplitAdjusted,
          col10: data[9]?.wabsoSplitAdjusted,
          tooltip: CapitalStructureDef.wabsoSplitAdjusted,
        },
        {
          col0: name[11],
          col1: data[0]?.wadso,
          col2: data[1]?.wadso,
          col3: data[2]?.wadso,
          col4: data[3]?.wadso,
          col5: data[4]?.wadso,
          col6: data[5]?.wadso,
          col7: data[6]?.wadso,
          col8: data[7]?.wadso,
          col9: data[8]?.wadso,
          col10: data[9]?.wadso,
          tooltip: CapitalStructureDef.wadso,
        },
        {
          col0: name[12],
          col1: data[0]?.wadsoSplitAdjusted,
          col2: data[1]?.wadsoSplitAdjusted,
          col3: data[2]?.wadsoSplitAdjusted,
          col4: data[3]?.wadsoSplitAdjusted,
          col5: data[4]?.wadsoSplitAdjusted,
          col6: data[5]?.wadsoSplitAdjusted,
          col7: data[6]?.wadsoSplitAdjusted,
          col8: data[7]?.wadsoSplitAdjusted,
          col9: data[8]?.wadsoSplitAdjusted,
          col10: data[9]?.wadsoSplitAdjusted,
          tooltip: CapitalStructureDef.wadsoSplitAdjusted,
        },
        {
          col0: name[13],
          col1: data[0]?.bookValuePerShare,
          col2: data[1]?.bookValuePerShare,
          col3: data[2]?.bookValuePerShare,
          col4: data[3]?.bookValuePerShare,
          col5: data[4]?.bookValuePerShare,
          col6: data[5]?.bookValuePerShare,
          col7: data[6]?.bookValuePerShare,
          col8: data[7]?.bookValuePerShare,
          col9: data[8]?.bookValuePerShare,
          col10: data[9]?.bookValuePerShare,
          tooltip: CapitalStructureDef.bookValuePerShare,
        },
        {
          col0: name[14],
          col1: data[0]?.taxBurden,
          col2: data[1]?.taxBurden,
          col3: data[2]?.taxBurden,
          col4: data[3]?.taxBurden,
          col5: data[4]?.taxBurden,
          col6: data[5]?.taxBurden,
          col7: data[6]?.taxBurden,
          col8: data[7]?.taxBurden,
          col9: data[8]?.taxBurden,
          col10: data[9]?.taxBurden,
          tooltip: CapitalStructureDef.taxBurden,
        },
        {
          col0: name[15],
          col1: data[0]?.altmanZScore,
          col2: data[1]?.altmanZScore,
          col3: data[2]?.altmanZScore,
          col4: data[3]?.altmanZScore,
          col5: data[4]?.altmanZScore,
          col6: data[5]?.altmanZScore,
          col7: data[6]?.altmanZScore,
          col8: data[7]?.altmanZScore,
          col9: data[8]?.altmanZScore,
          col10: data[9]?.altmanZScore,
          tooltip: CapitalStructureDef.altmanZScore,
        },
      ];
      setCapitalStructuredata(current);
    }
  }, [data]);
  return (
    <div class='table-responsive mt-4'>
      <table class='table table-bordered m-0 most_tables'>
        <thead class='table-light'>
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
        <tbody class='border-top-0'>
          {Loading && (
            <tr style={{ height: 100, textAlign: 'center' }}>
              <td colSpan={6} style={{ textAlign: 'center' }}>
                <CircularProgress size={50} />
              </td>
            </tr>
          )}
          {!Loading &&
            CapitalStructuredata &&
            CapitalStructuredata.length > 0 &&
            CapitalStructuredata.map((ob, i) => {
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
                      {/* <div className="flex align-items-center"> */}
                      {/* <Tooltip target=".custom-target-icon" />

                                    <i className="custom-target-icon pi pi-info-circle p-text-secondary p-overlay-badge" data-pr-tooltip="Defination" data-pr-position="right" data-pr-at="right+5 top" data-pr-my="left center-2" style={{ fontSize: '1rem', cursor: 'pointer', paddingLeft: "5px", position: "relative", top: "2px" }}>

                                    </i> */}
                      {/* </div> */}
                    </td>
                  )}

                  {
                    <td class='float-end'>
                      <div class='form-check mb-0'>
                        <input
                          class='form-check-input'
                          type='checkbox'
                          value=''
                          id=''
                        />
                      </div>
                    </td>
                  }
                  {ob.col1 && <td>{abbreviateNumber(ob.col1)}</td>}
                  {ob.col2 && <td>{abbreviateNumber(ob.col2)}</td>}
                  {ob.col3 && <td>{abbreviateNumber(ob.col3)}</td>}
                  {ob.col4 && <td>{abbreviateNumber(ob.col4)}</td>}
                  {ob.col5 && <td>{abbreviateNumber(ob.col5)}</td>}
                  {ob.col6 && <td>{abbreviateNumber(ob.col6)}</td>}
                  {ob.col7 && <td>{abbreviateNumber(ob.col7)}</td>}
                  {ob.col8 && <td>{abbreviateNumber(ob.col8)}</td>}
                  {ob.col9 && <td>{abbreviateNumber(ob.col9)}</td>}
                  {ob.col10 && <td>{abbreviateNumber(ob.col10)}</td>}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default CapitalStructure;