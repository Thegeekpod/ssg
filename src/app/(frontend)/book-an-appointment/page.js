"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'

const Book_an_appointment = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';   //(This is external js url)
    script.async = true;
    document.body.appendChild(script);
  }, [])
  return (
    <div id="content" className="site-content">
    <div className="page-header flex-middle">
      <div className="container">
        <div className="inner flex-middle">
          <h1 className="page-title">Book An Appointment</h1>
          <ul id="breadcrumbs" className="breadcrumbs none-style">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
             <Link href="/services">Services</Link>
            </li>
            <li className="active">Book An Appointment
</li>
          </ul>
        </div>
      </div>
    </div>
    <>
  {/* Calendly inline widget begin */}
  
  <div
    className="calendly-inline-widget"
    data-url="https://calendly.com/ssgeekgroup/30min"
    style={{ minWidth: 320, height: 700 }}
  />
  {/* Calendly inline widget end */}
</>



  </div>
  )
}

export default Book_an_appointment