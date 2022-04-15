import { Services } from '../../services/apiService'

export const getBalanceSheet = async (symbol,period,last) =>{
    var {data} = await Services.get(`/stock/financialbs?symbol=${symbol}&period=${period}&last=${last}`,)
    return data
}