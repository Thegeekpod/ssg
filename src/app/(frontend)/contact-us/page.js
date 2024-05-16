import ContactFrom from '@/component/ContactFrom'
import Partners from '@/component/Partners'
import React from 'react'

const page = () => {
  return (
    <div id="content" className="site-content">
  <div className="page-header flex-middle">
    <div className="container">
      <div className="inner flex-middle">
        <h1 className="page-title">Contact</h1>
        <ul id="breadcrumbs" className="breadcrumbs none-style">
          <li>
            <a href="index.html">Home</a>
          </li>
          <li className="active">Contact</li>
        </ul>
      </div>
    </div>
  </div>

  <section className="contact-page">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="contact-left">
            <div className="ot-heading">
              <span>{"//"} contact details</span>
              <h2 className="main-heading">Contact us</h2>
            </div>
            <div className="space-5" />
            <p>
              Give us a call or drop by anytime, we endeavour to answer all
              enquiries within 24 hours on business days. We will be happy to
              answer your questions.
            </p>
            <div className="contact-info box-style1">
              <i className="flaticon-world-globe" />
              <div className="info-text">
                <h6>Our Address:</h6>
                <p>15309 Comus Court, Woodbridge, VA 22193</p>
              </div>
            </div>
            <div className="contact-info box-style1">
              <i className="flaticon-envelope" />
              <div className="info-text">
                <h6>Our Mailbox:</h6>
                <p>betheretech@outlook.com</p>
                <p>betheretechllc@gmail.com</p>

              </div>
            </div>
            <div className="contact-info box-style1">
              <i className="flaticon-phone-1" />
              <div className="info-text">
                <h6>Our Phone:</h6>
                <p>+1 (703) 763-1718</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
        <ContactFrom/>
          <div className="clear" />
          <div id="ajaxsuccess">Successfully sent!!</div>
          <div className="clear" />
        </div>
      </div>
    </div>
  </section>
  <div className="padding-half bg-light-1">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
           
              <Partners/>
               
              
          </div>
        </div>
      </div>
    </div>
  <div className="no-padding">
    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.149500530687!2d-77.37342222519858!3d38.62244166288281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6f81b116347af%3A0x53625b3a75642194!2s15309%20Comus%20Ct%2C%20Woodbridge%2C%20VA%2022193%2C%20USA!5e0!3m2!1sen!2sin!4v1715498430196!5m2!1sen!2sin"
        height={500}
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex={0}
      />
    </div>
  </div>
</div>

  )
}

export default page