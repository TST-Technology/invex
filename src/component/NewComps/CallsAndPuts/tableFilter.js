import React from "react";
import CompanyInfo from "./CompanyInfo";
import CompanyStats from "./CompanyStats";
import "./styles.css";

function TableFilter() {
  return (
    <div className="main">
      <section>
        <div className="container">
          <div className="row">
            <CompanyInfo />
            <CompanyStats />
          </div>
        </div>
      </section>
    </div>
  );
}

export default TableFilter;
