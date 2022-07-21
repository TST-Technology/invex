import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getValuationData } from '../../api/valuation';
import { CircularProgress } from '@material-ui/core';
import { getCompanyProfileQuote } from '../../api/Symbol';
import ValuationFCFFM from './ValuationFCFFM';
import ValuationDividend from './ValuationDividend';
import InvexRoutes from '../../../InvexRoutes';

const Valuation = () => {
  const { symbol } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [type, setType] = useState('DIVIDEND'); //DIVIDEND, FCFFM
  const [Company, setCompany] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [companyQuote, setCompanyQuote] = useState(null);

  useEffect(() => {
    (async () => {
      if (symbol) {
        setLoading(true);
        try {
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
        } catch (error) {
          setData(null);
        }

        try {
          const data = await getCompanyProfileQuote({ symbol: symbol });

          if (data && data.status == 200 && data.data) {
            setCompanyQuote(data.data);
          }
        } catch (error) {
          setCompanyQuote(null);
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
          <ValuationFCFFM allData={data} companyQuote={companyQuote} />
        ) : (
          <ValuationDividend allData={data} companyQuote={companyQuote} />
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
};;;;;

export default Valuation;
