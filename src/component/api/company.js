import { Services } from '../../services/apiService'

export const getCompanyDataBySymbol = async (symbol) =>{
    var {data} = await Services.get(`/stock/company?symbol=${symbol}`,)
    return data
}

export const getBookKeyStatus = async (symbol) =>{
    var {data} = await Services.get(`/stock/book?symbol=${symbol}`,)
    return data
}

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