import React, { useEffect, useState } from 'react';
import CompanyView from './CompanyView/CompanyView';
import VolatilityChart from './VolatilityChart/VolatilityChart';
import VolatilityIndex from './VolatilityIndex/VolatilityIndex';
import Volatility from './VolatilityRange/Volatility';
import OptionVolume from './Volume/OptionVolume';
import { useParams } from 'react-router-dom';
import { getVolatality } from '../../api/Option';
import {
  getBookKeyStatus,
  getCompanyDataBySymbol,
  getCompanyDataByAAPL,
  getBookKeyAAPL,
} from '../../api/commonApi';
import { getCompanyLogo } from '../../api/company';
import moment from 'moment';

const Quote = () => {
  const { symbol } = useParams();
  const [Company, setCompany] = useState(null);
  const [KeyStatus, setKeyStatus] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [Options, setOptions] = useState({});
  const [logo, setLogo] = useState();
  const date = '2022/05/11';
  // const date = moment(new Date()).format('YYYY/MM/DD');

  useEffect(() => {
    (async () => {
      setLoading(true);
      console.log(symbol);
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
      } else {
        var data = await getCompanyDataByAAPL(symbol);
        if (data && data.status === 200) {
          setCompany(data?.data);
        } else {
          setCompany(null);
        }
        var res = await getBookKeyAAPL(symbol);
        if (res && res?.status === 200) {
          setKeyStatus(res?.data?.quote);
        }
        var volatility = await getVolatality('aapl', date);
        if (volatility) {
          setOptions(volatility);
        }
        const logoData = await getCompanyLogo('aapl');
        if (
          logoData &&
          logoData.data &&
          logoData.data.url &&
          logoData.status === 200
        ) {
          setLogo(logoData.data.url);
        }
        setLoading(false);
      }
    })();
  }, [symbol]);

  return (
    <>
      <CompanyView
        Loading={Loading}
        KeyStatus={KeyStatus}
        Company={Company}
        logo={logo}
      />
      <Volatility Options={Options} Loading={Loading} />
      <VolatilityIndex Options={Options} Loading={Loading} />
      <VolatilityChart Options={Options} Loading={Loading} />
      <OptionVolume Options={Options} Loading={Loading} />
    </>
  );
};

export default Quote;
