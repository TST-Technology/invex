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
import {
  getOneDayBeforeDate,
  getNDayBeforeDate,
} from '../../Common/CommonFunctions';
import { getCompanyLogo } from '../../api/company';
import moment from 'moment';

const Quote = () => {
  const { symbol } = useParams();
  const [Company, setCompany] = useState(null);
  const [KeyStatus, setKeyStatus] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [Options, setOptions] = useState(null);
  const [logo, setLogo] = useState();
  const date = getOneDayBeforeDate();

  useEffect(() => {
    (async () => {
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
        let i = 1;

        do {
          try {
            if (Options) {
              setOptions(null);
            }
            const tempDate = getNDayBeforeDate(i);
            var volatility = await getVolatality(symbol, tempDate);
            if (volatility) {
              setOptions(volatility);
              break;
            }
          } catch (error) {
            setOptions(null);
            i++;
          }
        } while (i <= 15 && !Options);

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

        let i = 1;
        do {
          try {
            const tempDate = getNDayBeforeDate(i);
            var volatility = await getVolatality('aapl', tempDate);
            if (volatility) {
              setOptions(volatility);
              break;
            }
          } catch (error) {
            setOptions(null);
            i++;
          }
        } while (i <= 15 && !Options);

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
};;

export default Quote;
