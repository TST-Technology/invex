import React , {useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getVolatality } from '../../api/Option'
import data from '../dummy'

const Volatility = ({Company}) => {
    const {symbol} = useParams()
    const [VolatilityData , setVolatilityData] = useState([])
    const [Loading , setLoading] = useState(false)
    // useEffect(() => {
    //     (async()=>{
    //         setLoading(true)
    //         if(1){
    //             var res = data
    //             console.log(res)
    //             if(1){
    //                 setVolatilityData(res)
    //             }
    //             setLoading(false)
    //         }
    //     })()
    // }, [])

    // console.log(data);
  return (
    <div className="row mb-5">
    <div className="col-lg-6">
        <div className="table-responsive">
            <h6 className="m-0 mb-2"><strong>Volatility</strong></h6>
            <table className="table table-bordered border-0 m-0 mb-3 most_tables">
                <tbody>
               
                <tr className="border-0">
                        <td>IV30</td>
                        <td>{data.Volatility.IV30}</td>
                        <td><b>IV60</b></td>
                        <td>{data.Volatility.IV60}</td>
                        <td><b>IV90</b></td>
                        <td>{data.Volatility.IV90}</td>
                    </tr>
                   
                </tbody>
            </table>
            <h6 className="m-0 mb-2"><strong>52 Weeks Rnge</strong></h6>
            <table className="table table-bordered border-0 m-0 most_tables">
                <tbody>
                    <tr className="border-0">
                        <td>IV30</td>
                        <td>{data['52_Week_Range'].IV30.Low} (L) - {data['52_Week_Range'].IV30.High}(H)</td>
                        <td><b>100th Percentile</b></td>
                    </tr>
                    <tr className="border-0">
                        <td>HV30</td>
                        <td>{data['52_Week_Range'].HV30.Low} (L) - {data['52_Week_Range'].HV30.High} (H)</td>
                        <td><b>52th Percentile</b></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div className="col-lg-6">
        <img src={require("../../Common/Images/options-aapl-1.png").default} className="img-fluid" alt="options" />
    </div>
</div>
  )
}

export default Volatility