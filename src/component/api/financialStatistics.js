import { Services, ServiceCP1V2 } from '../../services/apiService';

//Share Info
export const getFinancialStatistics = async (symbol) => {
  var { data } = await Services.get(`/stock/stats?symbol=${symbol}`);
  return data;
};

export const getFinancialdividend = async (symbol) => {
  var { data } = await Services.get(`/stock/dividend?symbol=${symbol}`);
  return data;
};

export const getFinancialPastdividend = async (symbol) => {
  var { data } = await Services.get(`/stock/pastdividends?symbol=${symbol}`);
  return data;
};

export const getFinancialStats = async (symbol, period, last) => {
  var { data } = await Services.get(
    `/stock/fundamentalvaluations?symbol=${symbol}&period=${period}&last=${last}`
  );
  return data;
};

export const getFinancialStatisticsV2 = async (param) => {
  var { data } = await ServiceCP1V2.get(`/statistics`, { params: param });
  return data;
};
