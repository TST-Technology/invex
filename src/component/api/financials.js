import { Services, ServiceCP1V2 } from '../../services/apiService';

export const getBalanceSheet = async (symbol, period, last) => {
  var { data } = await Services.get(
    `/stock/financialbs?symbol=${symbol}&period=${period}&last=${last}`
  );
  return data;
};
export const getIncomeStatemants = async (symbol, period, last) => {
  var { data } = await Services.get(
    `/stock/financialis?symbol=${symbol}&period=${period}&last=${last}`
  );
  return data;
};
export const getCashFlow = async (symbol, period, last) => {
  var { data } = await Services.get(
    `/stock/financialcf?symbol=${symbol}&period=${period}&last=${last}`
  );
  return data;
};

export const getFinancialStats = async (symbol, period, last) => {
  var { data } = await Services.get(
    `/stock/fundamentalvaluations?symbol=${symbol}&period=${period}&last=${last}`
  );
  return data;
};

export const getBalanceSheetV2 = async (param) => {
  var { data } = await ServiceCP1V2.get(`/balance-sheet`, { params: param });
  return data;
};

export const getIncomeStatementsV2 = async (param) => {
  var { data } = await ServiceCP1V2.get(`/income-statement`, { params: param });
  return data;
};

export const getCashFlowV2 = async (param) => {
  var { data } = await ServiceCP1V2.get(`/cash-flow`, { params: param });
  return data;
};
