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
          <span>choose your plan</span>
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
    <div className="col-lg-4 col-md-6 mb-4 mb-lg-4">
    <div className="ot-pricing-table">
        <div className="icon-main">
            <span className="flaticon-tablet" />
        </div>
        <div className="inner-table">
            <h4 className="title-table">Digital <br/>Marketing</h4>
            <h2>
                <sup>$</sup> 150 
            </h2>
            <span>Monthly Package</span>
            <div className="details">
                <ul>
                    <li className="active">SEO Optimization</li>
                    <li className="active">Social Media Management</li>
                    <li className="active">Content Creation</li>
                    <li className="active">Email Marketing Campaigns</li>
                </ul>
            </div>
            <a href="#" className="octf-btn">
                Choose Plan
            </a>
        </div>
    </div>
</div>

<div className="col-lg-4 col-md-6 mb-4 mb-lg-4">
    <div className="ot-pricing-table">
        <div className="icon-main">
            <span className="flaticon-laptop" />
        </div>
        <div className="inner-table">
            <h4 className="title-table">Website Development</h4>
            <h2>
                <sup>$</sup> 199.99
            </h2>
            <span>Monthly Package</span>
            <div className="details">
                <ul>
                    <li className="active">Responsive Design</li>
                    <li className="active">Custom Development</li>
                    <li className="active">SEO Friendly</li>
                    <li className="active">Maintenance & Support</li>
                </ul>
            </div>
            <a href="#" className="octf-btn">
                Choose Plan
            </a>
        </div>
    </div>
</div>

<div className="col-lg-4 col-md-6 mb-4 mb-lg-4">
    <div className="ot-pricing-table">
        <div className="icon-main">
            <span className="flaticon-smartphone" />
        </div>
        <div className="inner-table">
            <h4 className="title-table">Application Development</h4>
            <h2>
                <sup>$</sup> 249.99
            </h2>
            <span>Monthly Package</span>
            <div className="details">
                <ul>
                    <li className="active">iOS & Android Apps</li>
                    <li className="active">Custom Features</li>
                    <li className="active">API Integration</li>
                    <li className="active">App Store Submission</li>
                </ul>
            </div>
            <a href="#" className="octf-btn">
                Choose Plan
            </a>
        </div>
    </div>
</div>

<div className="col-lg-4 col-md-6 mb-4 mb-lg-4">
    <div className="ot-pricing-table">
        <div className="icon-main">
            <span className="flaticon-graphic-design" />
        </div>
        <div className="inner-table">
            <h4 className="title-table">Graphics Design</h4>
            <h2>
                <sup>$</sup> 99.99
            </h2>
            <span>Monthly Package</span>
            <div className="details">
                <ul>
                    <li className="active">Logo Design</li>
                    <li className="active">Brand Identity</li>
                    <li className="active">Marketing Materials</li>
                    <li className="active">UX/UI Design</li>
                </ul>
            </div>
            <a href="#" className="octf-btn">
                Choose Plan
            </a>
        </div>
    </div>
</div>

<div className="col-lg-4 col-md-6 mb-4 mb-lg-4">
    <div className="ot-pricing-table">
        <div className="icon-main">
            <span className="flaticon-support" />
        </div>
        <div className="inner-table">
            <h4 className="title-table">Software Support</h4>
            <h2>
                <sup>$</sup> 149.99
            </h2>
            <span>Monthly Package</span>
            <div className="details">
                <ul>
                    <li className="active">24/7 Support</li>
                    <li className="active">Bug Fixes</li>
                    <li className="active">Performance Monitoring</li>
                    <li className="active">Regular Updates</li>
                </ul>
            </div>
            <a href="#" className="octf-btn">
                Choose Plan
            </a>
        </div>
    </div>
</div>

<div className="col-lg-4 col-md-6 mb-4 mb-lg-4">
    <div className="ot-pricing-table">
        <div className="icon-main">
            <span className="flaticon-settings" />
        </div>
        <div className="inner-table">
            <h4 className="title-table">Troubleshooting</h4>
            <h2>
                <sup>$</sup> 79.99
            </h2>
            <span>Monthly Package</span>
            <div className="details">
                <ul>
                    <li className="active">Hardware Issues</li>
                    <li className="active">Software Problems</li>
                    <li className="active">Network Troubleshooting</li>
                    <li className="active">Remote Support</li>
                </ul>
            </div>
            <a href="#" className="octf-btn">
                Choose Plan
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