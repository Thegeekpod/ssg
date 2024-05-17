"use client"
import Link from 'next/link'
import React from 'react'

const Services = () => {
  return (
    <div className="row">

            <div className="col-lg-4 col-md-6 col-sm-12">
                <Link className='link-n'  href="/professional-website-development-in-woodbridge-va">
              <div className="icon-box-s2 s1 pb-60">
                <div className="icon-main">
                  <span className="flaticon-code" />
                </div> 
                <div className="content-box" >
                  <h5>Web Development</h5>
                  <p>
                  Crafting digital experiences through web development: design, code, and innovation woven seamlessly into every pixel and interaction.
                  </p>
                </div>
              </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <Link className='link-n'  href="/app-development-services-for-businesses-in-woodbridge-va">
              <div className="icon-box-s2 s1 pb-60">
                <div className="icon-main">
                  <span className="flaticon-app" />
                </div>
                <div className="content-box">
                  <h5>App Development</h5>
                  <p>
                  Empowering businesses and individuals through custom-built mobile applications: innovation, functionality, and seamless user experiences at the forefront.
                  </p>
                </div>
              </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <Link className='link-n'  href="/professional-graphics-design-services-in-woodbridge-va">
              <div className="icon-box-s2 s1 pb-60">
                <div className="icon-main">
                  <span className="flaticon-monitor" />
                </div>
                <div className="content-box">
                  <h5>Graphics Design</h5>
                  <p>
                    Build the product you need on time with an experienced team
                    that uses a clear and effective design process.
                  </p>
                </div>
              </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <Link className='link-n'  href="/professional-software-development-services-in-woodbridge-va">
              <div className="icon-box-s2 s1 sm-pb-60">
                <div className="icon-main">
                  <span className="flaticon-browser" />
                </div>
                <div className="content-box">
                  <h5>Software Support </h5>
                  <p>
                  Engineering solutions and innovation through software development: code, design, and functionality converge to create impactful digital experiences and solutions.
                  </p>
                </div>
              </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <Link className='link-n'  href="/seo-and-digital-marketing-services-for-businesses-in-woodbridge-va">
              <div className="icon-box-s2 s1 xs-pb-60">
                <div className="icon-main">
                  <span className="flaticon-report-1" />
                </div>
                <div className="content-box">
                  <h5>Degital Marketing</h5>
                  <p>
                  Strategizing, optimizing, and amplifying online presence: digital marketing transforms brands through targeted campaigns and engaging content strategies.
                  </p>
                </div>
              </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
            <Link className='link-n'  href="#">
              <div className="icon-box-s2 s1">
                <div className="icon-main">
                  <span className="flaticon-best" />
                </div>
                <div className="content-box">
                  <h5>Troubleshooting</h5>
                  <p>
                  We can help you find solutions by being there for any kind of technical support you may need.
                  </p>
                </div>
              </div>
              </Link>
            </div>
          </div>
  )
}

export default Services