import React, { useState } from 'react'
import { getAllSectorsOverview } from '../api/sectors';
import SectorsContent from './content'
import SectorsList from './SectorsLits'

const Sectors = () => {

    const [sectorId ,  setSectorId] = useState(null);
    const [industryId ,  setIndustryId] = useState(null);
    const [isLoading ,  setisLoading] = useState(false);
    const [ChartData, setChartData] = useState([])

    const getAllSectorsData = async () =>{
        setisLoading(true)
        setSectorId(null)
        setIndustryId(null)

        // var res = await getAllSectorsOverview();
        // if (res && res?.status === 200 && res?.data) {
        //     let temp = []
        //     for (let data of res.data.Sector) {
        //         let obj = {
        //             name: data.name,
        //             value: data.totalSectorCap
        //         }
        //         temp.push(obj)
        //     }
        //     setChartData(temp)
        // }
        setisLoading(false)
    }
    return (
        <div className="main">
            <section className="sectors_sec">
                <div className="container">
                    <div className="row">
                        <SectorsList 
                            getAllSectorsData={getAllSectorsData}
                            setSectorId={setSectorId} 
                            setIndustryId={setIndustryId}
                        />
                        <SectorsContent 
                            ChartData={ChartData}
                            setChartData={setChartData}
                            getAllSectorsData={getAllSectorsData}
                            sectorId={sectorId} 
                            industryId={industryId} 
                            isLoading={isLoading} 
                            setisLoading={setisLoading}
                            setSectorId={setSectorId} 
                            setIndustryId={setIndustryId}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sectors