import { ServiceCP1V2 } from '../../services/apiService';

export const getCompanyProfileQuote = async (param) => {
  var { data } = await ServiceCP1V2.get(`/company-profile-quote`, {
    params: param,
  });
  return data;
};

export const getCompanyStockPeers = async (param) => {
  var { data } = await ServiceCP1V2.get(`/stock-peers`, {
    params: param,
  });
  return data;
};

export const getHistoricalPriceChart = async (param) => {
  var { data } = await ServiceCP1V2.get(`/historical-price-chart`, {
    params: param,
  });
  return data;
};

export const getStockDividend = async (param) => {
  var { data } = await ServiceCP1V2.get(`/stock-dividend`, {
    params: param,
  });
  return data;
};

export const getEarnings = async (param) => {
  var { data } = await ServiceCP1V2.get(`/earnings`, {
    params: param,
  });
  return data;
};

export const getStockMarketActives = async () => {
  var { data } = await ServiceCP1V2.get(`/stock-market-actives`);
  return data;
};


export const getSynopsisCompanyNews = async (param) => {
  var { data } = await ServiceCP1V2.get(`/company-news`, {
    params: param,
  });
  return data;
};

export const getHeaderMarqueeDetails = async (param) => {
  var { data } = await ServiceCP1V2.get(`/header2`, {
    params: param,
  });
  return data;
};

export const getStockPriceChange = async (param) => {
  var { data } = await ServiceCP1V2.get(`/stock-price-change`, {
    params: param,
  });
  return data;
};

export const getSearchResult = async (param) => {
  var { data } = await ServiceCP1V2.get(`/search`, {
    params: param,
  });
  return data;
};




