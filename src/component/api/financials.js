import { Services } from '../../services/apiService'

export const getBalanceSheet = async (symbol,period,last) =>{
    var {data} = await Services.get(`/stock/financialbs?symbol=${symbol}&period=${period}&last=${last}`,)
    return data
}
export const getIncomeStatemants = async (symbol,period,last) =>{
    var {data} = await Services.get(`/stock/financialis?symbol=${symbol}&period=${period}&last=${last}`,)
    return data
}
export const getCashFlow = async (symbol,period,last) =>{
    var {data} = await Services.get(`/stock/financialcf?symbol=${symbol}&period=${period}&last=${last}`,)
    return data
}