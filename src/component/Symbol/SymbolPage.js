import { CircularProgress } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getCompanyDataBySymbol, getBookKeyStatus, getNewsBySymbol } from '../api/company'
import { getFinancialdividend } from '../api/financialStatistics'
import MainContent from './MainContent/MainContent'
import SidebarLeft from './SidebarLeft/SidebarLeft'

const SymbolPage = (props) => {
    const [params] = useSearchParams();
    const [Company, setCompany] = useState(null)
    const [KeyStatus, setKeyStatus] = useState(null)
    const [Loading, setLoading] = useState(false)
    const [DividendData, setDividendData] = useState(false)
    const [NewsData, setNewsData] = useState(null)

    useEffect(() => {
        (async () => {
            setLoading(true)
            if (params.get('symbol')) {
                var data = await getCompanyDataBySymbol(params.get('symbol'))
                if (data && data.status === 200) {
                    setCompany(data?.data)
                }else {
                    setCompany(null)
                }
                var res = await getBookKeyStatus(params.get('symbol'))
                if (res && res?.status === 200) {
                    setKeyStatus(res?.data?.quote)
                }
                setLoading(false)

                var dividend = await getFinancialdividend(params.get('symbol'))
                if(dividend && dividend?.status == 200){
                    setDividendData(dividend?.data)
                }

                var news = await getNewsBySymbol(params.get('symbol'))
                if(news && news?.status == 200){
                    setNewsData(news?.data)
                }
                
            }
        })()
    }, [params])


    return (
        <div className='main'>


            <section className='company_details'>
                <div className='container'>
                    {Loading && <div style={{
                        height: 500, textAlign: 'center', display: 'flex',
                        alignItems: 'center', justifyContent: 'center'
                    }}>
                        <CircularProgress />
                    </div>}
                    {!Loading && <div className='row'>
                        <SidebarLeft Company={Company} KeyStatus={KeyStatus} />
                        <MainContent 
                            Company={Company} 
                            KeyStatus={KeyStatus} 
                            DividendData={DividendData}
                            NewsData={NewsData}
                        />
                    </div>}
                </div>
            </section>
        </div>
    )
}

export default SymbolPage
