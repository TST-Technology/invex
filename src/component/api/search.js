import { Services } from '../../services/apiService'

export const getSearchdata = async (keyword) =>{
    var {data} = await Services.get(`/stock/search?keyword=${keyword}`,)
    return data
}

export const getFinancialPerformance = async (symbol) => {
  var { data } = await Services.get(
    `/stock/financialperformance?symbol=${symbol}`
  );
  return data;
};