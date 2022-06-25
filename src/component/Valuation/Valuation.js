import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getValuationData } from '../api/valuation';
import { getSectorAndIndustryBySymbol } from '../api/sectors';
import { getBookKeyStatus } from '../api/commonApi';
import { CircularProgress } from '@material-ui/core';
import { getCompanyDataBySymbol } from '../api/commonApi';
import { getCompanyLogo } from '../api/company';
import ValuationFCFFM from './ValuationFCFFM';
import ValuationDividend from './ValuationDividend';
import InvexRoutes from '../../InvexRoutes';

const Valuation = () => {
  const { symbol } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [type, setType] = useState('DIVIDEND'); //DIVIDEND, FCFFM
  const [sector, setSector] = useState(null);
  const [keyStatus, setKeyStatus] = useState(null);
  const [logo, setLogo] = useState();
  const [Company, setCompany] = useState(null);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (symbol) {
        setLoading(true);
        var data = await getValuationData(symbol);
        if (data && data.type) {
          setType(data.type);

          if (data.type === 'DIVIDEND') {
            if (data.data[0]['DivDisModelInputs'][0].is_published === false) {
              navigate(InvexRoutes.SymbolNotPublished);
            }
          }
          if (data.type === 'FCFFM') {
            if (data.data[0]['CompanyValuations'][0].is_published === false) {
              navigate(InvexRoutes.SymbolNotPublished);
            }
          }
        }
        if (data && data.data) {
          setData(data.data[0]);
        }

        const sector = await getSectorAndIndustryBySymbol(symbol);
        if (sector && sector?.status == 200) {
          setSector(sector?.data);
        }

        var res = await getBookKeyStatus(symbol);
        if (res && res?.status === 200) {
          setKeyStatus(res?.data?.quote);
        }

        var data = await getCompanyDataBySymbol(symbol);
        if (data && data.status === 200) {
          setCompany(data?.data);
        } else {
          setCompany(null);
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
      }
    })();
  }, [symbol]);

  return (
    <>
      {data &&
        type &&
        !Loading &&
        (type === 'FCFFM' ? (
          <ValuationFCFFM
            allData={data}
            sector={sector}
            keyStatus={keyStatus}
            logo={logo}
            Company={Company}
          />
        ) : (
          <ValuationDividend
            allData={data}
            sector={sector}
            keyStatus={keyStatus}
            logo={logo}
            Company={Company}
          />
        ))}

      {Loading && (
        <div
          style={{
            height: 600,
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress />
        </div>
      )}
    </>
  );
};;;;;;;

export default Valuation;
