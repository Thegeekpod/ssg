import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

const Header = () => {
  return (
    <header id="site-header" className="site-header sticky-header header-static">
    {/* Main Header start */}
    
    <div className="octf-main-header">
      <div className="octf-area-wrap">
        <div className="container octf-mainbar-container">
          <div className="octf-mainbar">
            <div className="octf-mainbar-row octf-row">
              <div className="octf-col logo-col">
                <div id="site-logo" className="site-logo">
                  <Link href="/" className='logot'>
                   <h3 className='logott' >Betheretech LLC </h3>
                  </Link>
                </div>
              </div>
              <div className="octf-col menu-col text-right pr-0">
                <nav id="site-navigation" className="main-navigation">
                  <ul className="menu">
                   <Menu/>
                  
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