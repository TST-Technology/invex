import { Services } from '../../services/apiService'

export const getAllSectors = async () =>{
    var {data} = await Services.get('/sector/detail',)
    return data
}