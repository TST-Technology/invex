import { Services } from '../../services/apiService'

export const getFinancialStatement = async (symbol) =>{
    var {data} = await Services.get(`/stock/stats?symbol=${symbol}`)
    return data
}