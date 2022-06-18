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
import { getCompanyLogo } from '../api/company';

const SymbolPage = (props) => {
  const [params] = useSearchParams();
  const [Company, setCompany] = useState(null);
  const [KeyStatus, setKeyStatus] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [DividendData, setDividendData] = useState(false);
  const [NewsData, setNewsData] = useState(null);
  const [sector, setSector] = useState(null);
  const [Options, setOptions] = useState({});
  const [logo, setLogo] = useState();
  const date = '2022/05/11';
  // const date = moment(new Date()).format('YYYY/MM/DD');

  useEffect(() => {
    (async () => {
      const symbol = params.get('symbol');
      setLoading(true);
      if (symbol) {
        var data = await getCompanyDataBySymbol(symbol);
        if (data && data.status === 200) {
          setCompany(data?.data);
        } else {
          setCompany(null);
        }
        var res = await getBookKeyStatus(symbol);
        if (res && res?.status === 200) {
          setKeyStatus(res?.data?.quote);
        }

        var volatility = await getVolatality(symbol, date);
        if (volatility) {
          setOptions(volatility);
        }

        const logoData = await getCompanyLogo(symbol);
        if (
          logoData &&
          logoData.data &&
          logoData.data.url &&
          logoData.status === 200
        ) {
          setLogo(logoData.data.url);
        }

        setLoading(false);

        var dividend = await getFinancialdividend(symbol);
        if (dividend && dividend?.status == 200) {
          setDividendData(dividend?.data);
        }

        var news = await getNewsBySymbol(symbol);
        if (news && news?.status == 200) {
          setNewsData(news?.data);
        }

        const sector = await getSectorAndIndustryBySymbol(symbol);
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
                logo={logo}
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