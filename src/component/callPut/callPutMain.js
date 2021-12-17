import { ThemeProvider } from "@mui/styles";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Accordion, useAccordionButton } from "react-bootstrap";
import MUIDataTable from "mui-datatables";
// import { Table } from "antd";
import { Slider, Tooltip } from "@mui/material";
import { Box, Modal, Typography } from "@material-ui/core";
import CollapsibleTable from "./muiCollapseTable";
import CollapsableTable from "./collapsableTable";

const columns = [
  { name: "company_name", label: "Company name" },
  { name: "call_ir", label: "Call IR" },
  { name: "put_ir", label: "Put IR" },
  { name: "cp_ratio", label: "CP ratio" },
  { name: "action", label: "See More" },
];

const options = {
  filterType: "none",
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const CallPutMain = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));

  console.log(date);
  const [monthInput, setMonthInput] = useState(100);
  const [strikeInput, setStrikeInput] = useState(10);
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMoreDetails, setShowMoreDetails] = useState({
    show: false,
    data: {},
  });
  const [callRange, setCallRange] = useState([0.5, 20]);
  const [putRange, setputRange] = useState([0.5, 50]);
  const [CPRange, setCPRange] = useState([0.5, 20]);

  const [apiResponse, setAPIResponse] = useState({});

  //Call put collapsable table data
  //   const rows = [
  //     createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
  //     createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
  //     createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
  //     createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
  //     createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
  //   ];

  console.log("Companies List", companies);

  const handleShowMore = (key, value) => {
    setShowMoreDetails({ show: true, data: { key: key, value: { ...value } } });
  };

  const handleCallRangeChange = (e, value) => {
    setCallRange(value);
  };
  const handlePutRangeChange = (e, value) => {
    setputRange(value);
  };
  const handleCPRangeChange = (e, value) => {
    setCPRange(value);
  };

  const handleCloseModal = () => {
    setShowMoreDetails({
      show: false,
      data: {},
    });
  };

  //   const body =
  //         {
  //           "month":"${monthInput}",
  //           "strike_percent":"${strikeInput}",
  //           "date":"${date}",
  //           "call_value":"${callRange[0]}_${callRange[1]}",
  //           "put_value":"${putRange[0]}_${putRange[1]}",
  //           "cp_value":"${CPRange[0]}_${CPRange[1]}"
  //       };

  const options = JSON.stringify({
    month: "100",
    strike_percent: "20",
    date: "2021-12-13",
    call_value: "0.5_20.0",
    put_value: "0.5_50.0",
    cp_value: "0.5_20.0",
  });

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: options,
    redirect: "follow",
  };

  const fetchData = () => {
    setLoading(true);
    fetch("http://dharm.ga/hello/calc", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setAPIResponse(result);
        setLoading(false);
      })
      .catch((error) => console.log("error", error));
  };

  const getData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`http://dharm.ga/hello/total`, {
        method: "POST",
        body: options,

        headers: {
          "Content-Type": "application/json",
        },
      });
      let json = await res.text();
      json = json.replace(/\bNaN\b/g, null);
      json = json.replace(/\bInfinity\b/g, null);
      console.log(json);
      setAPIResponse(json);
      let jsonOP = JSON.parse(json);
      let op = [];
      Object.entries(jsonOP).map(([key, value]) => {
        let value2 = value["total"];
        op.push({
          company_name: key,
          call_ir: value2[0] ? value2[0].toFixed(2) : "-",
          put_ir: value2[1] ? value2[1].toFixed(2) : "-",
          cp_ratio: value2[2] ? value2[2].toFixed(2) : "-",
          action: (
            <button
              class="btn btn-outline-success"
              onClick={() => {
                handleShowMore(key, value);
              }}
            >
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          ),
        });
        return "";
      });
      setCompanies(op);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const handleExpiration = (e) => {
    setMonthInput(e.target.value);
  };

  const handleStrikeChange = (e) => {
    setStrikeInput(e.target.value);
  };

  const handleSubmit = () => {
    // getData();
    fetchData();
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () => {});

    return <span onClick={decoratedOnClick}>{children}</span>;
  };

  // useEffect(() => {
  //   getData()
  // }, [])

  //   useEffect(() => {
  //       fetchData();
  //   }, []);

  return (
    <div className="main">
      <section className="company_details">
        <div className="container">
          <div className="row">
            {showMoreDetails.show
              ? createPortal(
                  <Modal
                    open={showMoreDetails.show}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    style={{ overflow: "scroll" }}
                  >
                    <div>
                      <Box sx={{ ...style, width: 800 }}>
                        <div
                          style={{}}
                          class="text-end"
                          style={{ cursor: "pointer" }}
                        >
                          <i
                            class="fas fa-times"
                            onClick={handleCloseModal}
                          ></i>
                        </div>
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          {`${showMoreDetails.data["key"]}`}
                        </Typography>
                        <div class="table-responsive shadow-lg p-3 my-3">
                          <table class="table">
                            <thead>
                              <tr>
                                <td scope="col">Rolling Value</td>
                                <td scope="col">Call IR</td>
                                <td scope="col">Put IR</td>
                                <td scope="col">CP Ratio</td>
                              </tr>
                            </thead>
                            <tbody>
                              {Object.entries(
                                showMoreDetails.data["value"]
                              ).map(([key, value]) => {
                                return (
                                  <tr>
                                    <td>{key}</td>
                                    <td>{value[0].toFixed(2)}</td>
                                    <td>{value[1].toFixed(2)}</td>
                                    <td>{value[2].toFixed(2)}</td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                        <div>
                          <button
                            onClick={handleCloseModal}
                            class="btn btn-danger"
                          >
                            Close
                          </button>
                        </div>
                      </Box>
                    </div>
                  </Modal>,
                  document.getElementById("loading_modal")
                )
              : null}

            <div className="col-12">
              <div
                className="card flex-wrap d-flex flex-row justify-content-between my-2"
                style={{ overflow: "auto" }}
              >
                <div class=" card d-flex flex-row flex-wrap align-items-center justify-content-between w-100 p-4">
                  <p className="my-auto fw-bolder">Expiration</p>
                  <input
                    type="number"
                    value={monthInput}
                    onChange={handleExpiration}
                    className="mx-2 form-control my-auto "
                    style={{ width: "100px" }}
                  />
                  {/* </div> */}
                  {/* <div className='my-2 card d-flex flex-row mx-2 justify-content-between align-items-center'> */}
                  <p className="my-auto mx-2 fw-bolder">Strike</p>
                  <div class="d-flex flex-column align-items-start p-3">
                    <label for="myinputRange" class="form-label mx-2 my-0 mt-2">
                      {strikeInput}
                    </label>
                    <Slider
                      aria-label="Strike"
                      value={strikeInput}
                      onChange={handleStrikeChange}
                      sx={{
                        color: "#0f062b",
                      }}
                      min={0}
                      max={100}
                      id="myinputRange"
                      style={{ width: "100px" }}
                    />
                    {/* <input
                      type='range'
                      id='myinputRange'
                      className='mx-2 form-range w-75'
                      value={strikeInput}
                      onChange={handleStrikeChange}
                      min={1}
                      max={100}
                    /> */}
                  </div>
                  {/* </div> */}
                  {/* <div className='my-2 card d-flex flex-row justify-content-between align-items-center mx-2'> */}
                  <p className="my-auto mx-2 fw-bolder">Data Date</p>
                  <input
                    type="date"
                    className="mx-2 form-control my-auto w-auto"
                    value={date}
                    onChange={handleDateChange}
                  />
                </div>
              </div>

              <div
                className="flex-wrap d-flex flex-row justify-content-between my-2 card"
                style={{ overflow: "auto" }}
              >
                <div class=" card d-flex flex-row flex-wrap align-items-center justify-content-between w-100 p-4">
                  {/* <div className='my-2 card d-flex flex-row justify-content-center align-items-center'> */}

                  {/* </div> */}
                  <Box sx={{ width: 150 }} className="mx-2 ">
                    <p className="mx-2 my-auto fw-bolder">Call Range</p>
                    <Slider
                      step={0.5}
                      value={callRange}
                      sx={{
                        color: "#0f062b",
                      }}
                      onChange={handleCallRangeChange}
                      valueLabelDisplay="auto"
                      disableSwap
                      className="mx-3"
                    />
                    <div className="d-flex justify-content-between">
                      <p className="my-auto">{callRange[0]}</p>
                      <p className="my-auto">{callRange[1]}</p>
                    </div>
                  </Box>

                  <Box sx={{ width: 150 }} className="mx-2">
                    <p className="my-auto mx-2 fw-bolder">Put Range</p>
                    <Slider
                      getAriaLabel={() => "Minimum distance"}
                      step={0.5}
                      value={putRange}
                      sx={{
                        color: "#0f062b",
                      }}
                      valueLabelDisplay="auto"
                      onChange={handlePutRangeChange}
                      disableSwap
                    />
                    <div className="d-flex justify-content-between">
                      <p className="my-auto">{putRange[0]}</p>
                      <p className="my-auto">{putRange[1]}</p>
                    </div>
                  </Box>

                  <Box sx={{ width: 150 }} className="mx-2">
                    <p className="my-auto mx-2 fw-bolder">CP Range</p>
                    <Slider
                      getAriaLabel={() => "Minimum distance"}
                      step={0.5}
                      value={CPRange}
                      sx={{
                        color: "#0f062b",
                      }}
                      valueLabelDisplay="auto"
                      onChange={handleCPRangeChange}
                      disableSwap
                    />
                    <div className="d-flex justify-content-between">
                      <p className="my-auto">{CPRange[0]}</p>
                      <p className="my-auto">{CPRange[1]}</p>
                    </div>
                  </Box>

                  {/* <div className='my-2 d-flex flex-row justify-content-between align-items-center mx-2'> */}
                  <button
                    className="my_button my-auto w-auto"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
                {/* </div> */}
              </div>
              {loading ? (
                <div class="d-flex justify-content-center align-items-center">
                  <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                // <ThemeProvider theme={theme}>
                //   <MUIDataTable
                //     data={companies}
                //     columns={columns}
                //     options={{ selectableRows: true }}
                //     className="my-2"
                //   />
                // </ThemeProvider>

                <CollapsableTable data={apiResponse} />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallPutMain;
