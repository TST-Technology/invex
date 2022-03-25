import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { getCompanyDataBySymbol } from '../api/company';
import { getFinancialStatement } from '../api/financialStatement';
import Content from './content'
import Sidebar from './sidebar'
const FinancialStatement = () => {
    const [Statements , setStatements] = useState(null)
    const [params] = useSearchParams();
    const [Company, setCompany] = useState(null)

    useEffect(() => {
        (async()=>{
            if(params.get('symbol')){
                var data = await getFinancialStatement(params.get('symbol'))
                if(data && data.data && data.status === 200){
                    setStatements(data.data[0])
                }
                var res = await getCompanyDataBySymbol(params.get('symbol'))
                if (res && res.status === 200) {
                    setCompany(res?.data)
                }else {
                    setCompany(null)
                }
            }
        })()
    }, [params.get('symbol')])
    console.log('Company',Company);
    return (
        <section class="company_details">
            <div class="container">
                <div class="row">
                        <Sidebar Company={Company}/>
                    <div class="col-lg-8">
                        <Content Statements={Statements}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FinancialStatement