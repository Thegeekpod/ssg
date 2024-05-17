import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer id="site-footer" className="site-footer footer-v1">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-12 col-md-12 col-sm-6 col-12">
            <div className="widget-footer">

              <Link href="/">
                <h3 style={{ color: 'white' }}>Betheretech LLC </h3>
              </Link>
              <div className="space-5" />
              <p>
                Go ahead make your business responsibilities lighter by letting us do your digital marketing for you. <Link href="/contact-us" style={{background:"#43baff",color:'white',borderRadius:"3px",padding:'5px', margin:'5px'}}>Contact us</Link>
              </p>

            </div>
          </div>

        </div>
        <hr />
        <div className="row mt-25">

          <div className="col-md-12 text-center text-md-center align-self-center">
            <p className="copyright-text">
              Copyright © 2024 All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer