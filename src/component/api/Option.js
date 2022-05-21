import { Services } from '../../services/apiService';

export const getVolatality = async (symbol, date) => {
  var { data } = await Services.get(
    `/option/quote?symbol=${symbol}&date=${date}`
  );
  return data;
};
