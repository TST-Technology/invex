import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getVolatality } from '../../api/Option'
const CompanyData = ({ Company, KeyStatus }) => {
    const {symbol} = useParams()   
    const [date , setdate] = useState('2022/05/11')
    useEffect(() => {
        (async()=>{
            // setLoading(true)
            if(symbol){
                console.log('ddd')
                var res = await getVolatality(symbol ,date)
                if(res && res.status === 200 && res?.data?.length > 0){
                    
                }
                // setLoading(false)
            }
        })()
    }, [symbol,date])
    return (
        <>
            <div className="logo me-5">
                <div className="img">
                    <img src={require("../../Common/Images/image1.png").default} alt="image" />
                </div>
                <div className="title1">
                    <h5 className="card-title">{Company?.companyName} </h5>
                    <p className="company">{Company?.symbol}</p>
                </div>
            </div>
            <div className="chart">
                <div className="chart-text mt-0">
                    <p className="card-text up">${KeyStatus?.latestPrice}</p>
                    <p className="text up">
                        {KeyStatus?.change > 0 ? <>{KeyStatus?.change}</> : <> {KeyStatus?.change}</>} ({KeyStatus?.changePercent}%)
                    </p>
                </div>
            </div>
            <div className="chart-img me-5">
                <img src={require("../../Common/Images/graph.png").default} alt="graph" />
            </div>
        </>
    )
}

export default CompanyData