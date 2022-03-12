import { Services } from '../../services/apiService'

export const getMostActiveStacks = async () =>{
    var { data } = await Services.get('/stock/list/mostactive')
    return data
}

export const getMarketGainers = async () =>{
    var {data} = await Services.get('/stock/list/gainers')
    return data
}

export const getMarketLoosers = async () =>{
    var {data} = await Services.get('/stock/list/losers')
    return data
}