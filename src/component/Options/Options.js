import React , { useEffect, useState } from 'react'
import CompanyView from './CompanyView/CompanyView'
import VolatilityChart from './VolatilityChart/VolatilityChart'
import VolatilityIndex from './VolatilityIndex/VolatilityIndex'
import Volatility from './VolatilityRange/Volatility'
import OptionVolume from './Volume/OptionVolume'
import { useSearchParams } from 'react-router-dom'
import { getVolatality } from '../api/Option';
import {
  getBookKeyStatus,
  getCompanyDataBySymbol,
  getCompanyDataByAAPL,
  getBookKeyAAPL,
} from '../api/commonApi';
import moment from 'moment';

const Options = () => {
  const [params] = useSearchParams();
  const [Company, setCompany] = useState(null);
  const [KeyStatus, setKeyStatus] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [VolatilityData, setVolatilityData] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      if (params.get('symbol')) {
        // const date = '2022/05/11';
        const date = moment(new Date()).format('YYYY/MM/DD');
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
        setLoading(false);
        var volatility = await getVolatality(params.get('symbol'), date);
        if (volatility) {
          setVolatilityData(volatility);
        }
      } else {
        var data = await getCompanyDataByAAPL(params.get('symbol'));
        if (data && data.status === 200) {
          setCompany(data?.data);
        } else {
          setCompany(null);
        }
        var res = await getBookKeyAAPL(params.get('symbol'));
        if (res && res?.status === 200) {
          setKeyStatus(res?.data?.quote);
        }
        setLoading(false);
      }
    })();
  }, [params]);
  return (
    <div className='main'>
      <section className='company_details'>
        <div className='container'>
          <CompanyView
            Loading={Loading}
            KeyStatus={KeyStatus}
            Company={Company}
          />
          <Volatility Company={Company} />
          <VolatilityIndex Company={Company} />
          <VolatilityChart />
          <OptionVolume />
        </div>
      </section>
    </div>
  );
};

export default Options
