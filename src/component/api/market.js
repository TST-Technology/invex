import { Services } from '../../services/apiService'

export const getIexVolume = async () =>{
    var {data} = await Services.get('/stock/list/iexvolume')
    return data
}

export const getIexPercent = async () =>{
    var {data} = await Services.get('/stock/list/iexpercent')
    return data
}

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