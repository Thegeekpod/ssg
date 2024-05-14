import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

const Header = () => {
  return (
    <header id="site-header" className="site-header sticky-header header-static">
    {/* Main Header start */}
    <div className="header-topbar style-2">
      <div className="octf-area-wrap">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <ul className="social-list">
                <li>
                  <Link href="#" target="_self">
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.facebook.com/Bethere Tech LLC" target="_self">
                    <i className="fab fa-facebook-f" />
                  </Link>
                </li>
                <li>
                  <Link href="#" target="_self">
                    <i className="fab fa-linkedin-in" />
                  </Link>
                </li>
                <li>
                  <Link href="#" target="_self">
                    <i className="fab fa-instagram" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-8">
              <ul className="topbar-info align-self-end clearfix">
                <li>
                  <Link href="tel:+1 703-7631-718">
                    <i className="fas fa-phone-alt" /> +1 703-7631-718
                  </Link>
                </li>
                <li>
                  <Link href="mailto:betheretech@outlook.com">
                    <i className="fas fa-envelope" /> betheretech@outlook.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="octf-main-header">
      <div className="octf-area-wrap">
        <div className="container octf-mainbar-container">
          <div className="octf-mainbar">
            <div className="octf-mainbar-row octf-row">
              <div className="octf-col logo-col">
                <div id="site-logo" className="site-logo">
                  <Link href="index.html">
                    <img src="/logo.png" alt="Bethere Tech LLC" className="" />
                  </Link>
                </div>
              </div>
              <div className="octf-col menu-col">
                <nav id="site-navigation" className="main-navigation">
                  <ul className="menu">
                   <Menu/>
                   <div class="ot-button align-self-center" >
                                <Link href="/book-an-appointment" style={{    borderRadius: '38px',padding: '15px'}} class="octf-btn octf-btn-primary">Book An Appoinment</Link>
                            </div>
                  </ul>
                </nav>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="header_mobile">
      <div className="container">
        <div className="mlogo_wrapper clearfix">
          <div className="mobile_logo">
            <Link href="index.html">
              <img src="/logo.png" alt="Bethere Tech LLC" />
            </Link>
          </div>
          <div id="mmenu_toggle">
            <button />
          </div>
        </div>
        <div className="mmenu_wrapper">
          <div className="mobile_nav collapse">
            <ul id="menu-main-menu" className="mobile_mainmenu">
            <Menu/>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header