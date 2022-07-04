import { Services } from '../../services/apiService'

export const getAllSectors = async () =>{
    var {data} = await Services.get('/sector/detail',)
    return data
}

export const getSectors = async () => {
    var {data} = await Services.get('/sector',)
    return data
}

export const getIndustry = async () => {
    var {data} = await Services.get('/sector/detail ',)
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
    var {data} = await Services.get(`/sector/defination/${id}`,)
    return data
}

export const getAllSectorsById = async (id) =>{
    var {data} = await Services.get(`/sector/overview/${id}`,)
    return data
}

export const getIndustryWiseDefination = async (id) =>{
    var {data} = await Services.get(`/sector/industry/defination/${id}`,)
    return data
}

export const getAllIndustryById = async (id) =>{
    var {data} = await Services.get(`/sector/industry/overview/${id}`,)
    return data
}

export const getSectorETF = async (id) =>{
    var {data} = await Services.get(`/sector/etfdata/${id}`,)
    return data
}

export const getIndustryETF = async (id) =>{
    var {data} = await Services.get(`/sector/industry/etfdata/2`,)
    return data
}

export const getParticularIndustryETF = async (id) =>{
    var {data} = await Services.get(`/sector/industry/top10etfdata/${id}`,)
    return data
}

export const getSectorAndIndustryBySymbol = async (product) => {
  var { data } = await Services.get(`/sector/sectorandindustry/${product}`);
  //   var { data } = await Services.get(`/sector/sectorandindustry/tu`);
  return data;
};;; 