"use client"
import React, { useEffect } from 'react'

const Partners = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/js/owl.js';   //(This is external js url)
        script.async = true;
        document.body.appendChild(script);
      }, [])
  return (
    <div className="padding-half bg-light-1">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
    <div className="partners">
                <div className="owl-carousel owl-theme home-client-carousel">
                  <div className="partners-slide">
                    <a href="index-2.html" className="client-logo">
                      <figure className="partners-slide-inner">
                        <img
                          className="partners-slide-image"
                          src="/images/client-logos/client1.svg"
                          alt=""
                        />
                      </figure>
                    </a>
                  </div>
                  <div className="partners-slide">
                    <a href="index-2.html" className="client-logo">
                      <figure className="partners-slide-inner">
                        <img
                          className="partners-slide-image"
                          src="/images/client-logos/client2.svg"
                          alt=""
                        />
                      </figure>
                    </a>
                  </div>
                  <div className="partners-slide">
                    <a href="index-2.html" className="client-logo">
                      <figure className="partners-slide-inner">
                        <img
                          className="partners-slide-image"
                          src="/images/client-logos/client3.svg"
                          alt=""
                        />
                      </figure>
                    </a>
                  </div>
                  <div className="partners-slide">
                    <a href="index-2.html" className="client-logo">
                      <figure className="partners-slide-inner">
                        <img
                          className="partners-slide-image"
                          src="/images/client-logos/client4.png"
                          alt=""
                        />
                      </figure>
                    </a>
                  </div>
                  <div className="partners-slide">
                    <a href="index-2.html" className="client-logo">
                      <figure className="partners-slide-inner">
                        <img
                          className="partners-slide-image"
                          src="/images/client-logos/client5.svg"
                          alt=""
                        />
                      </figure>
                    </a>
                  </div>
                  <div className="partners-slide">
                    <a href="index-2.html" className="client-logo">
                      <figure className="partners-slide-inner">
                        <img
                          className="partners-slide-image"
                          src="/images/client-logos/client6.svg"
                          alt=""
                        />
                      </figure>
                    </a>
                  </div>
                  <div className="partners-slide">
                    <a href="index-2.html" className="client-logo">
                      <figure className="partners-slide-inner">
                        <img
                          className="partners-slide-image"
                          src="/images/client-logos/client1.svg"
                          alt=""
                        />
                      </figure>
                    </a>
                  </div>
                  <div className="partners-slide">
                    <a href="index-2.html" className="client-logo">
                      <figure className="partners-slide-inner">
                        <img
                          className="partners-slide-image"
                          src="/images/client-logos/client2.svg"
                          alt=""
                        />
                      </figure>
                    </a>
                  </div>
                  <div className="partners-slide">
                    <a href="index-2.html" className="client-logo">
                      <figure className="partners-slide-inner">
                        <img
                          className="partners-slide-image"
                          src="/images/client-logos/client3.svg"
                          alt=""
                        />
                      </figure>
                    </a>
                  </div>
                  <div className="partners-slide">
                    <a href="index-2.html" className="client-logo">
                      <figure className="partners-slide-inner">
                        <img
                          className="partners-slide-image"
                          src="/images/client-logos/client4.png"
                          alt=""
                        />
                      </figure>
                    </a>
                  </div>
                  <div className="partners-slide">
                    <a href="index-2.html" className="client-logo">
                      <figure className="partners-slide-inner">
                        <img
                          className="partners-slide-image"
                          src="/images/client-logos/client5.svg"
                          alt=""
                        />
                      </figure>
                    </a>
                  </div>
                  <div className="partners-slide">
                    <a href="index-2.html" className="client-logo">
                      <figure className="partners-slide-inner">
                        <img
                          className="partners-slide-image"
                          src="/images/client-logos/client6.svg"
                          alt=""
                        />
                      </figure>
                    </a>
                  </div>
                </div>
              </div>
              </div>
              </div>
              </div>
              </div>
  )
}

export default Partners