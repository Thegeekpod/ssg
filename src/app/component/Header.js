import React from 'react'

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
                  <a href="http://twitter.com/" target="_self">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="http://facebook.com/" target="_self">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="http://linkedin.com/" target="_self">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href="http://instagram/" target="_self">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-8">
              <ul className="topbar-info align-self-end clearfix">
                <li>
                  <a href="tel:+1 703-7631-718">
                    <i className="fas fa-phone-alt" /> +1 703-7631-718
                  </a>
                </li>
                <li>
                  <a href="mailto:support@ssgeekgroup.com">
                    <i className="fas fa-envelope" /> support@ssgeekgroup.com
                  </a>
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
                  <a href="index.html">
                    <img src="/logo.png" alt="ssgeekgroup" className="" />
                  </a>
                </div>
              </div>
              <div className="octf-col menu-col">
                <nav id="site-navigation" className="main-navigation">
                  <ul className="menu">
                    <li className="">
                      <a href="index.html">Home</a>
                     
                    </li>
                    <li>
                      <a href="contact.html">About Us</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">Services</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="it-services.html">It Services</a>
                        </li>
                        <li>
                          <a href="web-development.html">Web Development</a>
                        </li>
                        <li>
                          <a href="mobile-development.html">
                            Mobile Development
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Pricing</a>
                    </li>
                    <li>
                      <a href="contact.html">Contacts Us</a>
                    </li>
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
            <a href="index.html">
              <img src="/logo.png" alt="ssgeekgroup" />
            </a>
          </div>
          <div id="mmenu_toggle">
            <button />
          </div>
        </div>
        <div className="mmenu_wrapper">
          <div className="mobile_nav collapse">
            <ul id="menu-main-menu" className="mobile_mainmenu">
              <li className="menu-item-has-children current-menu-item current-menu-ancestor">
                <a href="index.html">Home</a>
                <ul className="sub-menu">
                  <li className="current-menu-item">
                    <a href="index.html">Home 1</a>
                  </li>
                  <li>
                    <a href="index-2.html">Home 2</a>
                  </li>
                  <li>
                    <a href="index-3.html">Home 3</a>
                  </li>
                  <li>
                    <a href="index-4.html">Home 4</a>
                  </li>
                  <li>
                    <a href="index-5.html">Home 5</a>
                  </li>
                  <li>
                    <a href="index-6.html">Home 6</a>
                  </li>
                  <li>
                    <a href="index-7.html">Home 7</a>
                  </li>
                  <li>
                    <a href="index-8.html">Home 8</a>
                  </li>
                  <li>
                    <a href="index-9.html">Home 9</a>
                  </li>
                  <li>
                    <a href="index-10.html">Home 10</a>
                  </li>
                  <li>
                    <a href="index-11.html">Home 11</a>
                  </li>
                  <li>
                    <a href="index-12.html">Home 12</a>
                  </li>
                  <li>
                    <a href="index-13.html">Home 13</a>
                  </li>
                  <li>
                    <a href="index-14.html">Home 14</a>
                  </li>
                  <li>
                    <a href="index-15.html">Home 15</a>
                  </li>
                  <li>
                    <a href="index-16.html">Home 16</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Company</a>
                <ul className="sub-menu">
                  <li>
                    <a href="about-us.html">About us</a>
                  </li>
                  <li>
                    <a href="why-choose-us.html">Why Choose Us</a>
                  </li>
                  <li>
                    <a href="our-team.html">Our team</a>
                  </li>
                  <li>
                    <a href="single-team.html">Single team</a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="shop.html">Shop</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="single-product.html">Single Product</a>
                      </li>
                      <li>
                        <a href="checkout-page.html">Checkout Page</a>
                      </li>
                      <li>
                        <a href="cart-page.html">Cart Page</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="typography.html">Typography</a>
                  </li>
                  <li>
                    <a href="elements.html">Elements</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQS</a>
                  </li>
                  <li>
                    <a href="404-error.html">404 Error</a>
                  </li>
                  <li>
                    <a href="cooming-soon.html">Coming Soon</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Services</a>
                <ul className="sub-menu">
                  <li>
                    <a href="it-services.html">It Services</a>
                  </li>
                  <li>
                    <a href="web-development.html">Web Development</a>
                  </li>
                  <li>
                    <a href="mobile-development.html">Mobile Development</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Projects</a>
                <ul className="sub-menu">
                  <li>
                    <a href="portfolio-masonry.html">Portfolio Masonry</a>
                  </li>
                  <li>
                    <a href="portfolio-carousel.html">Portfolio Carousel</a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="portfolio-grid.html">Portfolio Grid</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="portfolio-grid.html">Portfolio 3 Columns</a>
                      </li>
                      <li>
                        <a href="portfolio-4-column.html">
                          Portfolio 4 Columns
                        </a>
                      </li>
                      <li>
                        <a href="portfolio-no-gap.html">Portfolio No Gap</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="portfolio-details-1.html">Portfolio Details</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="portfolio-details-1.html">Single Layout 1</a>
                      </li>
                      <li>
                        <a href="portfolio-details-2.html">Single Layout 2</a>
                      </li>
                      <li>
                        <a href="portfolio-details-3.html">Single Layout 3</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="blog.html">Blog</a>
                <ul className="sub-menu">
                  <li>
                    <a href="blog.html">Blog Listing</a>
                  </li>
                  <li>
                    <a href="blog-grid.html">Blog Grid</a>
                  </li>
                  <li>
                    <a href="post.html">Blog Single</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contacts</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header