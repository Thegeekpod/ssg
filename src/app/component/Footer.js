import React from 'react'

const Footer = () => {
  return (
    <footer id="site-footer" className="site-footer footer-v1">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="widget-footer">
            <h5 className="text-white">Services</h5>
            <ul className="list-items">
              <li className="list-item">
                <a href="web-development.html">Web Development</a>
              </li>
              <li className="list-item">
                <a href="mobile-development.html">Mobile Development</a>
              </li>
              <li className="list-item">
                <a href="it-services.html">On-Demand Apps</a>
              </li>
              <li className="list-item">
                <a href="our-team.html">Dedicated Team</a>
              </li>
              <li className="list-item">
                <a href="it-services.html">iOS &amp; Android</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="widget-footer">
            <h5 className="text-white">Learn</h5>
            <ul className="list-items">
              <li className="list-item">
                <a href="it-services.html">Social Media Platform</a>
              </li>
              <li className="list-item">
                <a href="it-services.html">Business Management Tools</a>
              </li>
              <li className="list-item">
                <a href="it-services.html">Gambling &amp; Betting Web Apps</a>
              </li>
              <li className="list-item">
                <a href="it-services.html">Sports and Fitness App</a>
              </li>
              <li className="list-item">
                <a href="it-services.html">Software as a Service (SaaS)</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="widget-footer">
            <h5 className="text-white">Company</h5>
            <ul className="list-items">
              <li className="list-item">
                <a href="about-us.html">About Company</a>
              </li>
              <li className="list-item">
                <a href="faq.html">For Customers</a>
              </li>
              <li className="list-item">
                <a href="blog.html">Blog &amp; News</a>
              </li>
              <li className="list-item">
                <a href="contact.html">Careers &amp; Reviews</a>
              </li>
              <li className="list-item">
                <a href="contact.html">Sitemap</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="widget-footer">
            <h5 className="text-white">Subscribe</h5>
            <p>Follow our newsletter to stay updated about agency.</p>
            <form
              id="mc4wp-form-1"
              className="mc4wp-form mc4wp-form-1343"
              method="post"
              action="https://templates.thememodern.com/engitech/newsletter.php"
            >
              <div className="mc4wp-form-fields">
                <div className="subscribe-inner-form">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required=""
                  />
                  <button type="submit" className="subscribe-btn-icon">
                    <i className="flaticon-telegram" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="row mt-65">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="images/logo-light.png"
            alt=""
            className="lazyloaded"
            data-ll-status="loaded"
          />
        </div>
        <div className="col-md-6 text-left text-md-right align-self-center">
          <p className="copyright-text">
            Copyright © 2020 Engitech by ThemeModern. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer