var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  symbol_value: "BAL",
  stepsize: 0.25,
  month: 300,
  Strike_percentage: 10,
  startdate: "2019-01-01",
  enddate: "2021-01-01",
  datadate: "2021-12-01",
});

var requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

const fetchData = () => {
  fetch("http://dharm.ga/hello/calc", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log("JSON DATA FETCHED", result))
    .catch((error) => console.log("error", error));
};

export default fetchData;
