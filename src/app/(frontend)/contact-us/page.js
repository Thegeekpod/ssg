import ContactFrom from '@/component/ContactFrom'
import Partners from '@/component/Partners'
import Link from 'next/link'
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
            <Link href="/">Home</Link>
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
              <span> contact details</span>
              <h2 className="main-heading">Contact us</h2>
            </div>
            <div className="space-5" />
            <p>
              Give us a call or drop by anytime, we endeavour to answer all
              enquiries within 24 hours on business days. We will be happy to
              answer your questions.
            </p>
        
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
            <div className="contact-info box-style1">
            <i className="flaticon-world-globe" />
              <div className="info-text">
                <h6>Our Social Media:</h6>
            <div className="ft-list-icon">
  <Link className="twitter" href="#">
    <i className="fab fa-twitter" />
  </Link>
  <Link className="facebook" href="https://www.facebook.com/Bethere Tech LLC">
    <i className="fab fa-facebook-f" />
  </Link>

  <Link className="instagram" href="#">
    <i className="fab fa-instagram" />
  </Link>
</div>
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
 
</div>

  )
}

export default page