import { Services } from '../../services/apiService'

export const getAllSectors = async () =>{
    var {data} = await Services.get('/sector/detail',)
    return data
}

export const getAllSectorsOverview = async () =>{
    var {data} = await Services.get('/sector/overview/all',)
    return data
}

export const getAllSectorsById = async (id) =>{
    var {data} = await Services.get(`/sector/overview/${id}`,)
    return data
}

export const getAllIndustryById = async (id) =>{
    var {data} = await Services.get(`/sector/industry/overview/${id}`,)
    return data
}