import { Services } from '../../services/apiService'

export const getSearchdata = async (keyword) =>{
    var {data} = await Services.get(`/stock/search?keyword=${keyword}`,)
    return data
}