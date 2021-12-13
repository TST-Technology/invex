const options = {
  loop: true,
  margin: 70,
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
      items: 3,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 4,
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

const midTableCols = [
  {
    name: "CommonStrike",
    label: "Strike",
  },
  {
    name: "CpRatio",
    label: "CP Ratio",
  },
];

export { options, columns, midTableCols };
