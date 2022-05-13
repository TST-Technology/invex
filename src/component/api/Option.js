import { Service } from '../../services/apiService'

export const getVolatality = async (symbol ,  date) =>{
    var {data} = await Service.get(`/option/quote?symbol=${symbol}&date=${date}`,)
    return data
}