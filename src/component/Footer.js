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
                Call us any time our Phone Number <link href='tel:+1 (703) 763-1718'>+1 (703) 763-1718</link>
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