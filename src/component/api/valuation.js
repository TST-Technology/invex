import { ValuationService } from '../../services/apiService';

export const getValuationData = async (symbol) => {
  var { data } = await ValuationService.get(`/valuation?symbol=${symbol}`);
  return data;
};
