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
