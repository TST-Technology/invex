import React, { useEffect, useState } from "react";
import FilterModel from "./FilterModel/FilterModel";
import LeftSideFilter from "./LeftSideFilter/LeftSideFilter";
import RightSideTable from "./RightSideTable/RightSideTable";
import SwitchScreener from "./SwitchScreener/SwitchScreener";

const Screener = () => {
  const [showFilterSection, setshowFilterSection] = useState(false);

  useEffect(() => {
    console.log("Filter Section Value", showFilterSection);
  }, [showFilterSection]);

  return (
    <>
      <div className="main">
        <section className="filterscreener_section">
          <div className="container">
            <div
              className={
                "filterscreener_area " +
                (showFilterSection ? "show-mobile-content" : "")
              }
            >
              <a
                href="javascript:void(0);"
                className="btn btn-light font-bd filter-hide filterhidemobile"
              >
                <i className="bi bi-chevron-double-left"></i>
              </a>
              <LeftSideFilter showFilterSection={showFilterSection} />
              <RightSideTable
                showFilterSection={showFilterSection}
                setshowFilterSection={setshowFilterSection}
              />
            </div>
          </div>
        </section>
      </div>
      <FilterModel />
      <SwitchScreener />
    </>
  );
};

export default Screener;
