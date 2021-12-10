import React, { useEffect, useState } from "react";
import bidData from "./tableDataNew.json";
import moment from "moment";
import CustomMuiDataTable from "../Common/CustomDataTable/CustomMuiDataTable";
// import tableData from "./callTableSample.json";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ReactOwlCarousel from "react-owl-carousel";
import fetchData from "./fetchData";
// import Options from "../Options/Options";

const BidTable = () => {
  const expiration = bidData["Expiration"] || [];
  const rollingValue = bidData["rolling_value"] || [];
  const [expDateFilter, setExpDateFilter] = useState(0);
  const [selRollingVal, setSelRollingVal] = useState(rollingValue[0]);

  const [currCallVal, setCurrCallVal] = useState({});
  const [callTable, setCallTableData] = useState([]);
  const [putTable, setPutTableData] = useState([]);

  const allowed = "_call_24";

  const options = {
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    responsiveClass: true,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 3,
      },
      700: {
        items: 4,
      },
      1000: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  };

  const columns = [
    {
      name: "Bid",
      label: "Bid",
    },
    {
      name: "Ask",
      label: "Ask",
    },
    {
      name: "Mid",
      label: "Mid",
    },
    {
      name: "Time",
      label: "Time",
    },
    {
      name: "% Change",
      label: "% Change",
    },
    {
      name: "Probab Strike",
      label: "Probab Strike",
    },
    {
      name: "HVTV",
      label: "HVTV",
    },
    {
      name: "Invex Ratio",
      label: "Invex Ratio",
    },
  ];

  // const midTableCols = [
  //   {
  //     name: "Strike",
  //     label: "Strike",
  //   },
  //   {
  //     name: "CP Ratio",
  //     label: "CP Ratio",
  //   },
  // ];

  const filtered = Object.keys(bidData)
    .filter((key) => key.endsWith(allowed))
    .reduce((obj, key) => {
      return {
        ...obj,
        [key]: bidData[key],
      };
    }, {});

  const updateCallTableData = () => {
    const filteredCallBid = Object.keys(bidData)
      .filter((key) => key.endsWith(`_call_${selRollingVal}`))
      .reduce((obj, key) => {
        return {
          ...obj,
          [key]: bidData[key],
        };
      }, {});

    const ask = filteredCallBid[`Ask_call_${selRollingVal}`] || [0];
    const bid = filteredCallBid[`Bid_call_${selRollingVal}`] || [0];
    const mid = filteredCallBid[`Mid_call_${selRollingVal}`] || [0];
    const time = filteredCallBid[`Time_value_call_${selRollingVal}`] || [0];
    const change = filteredCallBid[`%_change_call_${selRollingVal}`] || [0];
    const strike = filteredCallBid[`Prob_Strike_call_${selRollingVal}`] || [0];
    const hvtv = filteredCallBid[`HVTF_call_${selRollingVal}`] || [0];
    const invex = filteredCallBid[`Invex_ratio_call_${selRollingVal}`] || [0];

    const tabData = [];

    const maxLen = ask.length || 0;

    for (let i = 0; i < maxLen; i++) {
      const obj = {
        Bid: bid[i].toFixed(3),
        Ask: ask[i].toFixed(3),
        Mid: mid[i].toFixed(3),
        Time: time[i].toFixed(3),
        "% Change": String(Number(change[i]).toFixed(3)).concat(` %`),
        "Probab Strike": strike[i].toFixed(3),
        HVTV: hvtv[i].toFixed(3),
        "Invex Ratio": invex[i].toFixed(3),
      };

      tabData.push(obj);
    }

    setCallTableData(tabData);
  };

  const updatePutTableData = () => {
    const filteredCallBid = Object.keys(bidData)
      .filter((key) => key.endsWith(`_put_${selRollingVal}`))
      .reduce((obj, key) => {
        return {
          ...obj,
          [key]: bidData[key],
        };
      }, {});

    const ask = filteredCallBid[`Ask_put_${selRollingVal}`] || [0];
    const bid = filteredCallBid[`Bid_put_${selRollingVal}`] || [0];
    const mid = filteredCallBid[`Mid_put_${selRollingVal}`] || [0];
    const time = filteredCallBid[`Time_value_put_${selRollingVal}`] || [0];
    const change = filteredCallBid[`%_change_put_${selRollingVal}`] || [0];
    const strike = filteredCallBid[`Prob_Strike_put_${selRollingVal}`] || [0];
    const hvtv = filteredCallBid[`HVTF_put_${selRollingVal}`] || [0];
    const invex = filteredCallBid[`Invex_ratio_put_${selRollingVal}`] || [0];

    const tabData = [];

    const maxLen = ask.length || 0;

    for (let i = 0; i < maxLen; i++) {
      const obj = {
        Bid: bid[i].toFixed(3),
        Ask: ask[i].toFixed(3),
        Mid: mid[i].toFixed(3),
        Time: time[i].toFixed(3),
        "% Change": String(Number(change[i]).toFixed(3)).concat(` %`),
        "Probab Strike": strike[i].toFixed(3),
        HVTV: hvtv[i].toFixed(3),
        "Invex Ratio": invex[i].toFixed(3),
      };

      tabData.push(obj);
    }

    setPutTableData(tabData);
  };

  // console.log("Bid expiration date ", expDateFilter, selRollingVal, filtered);

  useEffect(() => {
    updateCallTableData();
    updatePutTableData();
    // console.log("Call Table Data", callTable);
  }, [rollingValue, expDateFilter]);

  useEffect(() => {
    setSelRollingVal(rollingValue[expDateFilter]);
  }, [expDateFilter, rollingValue]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      {/* <h2 className="mb-5">Bid Table</h2> */}

      <section class="top_carosuel_sec">
        <div class="container">
          <ReactOwlCarousel
            className="top_market_carousel owl-carousel owl-theme"
            {...options}
          >
            {expiration.map((expDate, index) => {
              const date = moment(expDate).format("MMM DD, YYYY");
              return (
                <div
                  class="item"
                  onClick={() => {
                    setExpDateFilter(index);
                  }}
                >
                  <div class="marketviewblk">
                    <div class="chart-text">
                      <h5 class="market_company">{date}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
            {expiration.map((expDate, index) => {
              const date = moment(expDate).format("MMM DD, YYYY");
              return (
                <div
                  class="item"
                  onClick={() => {
                    setExpDateFilter(index);
                  }}
                >
                  <div class="marketviewblk">
                    <div class="chart-text">
                      <h5 class="market_company">{date}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </ReactOwlCarousel>
        </div>
      </section>
      <div className="row container">
        <div className="col-sm-6 g-0">
          <div class=" border p-3 border-bottom-0">
            <h6 className="text-success">
              <strong>Calls</strong>
            </h6>
          </div>
          <CustomMuiDataTable columns={columns} tableData={callTable} />
        </div>

        <div className="col-sm-6 g-0">
          <div class="align-items-center text-align-center border p-3 border-bottom-0">
            <h6 className="text-danger">
              <strong>Puts</strong>
            </h6>
          </div>
          <CustomMuiDataTable columns={columns} tableData={putTable} />
        </div>
      </div>
    </div>
  );
};

export default BidTable;
