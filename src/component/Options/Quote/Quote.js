import React, { useEffect, useState } from 'react';
import CompanyView from './CompanyView/CompanyView';
import VolatilityChart from './VolatilityChart/VolatilityChart';
import VolatilityIndex from './VolatilityIndex/VolatilityIndex';
import Volatility from './VolatilityRange/Volatility';
import OptionVolume from './Volume/OptionVolume';
import { useSearchParams } from 'react-router-dom';
import { getVolatality } from '../../api/Option';
import {
  getBookKeyStatus,
  getCompanyDataBySymbol,
  getCompanyDataByAAPL,
  getBookKeyAAPL,
} from '../../api/commonApi';
import moment from 'moment';

const Quote = () => {
  const [params] = useSearchParams();
  const [Company, setCompany] = useState(null);
  const [KeyStatus, setKeyStatus] = useState(null);
  const [Loading, setLoading] = useState(false);
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
        var volatility = await getVolatality('aapl', date);
        if (volatility) {
          setOptions(volatility);
        }
        setLoading(false);
      }
    })();
  }, [params]);

  return (
    <>
      <CompanyView Loading={Loading} KeyStatus={KeyStatus} Company={Company} />
      <Volatility Options={Options} Loading={Loading} />
      <VolatilityIndex Options={Options} Loading={Loading} />
      <VolatilityChart Options={Options} Loading={Loading} />
      <OptionVolume Options={Options} Loading={Loading} />
    </>
  );
};

export default Quote;
