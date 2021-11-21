import React from 'react'
import MainContent from './MainContent/MainContent'
import SidebarLeft from './SidebarLeft/SidebarLeft'

const SymbolPage = () => {
    return (
        <div className='main'>
            <section className='company_details'>
                <div className='container'>
                <div className='row'>
                    <SidebarLeft />
                    <MainContent />
                </div>
                </div>
            </section>
        </div>
    )
}

export default SymbolPage
