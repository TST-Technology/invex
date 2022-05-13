import { Services } from '../../services/apiService'

export const getCompanyDataBySymbol = async (symbol) =>{
    var {data} = await Services.get(`/stock/company?symbol=${symbol}`,)
    return data
}

export const getBookKeyStatus = async (symbol) =>{
    var {data} = await Services.get(`/stock/book?symbol=${symbol}`,)
    return data
}

export const getCompanyDataByAAPL = async () =>{
    var {data} = await Services.get(`/stock/company?symbol=AAPL`,)
    return data
}

export const getBookKeyAAPL = async () =>{
    var {data} = await Services.get(`/stock/book?symbol=AAPL`,)
    return data
}

export const getCompanyDataBySymbolz = async (symbol,date) =>{
    var {data} = await Services.get(`/stock/company?symbol=${symbol}?date=${date}`,)
    return data
}

export const getBookKeyStatusz = async (symbol,date) =>{
    var {data} = await Services.get(`/stock/book?symbol=${symbol}?date=${date}`,)
    return data
}