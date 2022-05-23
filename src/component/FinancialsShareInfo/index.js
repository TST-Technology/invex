import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getCompanyDataBySymbol } from "../api/commonApi";
import { getFinancialStatistics } from "../api/financialStatistics";
import Content from "./content";
import Sidebar from "./sidebar";

const FinancialShareInfo = () => {
  const [statistics, setStatistics] = useState(null);
  const { symbol } = useParams();
  const [Company, setCompany] = useState(null);

  useEffect(() => {
    (async () => {
      if (symbol) {
        var data = await getFinancialStatistics(symbol);
        console.log("data", data);
        if (data && data.data && data.status === 200) {
          setStatistics(data.data[0]);
        }
        var res = await getCompanyDataBySymbol(symbol);
        if (res && res.status === 200) {
          setCompany(res?.data);
        } else {
          setCompany(null);
        }
      }
    })();
  }, []);

  return (
    <section className="company_details">
      <div className="container">
        <div className="row">
          <Sidebar Company={Company} />
          <div className="col-lg-8">
            <Content statistics={statistics} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialShareInfo;
