import { Services } from '../../services/apiService'

export const getAllSectors = async () =>{
    var {data} = await Services.get('/sector/detail',)
    return data
}

export const getAllsectorDefination = async () =>{
    var {data} = await Services.get('/sector/defination',)
    return data
}

export const getAllSectorsOverview = async () =>{
    var {data} = await Services.get('/sector/overview/all',)
    return data
}

export const getSectorWiseDefination = async (id) =>{
    var {data} = await Services.get(`/sector/defination/2`,)
    return data
}

export const getAllSectorsById = async (id) =>{
    var {data} = await Services.get(`/sector/overview/${id}`,)
    return data
}

export const getIndustryWiseDefination = async (id) =>{
    var {data} = await Services.get(`/sector/industry/defination/1`,)
    return data
}

export const getAllIndustryById = async (id) =>{
    var {data} = await Services.get(`/sector/industry/overview/${id}`,)
    return data
}