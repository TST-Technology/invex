import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { getCompanyDataBySymbol } from '../api/commonApi';
import { getFinancialStatistics } from '../api/financialStatistics';
import Content from './content'
import Sidebar from './sidebar'

const FinancialShareInfo = () => {
    const [Statisticss, setStatistics] = useState(null)
    const [params] = useSearchParams();
    const [Company, setCompany] = useState(null)

    useEffect(() => {
        (async () => {
            if (params.get('symbol')) {
                var data = await getFinancialStatistics(params.get('symbol'))
                console.log('data',data);
                if (data && data.data && data.status === 200) {
                    setStatistics(data.data[0])
                }
                var res = await getCompanyDataBySymbol(params.get('symbol'))
                if (res && res.status === 200) {
                    setCompany(res?.data)
                } else {
                    setCompany(null)
                }

            }
        })()
    }, [params.get('symbol')])

    return (
        <section className="company_details">
            <div className="container">
                <div className="row">
                    <Sidebar Company={Company} />
                    <div className="col-lg-8">
                        <Content Statisticss={Statisticss} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FinancialShareInfo