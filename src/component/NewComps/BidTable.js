import React, { useEffect, useState } from "react";
import bidData from "./tableDataNew.json";
import moment from "moment";
// import CustomMuiDataTable from "../Common/CustomDataTable/CustomMuiDataTable";
import CustomTable from "./customTable";
// import tableData from "./callTableSample.json";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import ReactOwlCarousel from "react-owl-carousel";
import fetchData from "./fetchData";
// import TableFilter from "./CallsAndPuts/tableFilter";
import CompanyInfo from "./CallsAndPuts/CompanyInfo";
import "./scss/bidTable.css";
import { options, columns, midTableCols } from "./helpers";
// import Options from "../Options/Options";

const BidTable = () => {
  const expiration = bidData["Expiration"] || [];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const rollingValue = bidData["rolling_value"] || [];
  const [expDateFilter, setExpDateFilter] = useState(0);
  const [selRollingVal, setSelRollingVal] = useState(rollingValue[0]);

  // const [currCallVal, setCurrCallVal] = useState({});
  const [callTable, setCallTableData] = useState([]);
  const [putTable, setPutTableData] = useState([]);
  const [stepSize, setStepSize] = useState(1);
  const [strikes, setStrikes] = useState(25);

  const stepSizeChangeHandler = (e) => {
    setStepSize(e.target.value);
  };

  const strikesChangeHandler = (e) => {
    setStrikes(e.target.value);
  };

  const updateCallTableData = () => {
    const filteredCallBid = Object.keys(bidData)
      .filter((key) => key.endsWith(`_call_${selRollingVal}`))
      .reduce((obj, key) => {
        return {
          ...obj,
          [key]: bidData[key],
        };
      }, {});

    const strikeCpRatio = Object.keys(bidData)
      .filter((key) => key.endsWith(`Strike_${selRollingVal}`))
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
    const commonStrike = strikeCpRatio[`Strike_${selRollingVal}`] || [0];
    // const cpRatio = filteredCallBid[`space_${selRollingVal}`] || [0];

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
        CommonStrike: commonStrike[i],
        CpRatio: 0,
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
    <>
      <div className="container mt-5">
        <div className="p-2 company_info card shadow d-flex flex-row justify-content-center mt-5 margin ">
          <img
            className="mx-3"
            width="40px"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAclBMVEX///8AAADs7OzS0tLW1tbz8/P5+flZWVmamprf39+/v7/8/PzNzc25ubnBwcGfn5+tra0xMTGNjY3n5+dnZ2dPT09iYmJ9fX2lpaVAQEAtLS2FhYVsbGwSEhImJiZ1dXU5OTlHR0cZGRkgICCLi4sNDQ0w45DiAAAFaklEQVR4nO2d6XbiMAyF48CQBAINO2Wny/u/4jTAFEjs4EyJry71959zpItjW7JkB4HH4/m9tBfzqUrRVgikk0XqSBdtiTjSmfpHH22LMPpbdSFDWyOKwbu6xo+cC+FU3TJAWySHF1WkhTZJCp3XkjZqjDZKCO2yNEqhjRJCX6fNEG2VDMrTTc4cbZYIYq02fiXPyfTaqD9owwSQGrTxU04Q/DFoo17QlglgaBInRFuGZ2TSZoq2DE9i0sYHVhUf1RvaMjymVdxvcr4wavOOtgzPwiiOz62bB06EtgyPNhY/4iOHQJPfOuEz68HYpM0MbZkADJkKtUEbJgHTBtAHVeZwvI02TAIDvTZ+h5Ojj8f9WdWRSKdNgrZKCJuyNK8dtFFSKGszQpskhk5RmqX/pL4pruQ+ZLjiVpwF2hxZ9C7KRD5fXOQkzHDe7aEtEUgrTdu+AsejIUzSQbebJjXTeuNuvJsuN+ptH61Xi8HzDa72Yn1dMxvFliFTmE3Ke8Op7a8J6PVnZQeVmtw9iRrHS90Pj+yeIlhvrY0OqnWFh51sb/7hkZg96941//dnD/VpvlTzNWmGD3OOsFCArmdaavcITcnkMivWPdH4YO3idSa0X6xbr4bzDN3+7z/qky/RvSTTzt2VRHw5n9BYS/J42DLwhmR5Q3BlN+p9Uj/nA+1wDXaOtWEqbrfaozyYFdppSxDasFQpzyHacJyM6hteXCA/ljA1LjhAfE2lsXHBASPpcZaxcK1xNuKPAHETjvxy0xCmDcGper1kwwMhCK5gKxXD7Sjb+278Wm26IG0IvinYwKFIV4BmHPlreA5oqUK7bQVoj8ORP3adGT1BkgHUFMo6AO21HeaW5yYhOdGDfFVLtNeWODzDu0BSVwlJcrH04bs94TzDUqv8gRCHpYIAkR6laYsFaMOyjpubnpuE5atCzMc0V3ghTh1YSgcg5+MsU46+d7VhOJIVASZ4oCnRBmhDkq0IvDhV9O678nBY0hWQmHyPdtoWRHKdZg+IEGeLdtoWyLEM2mlbvDgVQJKkLEF56Y4OF9B0CSPEITl6wIjDUc8fYM6CJ2inbYGUH6OdtqV+Z+YDYJmRVwhxWM70IJXrB7TXlmAKSeX3EB3RvkbVODHabTsgW2Sa9QojDsnpDOJshqZAx/hCTLNQVPZX3LvfLGi/rYCUWXyxQztuBUgcim5y0IysOBKCmOp+xRFEtFDiUEw7MHEYogjYpMOQMDU/TdU84scOpm3mjPi2q0+kOtLfsYSkSi/IvucDt5ifkH2dBVgctZVcX4q6rOvCRG5WGf1d5azFTj1oZXLEXt4ASgfeIHbkoDJeVwi+8e2A1kZymIXKJF+Q3BCB1kb0fTHoKVl0KRzygskctP/VVLyA4QDB03EONKujpF9OCrtHURG0xGIqdU5IXsdPHGDaEJzR4IaO3HzFBdQZjfgkew4q/JQ/4+S4fxIjR3YK+RtM9STaa1sQJdscBXA5Ng+iPRaaXmHEci42O6rB9ZxMsYx/41gctLv1cHuGxfYgrMuyAoKgqoC7G9k/0a7Wx10UIbl+wISrOjiSuKGAm/B8j3bz/3BzHxNHMF7GxUaZ4SkVPc1PO1xb41uaPsbaox38Efdeq/8hDC0zZppNfDHF4jqavLGKohGtkuYOiEkapytpakF/Bm0sx040ytJ2kiTttB9bvczMu8G5JbzTMxJlxatwwuxe7MEYbRqoqL0YZvr1uJNVJD32rEGDFtNeeVc1AlqmC53EN5/VJNQNnvjeJi7UFRnOGCoGatIqTCM7u23KoBCCzFmu6qpJuDjr8zmL6+TE24vd4e3rZ8NJzL/vq6IzHj/VZOrxeGrwF7wqVa4OUfXrAAAAAElFTkSuQmCC"
          />
          <div className="d-flex flex-column mx-3 justify-content-center">
            <h6 className="my-auto">Apple Inc.</h6>
            <p className="my-auto">APPL</p>
          </div>
          <h4 style={{ color: "green" }}>$235.49 </h4>
          <p
            style={{ color: "green" }}
            className="align-self-center justify-content-center mx-2 my-auto"
          >
            +3.10 (+1.3%)
          </p>
          <img src={"./images/top-graph.png"} className="mx-5" />
          <form className="d-flex mx-3">
            <input
              className="form-control mx-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="shadow card d-flex flex-row mx-2 mb-4 pl-3 pr-3 justify-content-center align-items-center">
          <p className="my-auto mx-2">Strategy</p>
          <div className="dropdown my-auto">
            <a
              className="btn  dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Calls and puts
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
          <span className="my-auto mx-3" for="step-size">
            Step Size
          </span>
          <input
            type="number"
            name="step-size"
            value={stepSize}
            onChange={stepSizeChangeHandler}
            className="form-control w-auto max-width"
          />
          <p className="my-auto mx-3">Strikes</p>
          <input
            type="range"
            className="form-range w-auto"
            min="0"
            max="100"
            value={strikes}
            onChange={strikesChangeHandler}
          />
          <p className="my-auto mx-3">Start Date</p>
          <input type="date" className="form-control w-auto" />
          <p className="my-auto mx-3">End Date</p>
          <input type="date" className="form-control w-auto" />
        </div>
      </div>

      <div className="container master-container-div mt-1">
        <div className="d-flex justify-content-between mb-5">
          {expiration.map((expDate, index) => {
            const date = moment(expDate).format("MMM DD, YYYY");
            return (
              <div
                class="item"
                onClick={() => {
                  setExpDateFilter(index);
                }}
              >
                <div
                  className={
                    expDateFilter === index
                      ? "active-date date-selector"
                      : "date-selector"
                  }
                >
                  <div class="expiry-date">{date}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 
        <section class="top_carosuel_sec">
          <div class="">
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
                    <div
                      className={
                        expDateFilter === index
                          ? "active-date date-selector"
                          : "date-selector"
                      }
                    >
                      <div class="expiry-date">{date}</div>
                    </div>
                  </div>
                );
              })}
            </ReactOwlCarousel>
          </div>
        </section> */}

        <div className="row ">
          <div className="col-sm-5 g-0">
            <div class=" border p-3 border-bottom-0 center-text text-success">
              <strong>Calls</strong>
            </div>
            <CustomTable columns={columns} tableData={callTable} />
          </div>

          <div className="col-sm-2 g-0">
            <div class="center-text border p-3 border-bottom-0 text-muted">
              <strong>
                {moment(expiration[expDateFilter]).format("MMM DD, YYYY")}
              </strong>
            </div>
            <CustomTable columns={midTableCols} tableData={callTable} />
          </div>

          <div className="col-sm-5 g-0">
            <div class="align-items-center text-align-center border p-3 border-bottom-0 center-text text-danger">
              <strong>Puts</strong>
            </div>
            <CustomTable columns={columns} tableData={putTable} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BidTable;
