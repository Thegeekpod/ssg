import Partners from '@/component/Partners'
import Link from 'next/link'
import React from 'react'

const about = () => {
  
  return (
    <div id="content" className="site-content">
 
    <section className="about-offer pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center mb-30 mb-lg-0">
            <div className="ot-heading">
              <span> About Us</span>
              <h2 className="main-heading">
                Your Partner for <br /> Software Innovation
              </h2>
            </div>
           
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
                    {/* <h4>Our Mission</h4> */}
                  </div>
                  <img src="/images/image-box1.jpg" alt="Our Mission" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="ot-image-box v3 st2" >
                  <div className="overlay">
                    {/* <h4>Our Vision</h4> */}
                  </div>
                  <img src="/images/image-box2.jpg" alt="Our Vision" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="ot-image-box v3 st3" >
                  <div className="overlay">
                    {/* <h4>Our Philosophy</h4> */}
                  </div>
                  <img src="/images/image-box3.jpg" alt="Our Philosophy" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="ot-image-box v3 st4 mb-0">
                  <div className="overlay">
                    {/* <h4>Our Strategy</h4> */}
                  </div>
                  <img src="/images/image-box4.jpg" alt="Our Strategy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
  </div>
  
  )
}

export default about