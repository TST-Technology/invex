import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { getBookKeyStatus } from '../../api/commonApi';
import { getTopCompetitors } from '../../api/company';

const Competitors = ({ KeyStatus }) => {

  const [tableData, settableData] = useState()
  const [tableHeader, settableHeader] = useState()
  const [params] = useSearchParams();
  var name = ['Market Cap','latest Price','Average Total Volume','PE Ratio', '52 Week High', '52 Week Low']

  const [Tcol1, setTcol1] = useState(null)
  const [Tcol2, setTcol2] = useState(null)
  const [Tcol3, setTcol3] = useState(null)
  const [Tcol4, setTcol4] = useState(null)
  const [Tcol5, setTcol5] = useState(null)

  useEffect(() => {
    (async () => {
      if (params.get('symbol')) {
        var data = await getTopCompetitors(params.get('symbol'));
        // console.log('data', data);
        if (data && data?.status == 200) {
          // KeyStatus
          var api = []
          data?.data?.companySymbols.map((symbol, i) => {
            api.push(getBookKeyStatus(symbol))
          })
          const symbolList = await Promise.all(api)
          if (symbolList && symbolList?.length > 0) {
            setTcol1(symbolList[0]?.data?.quote)
            setTcol2(symbolList[1]?.data?.quote)
            setTcol3(symbolList[2]?.data?.quote)
            setTcol4(symbolList[3]?.data?.quote)
            setTcol5(symbolList[4]?.data?.quote)
          }

          settableHeader(name)
        }
      }
    })()
  }, [params.get('symbol')
])

  useEffect(() => {
    console.log('Tcol1',Tcol1,'Tcol2',Tcol2,'Tcol3',Tcol3,'Tcol4',Tcol4,'Tcol5',Tcol5)
    var tempArr = [
      {
        asOf: Tcol1?.symbol,
        col1: Tcol1?.marketCap,
        col2: Tcol1?.latestPrice,
        col3: Tcol1?.avgTotalVolume,
        col4: Tcol1?.peRatio,
        col5: Tcol1?.week52High,
        col6: Tcol1?.week52Low,
      },
      {
        asOf: Tcol2?.symbol,
        col1: Tcol2?.marketCap,
        col2: Tcol2?.latestPrice,
        col3: Tcol2?.avgTotalVolume,
        col4: Tcol2?.peRatio,
        col5: Tcol2?.week52High,
        col6: Tcol2?.week52Low,
      },
      {
        asOf: Tcol3?.symbol,
        col1: Tcol3?.marketCap,
        col2: Tcol3?.latestPrice,
        col3: Tcol3?.avgTotalVolume,
        col4: Tcol3?.peRatio,
        col5: Tcol3?.week52High,
        col6: Tcol3?.week52Low,
      },
      {
        asOf: Tcol4?.symbol,
        col1: Tcol4?.marketCap,
        col2: Tcol4?.latestPrice,
        col3: Tcol4?.avgTotalVolume,
        col4: Tcol4?.peRatio,
        col5: Tcol4?.week52High,
        col6: Tcol4?.week52Low,
      },
      {
        asOf: Tcol5?.symbol,
        col1: Tcol5?.marketCap,
        col2: Tcol5?.latestPrice,
        col3: Tcol5?.avgTotalVolume,
        col4: Tcol5?.peRatio,
        col5: Tcol5?.week52High,
        col6: Tcol5?.week52Low,
      }
    ]
    settableData(tempArr)

  }, [Tcol1, Tcol2, Tcol3, Tcol4, Tcol5])

  return (
    <div className='top_competitors'>
      <div className='mb-5'>
        <div className='d-flex align-items-center justify-content-between border p-3 border-bottom-0'>
          <h6 className='m-0'>
            <strong>Top Competitors</strong>
          </h6>
        </div>
        <div className='table-responsive'>
          <table className='table table-bordered m-0 most_tables'>
            <thead className='table-light'>
              <tr>
                <th></th>
                {tableHeader && tableHeader?.length > 0 && tableHeader.map((el, i) => {
                  return (
                    <th key={i} scope='col'>{el}</th>
                  )
                })}
              </tr>
            </thead>
            <tbody className='border-top-0'>
              {tableData && tableData?.length > 0 && tableData?.map((el, i) => {
                return (
                  <tr>
                    <td>{el?.asOf}</td>
                    <td>{el?.col1}</td>
                    <td>{el?.col2}</td>
                    <td>{el?.col3}</td>
                    <td>{el?.col4}</td>
                    <td>{el?.col5}</td>
                    <td>{el?.col6}</td>
                  </tr>
                )
              })}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Competitors
