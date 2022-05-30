import { Services } from '../../services/apiService'


export const getHistoricalPrices = async (symbol,range) =>{
    var {data} = await Services.get(`/stock/historicalPrices?symbol=${symbol}&range=${range}`,)
    return data
}
export const getintradayprices = async (symbol) =>{
    var {data} = await Services.get(`/stock/intradayprices?symbol=${symbol}`,)
    return data
}

export const getTopCompetitors = async (symbol) =>{
    var {data} = await Services.get(`/stock/peers?symbol=${symbol}`,)
    return data
}

export const getNewsBySymbol = async (symbol) =>{
    var {data} = await Services.get(`/stock/news?symbol=${symbol}`,)
    return data
}

export const getCompanyLogo = async (symbol) => {
  var { data } = await Services.get(`/stock/logo?symbol=${symbol}`);
  return data;
};