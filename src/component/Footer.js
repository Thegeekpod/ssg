import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer id="site-footer" className="site-footer footer-v1">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="widget-footer">

            <Link href="/">
          <img src="/img/logo-light.png"/>
          </Link>
          <div className="space-5"/>
          <p>
Transform your business with ssgeekgroup, where innovative IT solutions meet unparalleled expertise and unwavering reliability.</p>
<div className="space-5"/>
<div className="ft-list-icon">
  <Link className="twitter" href="#">
    <i className="fab fa-twitter" />
  </Link>
  <Link className="facebook" href="https://www.facebook.com/ssgeekgroup">
    <i className="fab fa-facebook-f" />
  </Link>
  <Link className="linkedin" href="#">
    <i className="fab fa-linkedin-in" />
  </Link>
  <Link className="instagram" href="#">
    <i className="fab fa-instagram" />
  </Link>
</div>

          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="widget-footer">
            <h5 className="text-white">Useful Links</h5>
            <ul className="list-items">
              <li className="list-item">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="list-item">
                <Link href="/refund-policy">Refund Policy</Link>
              </li>
              <li className="list-item">
                <Link href="/privicy-policy">Privicy Policy</Link>
              </li>
              <li className="list-item">
                <Link href="/terms-and-condition">Terms and Condition</Link>
              </li>
              <li className="list-item">
                <Link href="/book-an-appointment">Book An Appointment</Link>
              </li>
            
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="widget-footer">
            <h5 className="text-white">Contact Info</h5>
            <ul className="list-items">
              <li className="list-item">
                <Link href="tel:+1 (703) 763-1718"><i className="flaticon-phone-1"></i> +1 7037631718</Link>
              </li>
              <li className="list-item">
                <Link href="mailto:Support@Ssgeekgroup.Com"><i className="flaticon-envelope"></i> support@ssgeekgroup.com</Link>
              </li>
              
              <li className="list-item">
                <Link href="https://maps.app.goo.gl/qfaUkutsCSJ5Gdwn8"><i className="flaticon-world-globe"></i> 15309 Comus Court, Woodbridge, VA 22193</Link>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="widget-footer">
            <h5 className="text-white">Services</h5>
            <ul className="list-items">
              <li className="list-item">
                <Link href="/professional-software-development-services-in-woodbridge-va">Software Development</Link>
              </li>
              <li className="list-item">
                <Link href="/professional-website-development-in-woodbridge-va">Web Development</Link>
              </li>
              <li className="list-item">
                <Link href="/app-development-services-for-businesses-in-woodbridge-val">App Development</Link>
              </li>
              <li className="list-item">
                <Link href="/professional-graphics-design-services-in-woodbridge-va">Graphics Design</Link>
              </li>
              <li className="list-item">
                <Link href="/seo-and-digital-marketing-services-for-businesses-in-woodbridge-va">Seo and Digital Marketing</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr/>
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