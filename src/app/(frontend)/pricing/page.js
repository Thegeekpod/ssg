import Link from 'next/link'
import React from 'react'

const Pricing = () => {
  return (
    <div id="content" className="site-content">
    <div className="page-header flex-middle">
      <div className="container">
        <div className="inner flex-middle">
          <h1 className="page-title">Pricing Plans</h1>
          <ul id="breadcrumbs" className="breadcrumbs none-style">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
             <Link href="/pricing">Pricing</Link>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
    <section className="service-pricing">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="ot-heading">
          <span>{'// '}choose your plan</span>
          <h2 className="main-heading">Flexible Pricing Plans</h2>
        </div>
        <div className="space-5" />
        <p>
          We help businesses elevate their value through custom software
          development,
          <br />
          product design, QA and consultancy services.
        </p>
        <div className="space-20" />
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
        <div className="ot-pricing-table">
          <div className="icon-main">
            <span className="flaticon-tablet" />
          </div>
          <div className="inner-table">
            <h4 className="title-table">Basic Plan</h4>
            <h2>
              <sup>$</sup> 129.99
            </h2>
            <span>Monthly Package</span>
            <div className="details ">
              <ul>
                <li className="active">Web Counsulting</li>
                <li className="active">24/7 System Monitoring</li>
                <li className="active">Machine and Deep Learning</li>
                <li>Data Quality Management</li>
                <li>Security Management</li>
              </ul>
            </div>
            <a href="#" className="octf-btn">
              Choose Plane
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
        <div className="ot-pricing-table">
          <div className="icon-main">
            <span className="flaticon-report" />
          </div>
          <div className="inner-table">
            <h4 className="title-table">Economy Plan</h4>
            <h2>
              <sup>$</sup> 159.99
            </h2>
            <span>Monthly Package</span>
            <div className="details ">
              <ul>
                <li className="active">Web Counsulting</li>
                <li className="active">24/7 System Monitoring</li>
                <li className="active">Machine and Deep Learning</li>
                <li className="active">Data Quality Management</li>
                <li>Security Management</li>
              </ul>
            </div>
            <a href="#" className="octf-btn">
              Choose Plane
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="ot-pricing-table">
          <div className="icon-main">
            <span className="flaticon-ui" />
          </div>
          <div className="inner-table">
            <h4 className="title-table">Premium Plan</h4>
            <h2>
              <sup>$</sup> 189.99
            </h2>
            <span>Monthly Package</span>
            <div className="details ">
              <ul>
                <li className="active">Web Counsulting</li>
                <li className="active">24/7 System Monitoring</li>
                <li className="active">Machine and Deep Learning</li>
                <li className="active">Data Quality Management</li>
                <li className="active">Security Management</li>
              </ul>
            </div>
            <a href="#" className="octf-btn">
              Choose Plane
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



  </div>
   
  )
}

export default Pricing