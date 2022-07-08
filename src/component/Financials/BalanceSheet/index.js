import React, { useEffect, useState } from 'react'
import CustomChart from '../../Graph/CustomChart';
import {
  BALANCE_SHEET_COLUMNS,
  CURRENT_ASSETS_COLUMNS,
  NON_CURRENT_ASSETS_COLUMNS,
  CURRENT_LIABILITIES_COLUMNS,
  NON_CURRENT_LIABILITIES_COLUMNS,
  SHAREHOLDERS_EQUITY_COLUMNS,
  OTHER_BALANCE_COLUMN,
} from '../Constants';
import { convertCamelCaseToSpaceSeparatedString } from '../../Common/commonFunctions';
import PrepareTable from '../PrepareTable';

const BalanceSheet = ({ data }) => {
  const [tableData, setTableData] = useState([]);
  const [chartLabel, setChartLabel] = useState();
  const [checkedValues, setCheckedValues] = useState([]);
  const [dataSets, setDataSets] = useState([]);
  const [currentAsset, setCurrentAsset] = useState(null);
  const [nonCurrentAsset, setNonCurrentAsset] = useState(null);
  const [currentLiabilities, setCurrentLiabilities] = useState(null);
  const [nonCurrentLiabilities, setNonCurrentLiabilities] = useState(null);
  const [shareholdersEquity, setShareholdersEquity] = useState(null);
  const [otherData, setOtherData] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      const finalData = prepareData(BALANCE_SHEET_COLUMNS);
      setTableData(finalData);

      const labels = data?.map((row, index) => row?.column);

      setChartLabel(labels.reverse());
      setCheckedValues([]);

      const curAsset = prepareData(CURRENT_ASSETS_COLUMNS);
      setCurrentAsset(curAsset);

      const resp1 = prepareData(NON_CURRENT_ASSETS_COLUMNS);
      setNonCurrentAsset(resp1);

      const resp2 = prepareData(CURRENT_LIABILITIES_COLUMNS);
      setCurrentLiabilities(resp2);

      const resp3 = prepareData(NON_CURRENT_LIABILITIES_COLUMNS);
      setNonCurrentLiabilities(resp3);

      const resp4 = prepareData(SHAREHOLDERS_EQUITY_COLUMNS);
      setShareholdersEquity(resp4);

      const resp5 = prepareData(OTHER_BALANCE_COLUMN);
      setOtherData(resp5);
    }
  }, [data]);

  const prepareData = (columnList) => {
    const finalData = columnList.map((columns) => {
      let newObj = {};
      newObj.key = columns?.key;
      newObj.heading = convertCamelCaseToSpaceSeparatedString(columns.key);
      data?.map((row, index) => {
        newObj[`col${index}`] = row[columns?.key];
      });
      return newObj;
    });

    return finalData;
  };

  const findChartData = (key) => {
    console.log('key=>', key);

    const data = tableData.find((value) => {
      console.log(value.key);
      return value.key === key;
    });
    if (data) {
      return data;
    } else {
      return {};
    }
  };

  useEffect(() => {
    setDataSets(
      checkedValues &&
        checkedValues.map((index) => {
          console.log(index);
          const row = Object.values(findChartData(index));

          return {
            label: row[2],
            data: row.slice(1, row.length).reverse(),
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
          <h3>Total Current Assets</h3>
          <PrepareTable
            data={currentAsset}
            headingName='Current Assets'
            onChange={onChange}
            colData={data}
          />

          <PrepareTable
            data={nonCurrentAsset}
            headingName='Non-Current Assets'
            onChange={onChange}
            colData={data}
          />

          <PrepareTable
            data={currentLiabilities}
            headingName='Current Liabilities'
            onChange={onChange}
            colData={data}
          />

          <PrepareTable
            data={nonCurrentLiabilities}
            headingName='Non-Current Liabilities'
            onChange={onChange}
            colData={data}
          />

          <PrepareTable
            data={shareholdersEquity}
            headingName='-'
            onChange={onChange}
            colData={data}
          />

          <PrepareTable
            data={otherData}
            headingName='-'
            onChange={onChange}
            colData={data}
          />
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

export default BalanceSheet