import { CircularProgress } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getNewsBySymbol } from '../api/company'
import { getBookKeyStatus, getCompanyDataBySymbol } from '../api/commonApi'
import { getFinancialdividend } from '../api/financialStatistics'
import CompanyDetail from './CompanyDetails/CompanyDetail'
import CompanyValuation from './CompanyValuation/CompanyValuation'
import PageContent from './PageContent/PageContent'
import CompetitorsNews from './CompetitorsAndNews/CompetitorsNews'
import { getSectorAndIndustryBySymbol } from '../api/sectors';
import { getVolatality } from '../api/Option';

const SymbolPage = (props) => {
  const [params] = useSearchParams();
  const [Company, setCompany] = useState(null);
  const [KeyStatus, setKeyStatus] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [DividendData, setDividendData] = useState(false);
  const [NewsData, setNewsData] = useState(null);
  const [sector, setSector] = useState(null);
  const [Options, setOptions] = useState({});
  const date = '2022/05/11';
  // const date = moment(new Date()).format('YYYY/MM/DD');

  useEffect(() => {
    (async () => {
      setLoading(true);
      if (params.get('symbol')) {
        var data = await getCompanyDataBySymbol(params.get('symbol'));
        if (data && data.status === 200) {
          setCompany(data?.data);
        } else {
          setCompany(null);
        }
        var res = await getBookKeyStatus(params.get('symbol'));
        if (res && res?.status === 200) {
          setKeyStatus(res?.data?.quote);
        }

        var volatility = await getVolatality(params.get('symbol'), date);
        if (volatility) {
          setOptions(volatility);
        }
        setLoading(false);

        var dividend = await getFinancialdividend(params.get('symbol'));
        if (dividend && dividend?.status == 200) {
          setDividendData(dividend?.data);
        }

        var news = await getNewsBySymbol(params.get('symbol'));
        if (news && news?.status == 200) {
          setNewsData(news?.data);
        }

        const sector = await getSectorAndIndustryBySymbol(params.get('symbol'));
        if (sector && sector?.status == 200) {
          setSector(sector?.data);
        }
      }
    })();
  }, [params]);

  return (
    <div className='main'>
      <section className='company_details'>
        <div className='container'>
          {Loading && (
            <div
              style={{
                height: 500,
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
              <CompanyDetail
                Company={Company}
                KeyStatus={KeyStatus}
                Sector={sector}
              />
              <CompanyValuation KeyStatus={KeyStatus} />
              <PageContent
                Company={Company}
                DividendData={DividendData}
                Options={Options}
                Loading={Loading}
              />
              <CompetitorsNews KeyStatus={KeyStatus} NewsData={NewsData} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};;;

export default SymbolPage