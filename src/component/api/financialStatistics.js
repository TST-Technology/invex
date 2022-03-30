import { Services } from '../../services/apiService'

export const getFinancialStatistics = async (symbol) =>{
    var {data} = await Services.get(`/stock/stats?symbol=${symbol}`)
    return data
}

export const getFinancialdividend = async (symbol) =>{
    var {data} = await Services.get(`/stock/dividend?symbol=${symbol}`)
    return data
}

export const getFinancialPastdividend = async (symbol) =>{
    var {data} = await Services.get(`/stock/pastdividends?symbol=${symbol}`)
    return data
}