import { CircularProgress } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import abbreviateNumber from '../../Common/NumberFormat';
import { EfficiencyRatioDef } from './defination';
import CustomChart from '../../Graph/CustomChart';

const EfficiencyRatios = ({ data, Loading }) => {
  const [EfficiencyRatiosData, setEfficiencyRatiosData] = useState([]);
  const [EfficiencyRatiosDataAsc, setEfficiencyRatiosDataAsc] = useState([]);
  const [chartLabel, setChartLabel] = useState();
  const [checkedValues, setCheckedValues] = useState([]);
  const [dataSets, setDataSets] = useState([]);

  var name = [
    'Accounts Payable Turnover',
    'Accounts Receivable Turnover',
    'Asset Turnover',
    'Fixed Asset Turnover',
    'Inventory Turnover',
    'Invested Capital Turnover',
    'Deferred Revenue Turnover',
    'R&D to Revenue',
    'SG&A Expense to Revenue',
    'Working Capital Turnover',
    'Cash Conversion Cycle',
    'Days in Accounts Payable',
    'Days in Inventory',
    'Days in Deferred Revenue',
    'Days Revenue Outstanding',
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
          col1: data[0]?.accountsPayableTurnover,
          col2: data[1]?.accountsPayableTurnover,
          col3: data[2]?.accountsPayableTurnover,
          col4: data[3]?.accountsPayableTurnover,
          col5: data[4]?.accountsPayableTurnover,
          col6: data[5]?.accountsPayableTurnover,
          col7: data[6]?.accountsPayableTurnover,
          col8: data[7]?.accountsPayableTurnover,
          col9: data[8]?.accountsPayableTurnover,
          col10: data[9]?.accountsPayableTurnover,
          tooltip: EfficiencyRatioDef.accountsPayableTurnover,
        },
        {
          col0: name[1],
          col1: data[0]?.accountsReceivableTurnover,
          col2: data[1]?.accountsReceivableTurnover,
          col3: data[2]?.accountsReceivableTurnover,
          col4: data[3]?.accountsReceivableTurnover,
          col5: data[4]?.accountsReceivableTurnover,
          col6: data[5]?.accountsReceivableTurnover,
          col7: data[6]?.accountsReceivableTurnover,
          col8: data[7]?.accountsReceivableTurnover,
          col9: data[8]?.accountsReceivableTurnover,
          col10: data[9]?.accountsReceivableTurnover,
          tooltip: EfficiencyRatioDef.accountsReceivableTurnover,
        },
        {
          col0: name[2],
          col1: data[0]?.assetTurnover,
          col2: data[1]?.assetTurnover,
          col3: data[2]?.assetTurnover,
          col4: data[3]?.assetTurnover,
          col5: data[4]?.assetTurnover,
          col6: data[5]?.assetTurnover,
          col7: data[6]?.assetTurnover,
          col8: data[7]?.assetTurnover,
          col9: data[8]?.assetTurnover,
          col10: data[9]?.assetTurnover,
          tooltip: EfficiencyRatioDef.assetTurnover,
        },
        {
          col0: name[3],
          col1: data[0]?.fixedAssetTurnover,
          col2: data[1]?.fixedAssetTurnover,
          col3: data[2]?.fixedAssetTurnover,
          col4: data[3]?.fixedAssetTurnover,
          col5: data[4]?.fixedAssetTurnover,
          col6: data[5]?.fixedAssetTurnover,
          col7: data[6]?.fixedAssetTurnover,
          col8: data[7]?.fixedAssetTurnover,
          col9: data[8]?.fixedAssetTurnover,
          col10: data[9]?.fixedAssetTurnover,
          tooltip: EfficiencyRatioDef.fixedAssetTurnover,
        },
        {
          col0: name[4],
          col1: data[0]?.inventoryTurnover,
          col2: data[1]?.inventoryTurnover,
          col3: data[2]?.inventoryTurnover,
          col4: data[3]?.inventoryTurnover,
          col5: data[4]?.inventoryTurnover,
          col6: data[5]?.inventoryTurnover,
          col7: data[6]?.inventoryTurnover,
          col8: data[7]?.inventoryTurnover,
          col9: data[8]?.inventoryTurnover,
          col10: data[9]?.inventoryTurnover,
          tooltip: EfficiencyRatioDef.inventoryTurnover,
        },
        {
          col0: name[5],
          col1: data[0]?.investedCapitalTurnover,
          col2: data[1]?.investedCapitalTurnover,
          col3: data[2]?.investedCapitalTurnover,
          col4: data[3]?.investedCapitalTurnover,
          col5: data[4]?.investedCapitalTurnover,
          col6: data[5]?.investedCapitalTurnover,
          col7: data[6]?.investedCapitalTurnover,
          col8: data[7]?.investedCapitalTurnover,
          col9: data[8]?.investedCapitalTurnover,
          col10: data[9]?.investedCapitalTurnover,
          tooltip: EfficiencyRatioDef.investedCapitalTurnover,
        },
        {
          col0: name[6],
          col1: data[0]?.nibclRevenueDeferredTurnover,
          col2: data[1]?.nibclRevenueDeferredTurnover,
          col3: data[2]?.nibclRevenueDeferredTurnover,
          col4: data[3]?.nibclRevenueDeferredTurnover,
          col5: data[4]?.nibclRevenueDeferredTurnover,
          col6: data[5]?.nibclRevenueDeferredTurnover,
          col7: data[6]?.nibclRevenueDeferredTurnover,
          col8: data[7]?.nibclRevenueDeferredTurnover,
          col9: data[8]?.nibclRevenueDeferredTurnover,
          col10: data[9]?.nibclRevenueDeferredTurnover,
          tooltip: EfficiencyRatioDef.nibclRevenueDeferredTurnover,
        },
        {
          col0: name[7],
          col1: data[0]?.researchDevelopmentToRevenue,
          col2: data[1]?.researchDevelopmentToRevenue,
          col3: data[2]?.researchDevelopmentToRevenue,
          col4: data[3]?.researchDevelopmentToRevenue,
          col5: data[4]?.researchDevelopmentToRevenue,
          col6: data[5]?.researchDevelopmentToRevenue,
          col7: data[6]?.researchDevelopmentToRevenue,
          col8: data[7]?.researchDevelopmentToRevenue,
          col9: data[8]?.researchDevelopmentToRevenue,
          col10: data[9]?.researchDevelopmentToRevenue,
          tooltip: EfficiencyRatioDef.researchDevelopmentToRevenue,
        },
        {
          col0: name[8],
          col1: data[0]?.sgaToRevenue,
          col2: data[1]?.sgaToRevenue,
          col3: data[2]?.sgaToRevenue,
          col4: data[3]?.sgaToRevenue,
          col5: data[4]?.sgaToRevenue,
          col6: data[5]?.sgaToRevenue,
          col7: data[6]?.sgaToRevenue,
          col8: data[7]?.sgaToRevenue,
          col9: data[8]?.sgaToRevenue,
          col10: data[9]?.sgaToRevenue,
          tooltip: EfficiencyRatioDef.sgaToRevenue,
        },
        {
          col0: name[9],
          col1: data[0]?.workingCapitalTurnover,
          col2: data[1]?.workingCapitalTurnover,
          col3: data[2]?.workingCapitalTurnover,
          col4: data[3]?.workingCapitalTurnover,
          col5: data[4]?.workingCapitalTurnover,
          col6: data[5]?.workingCapitalTurnover,
          col7: data[6]?.workingCapitalTurnover,
          col8: data[7]?.workingCapitalTurnover,
          col9: data[8]?.workingCapitalTurnover,
          col10: data[9]?.workingCapitalTurnover,
          tooltip: EfficiencyRatioDef.workingCapitalTurnover,
        },
        {
          col0: name[10],
          col1: data[0]?.cashConversionCycle,
          col2: data[1]?.cashConversionCycle,
          col3: data[2]?.cashConversionCycle,
          col4: data[3]?.cashConversionCycle,
          col5: data[4]?.cashConversionCycle,
          col6: data[5]?.cashConversionCycle,
          col7: data[6]?.cashConversionCycle,
          col8: data[7]?.cashConversionCycle,
          col9: data[8]?.cashConversionCycle,
          col10: data[9]?.cashConversionCycle,
          tooltip: EfficiencyRatioDef.cashConversionCycle,
        },
        {
          col0: name[11],
          col1: data[0]?.daysInAccountsPayable,
          col2: data[1]?.daysInAccountsPayable,
          col3: data[2]?.daysInAccountsPayable,
          col4: data[3]?.daysInAccountsPayable,
          col5: data[4]?.daysInAccountsPayable,
          col6: data[5]?.daysInAccountsPayable,
          col7: data[6]?.daysInAccountsPayable,
          col8: data[7]?.daysInAccountsPayable,
          col9: data[8]?.daysInAccountsPayable,
          col10: data[9]?.daysInAccountsPayable,
          tooltip: EfficiencyRatioDef.daysInAccountsPayable,
        },
        {
          col0: name[12],
          col1: data[0]?.daysInInventory,
          col2: data[1]?.daysInInventory,
          col3: data[2]?.daysInInventory,
          col4: data[3]?.daysInInventory,
          col5: data[4]?.daysInInventory,
          col6: data[5]?.daysInInventory,
          col7: data[6]?.daysInInventory,
          col8: data[7]?.daysInInventory,
          col9: data[8]?.daysInInventory,
          col10: data[9]?.daysInInventory,
          tooltip: EfficiencyRatioDef.daysInInventory,
        },
        {
          col0: name[13],
          col1: data[0]?.daysInRevenueDeferred,
          col2: data[1]?.daysInRevenueDeferred,
          col3: data[2]?.daysInRevenueDeferred,
          col4: data[3]?.daysInRevenueDeferred,
          col5: data[4]?.daysInRevenueDeferred,
          col6: data[5]?.daysInRevenueDeferred,
          col7: data[6]?.daysInRevenueDeferred,
          col8: data[7]?.daysInRevenueDeferred,
          col9: data[8]?.daysInRevenueDeferred,
          col10: data[9]?.daysInRevenueDeferred,
          tooltip: EfficiencyRatioDef.daysInRevenueDeferred,
        },
        {
          col0: name[14],
          col1: data[0]?.daysRevenueOutstanding,
          col2: data[1]?.daysRevenueOutstanding,
          col3: data[2]?.daysRevenueOutstanding,
          col4: data[3]?.daysRevenueOutstanding,
          col5: data[4]?.daysRevenueOutstanding,
          col6: data[5]?.daysRevenueOutstanding,
          col7: data[6]?.daysRevenueOutstanding,
          col8: data[7]?.daysRevenueOutstanding,
          col9: data[8]?.daysRevenueOutstanding,
          col10: data[9]?.daysRevenueOutstanding,
          tooltip: EfficiencyRatioDef.daysRevenueOutstanding,
        },
      ];
      setEfficiencyRatiosData(current);

      const dataAsc = data.slice();

      dataAsc.sort(function (a, b) {
        return a.year - b.year || a.quarter - b.quarter;
      });

      var currentAsc = [
        {
          col0: name[0],
          col1: dataAsc[0]?.accountsPayableTurnover,
          col2: dataAsc[1]?.accountsPayableTurnover,
          col3: dataAsc[2]?.accountsPayableTurnover,
          col4: dataAsc[3]?.accountsPayableTurnover,
          col5: dataAsc[4]?.accountsPayableTurnover,
          col6: dataAsc[5]?.accountsPayableTurnover,
          col7: dataAsc[6]?.accountsPayableTurnover,
          col8: dataAsc[7]?.accountsPayableTurnover,
          col9: dataAsc[8]?.accountsPayableTurnover,
          col10: dataAsc[9]?.accountsPayableTurnover,
          tooltip: EfficiencyRatioDef.accountsPayableTurnover,
        },
        {
          col0: name[1],
          col1: dataAsc[0]?.accountsReceivableTurnover,
          col2: dataAsc[1]?.accountsReceivableTurnover,
          col3: dataAsc[2]?.accountsReceivableTurnover,
          col4: dataAsc[3]?.accountsReceivableTurnover,
          col5: dataAsc[4]?.accountsReceivableTurnover,
          col6: dataAsc[5]?.accountsReceivableTurnover,
          col7: dataAsc[6]?.accountsReceivableTurnover,
          col8: dataAsc[7]?.accountsReceivableTurnover,
          col9: dataAsc[8]?.accountsReceivableTurnover,
          col10: dataAsc[9]?.accountsReceivableTurnover,
          tooltip: EfficiencyRatioDef.accountsReceivableTurnover,
        },
        {
          col0: name[2],
          col1: dataAsc[0]?.assetTurnover,
          col2: dataAsc[1]?.assetTurnover,
          col3: dataAsc[2]?.assetTurnover,
          col4: dataAsc[3]?.assetTurnover,
          col5: dataAsc[4]?.assetTurnover,
          col6: dataAsc[5]?.assetTurnover,
          col7: dataAsc[6]?.assetTurnover,
          col8: dataAsc[7]?.assetTurnover,
          col9: dataAsc[8]?.assetTurnover,
          col10: dataAsc[9]?.assetTurnover,
          tooltip: EfficiencyRatioDef.assetTurnover,
        },
        {
          col0: name[3],
          col1: dataAsc[0]?.fixedAssetTurnover,
          col2: dataAsc[1]?.fixedAssetTurnover,
          col3: dataAsc[2]?.fixedAssetTurnover,
          col4: dataAsc[3]?.fixedAssetTurnover,
          col5: dataAsc[4]?.fixedAssetTurnover,
          col6: dataAsc[5]?.fixedAssetTurnover,
          col7: dataAsc[6]?.fixedAssetTurnover,
          col8: dataAsc[7]?.fixedAssetTurnover,
          col9: dataAsc[8]?.fixedAssetTurnover,
          col10: dataAsc[9]?.fixedAssetTurnover,
          tooltip: EfficiencyRatioDef.fixedAssetTurnover,
        },
        {
          col0: name[4],
          col1: dataAsc[0]?.inventoryTurnover,
          col2: dataAsc[1]?.inventoryTurnover,
          col3: dataAsc[2]?.inventoryTurnover,
          col4: dataAsc[3]?.inventoryTurnover,
          col5: dataAsc[4]?.inventoryTurnover,
          col6: dataAsc[5]?.inventoryTurnover,
          col7: dataAsc[6]?.inventoryTurnover,
          col8: dataAsc[7]?.inventoryTurnover,
          col9: dataAsc[8]?.inventoryTurnover,
          col10: dataAsc[9]?.inventoryTurnover,
          tooltip: EfficiencyRatioDef.inventoryTurnover,
        },
        {
          col0: name[5],
          col1: dataAsc[0]?.investedCapitalTurnover,
          col2: dataAsc[1]?.investedCapitalTurnover,
          col3: dataAsc[2]?.investedCapitalTurnover,
          col4: dataAsc[3]?.investedCapitalTurnover,
          col5: dataAsc[4]?.investedCapitalTurnover,
          col6: dataAsc[5]?.investedCapitalTurnover,
          col7: dataAsc[6]?.investedCapitalTurnover,
          col8: dataAsc[7]?.investedCapitalTurnover,
          col9: dataAsc[8]?.investedCapitalTurnover,
          col10: dataAsc[9]?.investedCapitalTurnover,
          tooltip: EfficiencyRatioDef.investedCapitalTurnover,
        },
        {
          col0: name[6],
          col1: dataAsc[0]?.nibclRevenueDeferredTurnover,
          col2: dataAsc[1]?.nibclRevenueDeferredTurnover,
          col3: dataAsc[2]?.nibclRevenueDeferredTurnover,
          col4: dataAsc[3]?.nibclRevenueDeferredTurnover,
          col5: dataAsc[4]?.nibclRevenueDeferredTurnover,
          col6: dataAsc[5]?.nibclRevenueDeferredTurnover,
          col7: dataAsc[6]?.nibclRevenueDeferredTurnover,
          col8: dataAsc[7]?.nibclRevenueDeferredTurnover,
          col9: dataAsc[8]?.nibclRevenueDeferredTurnover,
          col10: dataAsc[9]?.nibclRevenueDeferredTurnover,
          tooltip: EfficiencyRatioDef.nibclRevenueDeferredTurnover,
        },
        {
          col0: name[7],
          col1: dataAsc[0]?.researchDevelopmentToRevenue,
          col2: dataAsc[1]?.researchDevelopmentToRevenue,
          col3: dataAsc[2]?.researchDevelopmentToRevenue,
          col4: dataAsc[3]?.researchDevelopmentToRevenue,
          col5: dataAsc[4]?.researchDevelopmentToRevenue,
          col6: dataAsc[5]?.researchDevelopmentToRevenue,
          col7: dataAsc[6]?.researchDevelopmentToRevenue,
          col8: dataAsc[7]?.researchDevelopmentToRevenue,
          col9: dataAsc[8]?.researchDevelopmentToRevenue,
          col10: dataAsc[9]?.researchDevelopmentToRevenue,
          tooltip: EfficiencyRatioDef.researchDevelopmentToRevenue,
        },
        {
          col0: name[8],
          col1: dataAsc[0]?.sgaToRevenue,
          col2: dataAsc[1]?.sgaToRevenue,
          col3: dataAsc[2]?.sgaToRevenue,
          col4: dataAsc[3]?.sgaToRevenue,
          col5: dataAsc[4]?.sgaToRevenue,
          col6: dataAsc[5]?.sgaToRevenue,
          col7: dataAsc[6]?.sgaToRevenue,
          col8: dataAsc[7]?.sgaToRevenue,
          col9: dataAsc[8]?.sgaToRevenue,
          col10: dataAsc[9]?.sgaToRevenue,
          tooltip: EfficiencyRatioDef.sgaToRevenue,
        },
        {
          col0: name[9],
          col1: dataAsc[0]?.workingCapitalTurnover,
          col2: dataAsc[1]?.workingCapitalTurnover,
          col3: dataAsc[2]?.workingCapitalTurnover,
          col4: dataAsc[3]?.workingCapitalTurnover,
          col5: dataAsc[4]?.workingCapitalTurnover,
          col6: dataAsc[5]?.workingCapitalTurnover,
          col7: dataAsc[6]?.workingCapitalTurnover,
          col8: dataAsc[7]?.workingCapitalTurnover,
          col9: dataAsc[8]?.workingCapitalTurnover,
          col10: dataAsc[9]?.workingCapitalTurnover,
          tooltip: EfficiencyRatioDef.workingCapitalTurnover,
        },
        {
          col0: name[10],
          col1: dataAsc[0]?.cashConversionCycle,
          col2: dataAsc[1]?.cashConversionCycle,
          col3: dataAsc[2]?.cashConversionCycle,
          col4: dataAsc[3]?.cashConversionCycle,
          col5: dataAsc[4]?.cashConversionCycle,
          col6: dataAsc[5]?.cashConversionCycle,
          col7: dataAsc[6]?.cashConversionCycle,
          col8: dataAsc[7]?.cashConversionCycle,
          col9: dataAsc[8]?.cashConversionCycle,
          col10: dataAsc[9]?.cashConversionCycle,
          tooltip: EfficiencyRatioDef.cashConversionCycle,
        },
        {
          col0: name[11],
          col1: dataAsc[0]?.daysInAccountsPayable,
          col2: dataAsc[1]?.daysInAccountsPayable,
          col3: dataAsc[2]?.daysInAccountsPayable,
          col4: dataAsc[3]?.daysInAccountsPayable,
          col5: dataAsc[4]?.daysInAccountsPayable,
          col6: dataAsc[5]?.daysInAccountsPayable,
          col7: dataAsc[6]?.daysInAccountsPayable,
          col8: dataAsc[7]?.daysInAccountsPayable,
          col9: dataAsc[8]?.daysInAccountsPayable,
          col10: dataAsc[9]?.daysInAccountsPayable,
          tooltip: EfficiencyRatioDef.daysInAccountsPayable,
        },
        {
          col0: name[12],
          col1: dataAsc[0]?.daysInInventory,
          col2: dataAsc[1]?.daysInInventory,
          col3: dataAsc[2]?.daysInInventory,
          col4: dataAsc[3]?.daysInInventory,
          col5: dataAsc[4]?.daysInInventory,
          col6: dataAsc[5]?.daysInInventory,
          col7: dataAsc[6]?.daysInInventory,
          col8: dataAsc[7]?.daysInInventory,
          col9: dataAsc[8]?.daysInInventory,
          col10: dataAsc[9]?.daysInInventory,
          tooltip: EfficiencyRatioDef.daysInInventory,
        },
        {
          col0: name[13],
          col1: dataAsc[0]?.daysInRevenueDeferred,
          col2: dataAsc[1]?.daysInRevenueDeferred,
          col3: dataAsc[2]?.daysInRevenueDeferred,
          col4: dataAsc[3]?.daysInRevenueDeferred,
          col5: dataAsc[4]?.daysInRevenueDeferred,
          col6: dataAsc[5]?.daysInRevenueDeferred,
          col7: dataAsc[6]?.daysInRevenueDeferred,
          col8: dataAsc[7]?.daysInRevenueDeferred,
          col9: dataAsc[8]?.daysInRevenueDeferred,
          col10: dataAsc[9]?.daysInRevenueDeferred,
          tooltip: EfficiencyRatioDef.daysInRevenueDeferred,
        },
        {
          col0: name[14],
          col1: dataAsc[0]?.daysRevenueOutstanding,
          col2: dataAsc[1]?.daysRevenueOutstanding,
          col3: dataAsc[2]?.daysRevenueOutstanding,
          col4: dataAsc[3]?.daysRevenueOutstanding,
          col5: dataAsc[4]?.daysRevenueOutstanding,
          col6: dataAsc[5]?.daysRevenueOutstanding,
          col7: dataAsc[6]?.daysRevenueOutstanding,
          col8: dataAsc[7]?.daysRevenueOutstanding,
          col9: dataAsc[8]?.daysRevenueOutstanding,
          col10: dataAsc[9]?.daysRevenueOutstanding,
          tooltip: EfficiencyRatioDef.daysRevenueOutstanding,
        },
      ];

      setEfficiencyRatiosDataAsc(currentAsc);

      setCheckedValues([]);
    }
  }, [data]);

  useEffect(() => {
    setDataSets(
      checkedValues &&
        checkedValues.map((index) => {
          const row = Object.values(EfficiencyRatiosDataAsc[index]);
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
            EfficiencyRatiosData &&
            EfficiencyRatiosData.length > 0 &&
            EfficiencyRatiosData.map((ob, i) => {
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

export default EfficiencyRatios;