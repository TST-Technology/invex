import { CircularProgress } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getCompanyDataBySymbol, getBookKeyStatus } from '../api/company'
import MainContent from './MainContent/MainContent'
import SidebarLeft from './SidebarLeft/SidebarLeft'

const SymbolPage = (props) => {
    const [params] = useSearchParams();
    const [Company, setCompany] = useState(null)
    const [KeyStatus, setKeyStatus] = useState(null)
    const [Loading, setLoading] = useState(false)

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
            }
        })()
    }, [params])

    console.log('KeyStatus', KeyStatus);

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
                        <MainContent Company={Company} />
                    </div>}
                </div>
            </section>
        </div>
    )
}

export default SymbolPage
