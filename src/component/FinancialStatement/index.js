import React from 'react'
import Content from './content'
import Sidebar from './sidebar'
const FinancialStatement = () => {
    return (
        <section class="company_details">
            <div class="container">
                <div class="row">
                        <Sidebar/>
                    <div class="col-lg-8">
                        <Content/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FinancialStatement