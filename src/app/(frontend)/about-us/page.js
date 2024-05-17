import Partners from '@/component/Partners'
import Link from 'next/link'
import React from 'react'

const about = () => {
  
  return (
    <div id="content" className="site-content">
    <div className="page-header flex-middle">
      <div className="container">
        <div className="inner flex-middle">
          <h1 className="page-title">About Us</h1>
          <ul id="breadcrumbs" className="breadcrumbs none-style">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="active">About Us</li>
          </ul>
        </div>
      </div>
    </div>
    <section className="about-offer pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center mb-30 mb-lg-0">
            <div className="ot-heading">
              <span>{"//"} About Us</span>
              <h2 className="main-heading">
                Your Partner for <br /> Software Innovation
              </h2>
            </div>
            <div className="space-5" />
            <p>
            We are a small team of developers and IT professionals who work together to facilitate and grow our company. 
Our dream is to build and mend your technical needs and seek growth alongside you and your businesses. 

            </p>
            <p>
              <em className="text-dark">
                <strong>
                  We can help to maintain and modernize your IT infrastructure and
                  solve various infrastructure-specific issues a business may
                  face.
                </strong>
              </em>
            </p>
           
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="ot-image-box v3 st1" >
                  <div className="overlay">
                    <h4>Our Mission</h4>
                  </div>
                  <img src="/images/image-box1.jpg" alt="Our Mission" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="ot-image-box v3 st2" >
                  <div className="overlay">
                    <h4>Our Vision</h4>
                  </div>
                  <img src="/images/image-box2.jpg" alt="Our Vision" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="ot-image-box v3 st3" >
                  <div className="overlay">
                    <h4>Our Philosophy</h4>
                  </div>
                  <img src="/images/image-box3.jpg" alt="Our Philosophy" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="ot-image-box v3 st4 mb-0">
                  <div className="overlay">
                    <h4>Our Strategy</h4>
                  </div>
                  <img src="/images/image-box4.jpg" alt="Our Strategy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section className="bg-light-1 no-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 ">
              <div className="cta">
                <div className="row">
                  <div className="col-md-9 text-md-left text-center mb-4 mb-md-0">
                    <div className="ot-heading">
                      <span> We Carry more Than Just Good Coding Skills</span>
                      <h2 className="main-heading">Let{`'`}s Build Your Website!</h2>
                    </div>
                  </div>
                  <div className="col-md-3 text-md-right text-center align-self-end">
                    <a
                      href="tel:+1 7037631718"
                      className="octf-btn btn-border"
                      role="button"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
       
        <div className="space-40" />
      </section>
    
  </div>
  
  )
}

export default about