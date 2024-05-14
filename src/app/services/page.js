import Services from '@/component/Services'
import Link from 'next/link'
import React from 'react'

const ServicesPage = () => {
    return (
        <div id="content" className="site-content">
            <div className="page-header flex-middle">
                <div className="container">
                    <div className="inner flex-middle">
                        <h1 className="page-title">Our Services</h1>
                        <ul id="breadcrumbs" className="breadcrumbs none-style">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                               <Link href="/services">Services</Link>
                            </li>
                            <li className="active">Our Services
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="space-55" />
            <div className='container'>
            <div className='row'>
            <Services/>
            </div>

            </div>
            
            <div className="space-55" />
        </div >
    )
}

export default ServicesPage