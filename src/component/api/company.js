import { Services } from '../../services/apiService'

export const getCompanyDataBySymbol = async (symbol) =>{
    var {data} = await Services.get(`/stock/company?symbol=${symbol}`,)
    return data
}