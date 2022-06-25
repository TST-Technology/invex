import { ValuationService, Services } from '../../services/apiService';

export const getMacroEconomicsData = async () => {
  var { data } = await ValuationService.get('/macroeconomics');
  return data;
};

export const getMacroEconomicsChartData = async (param) => {
  var { data } = await Services.get(`/macroeconomics${param}`);
  return data;
};
