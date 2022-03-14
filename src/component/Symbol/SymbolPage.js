import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getCompanyDataBySymbol } from '../api/company'
import MainContent from './MainContent/MainContent'
import SidebarLeft from './SidebarLeft/SidebarLeft'

const SymbolPage = (props) => {
    const [params] = useSearchParams();
    const [Company , setCompany] = useState(null)
    
    useEffect(()=>{
        (async()=>{
            try {
                if(params.get('symbol')){
                    var data = await getCompanyDataBySymbol(params.get('symbol'))
                    if(data && data.status === 200){
                        setCompany(data?.data)
                    }
                }
            } catch (error) {
                setCompany(null)
            }
        })()
    },[params])
    console.log('Company',Company);
    return (
        <div className='main'>
            <section className='company_details'>
                <div className='container'>
                <div className='row'>
                    <SidebarLeft Company={Company}/>
                    <MainContent Company={Company}/>
                </div>
                </div>
            </section>
        </div>
    )
}

export default SymbolPage
