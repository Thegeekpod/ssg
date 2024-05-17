import ContactFrom from '@/component/ContactFrom'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div id="content" className="site-content">


      <section className="contact-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-left">
                <div className="ot-heading">
                
                  <h2 className="main-heading">Contact us</h2>
                </div>
                <div className="space-5" />
                <p>
                  Contact Us for queries/concerns/feedback at<br /><Link href="+1703-763-1718">703-763-1718</Link>
                </p>

                <div className="contact-info box-style1">
                  <i className="flaticon-envelope" />
                  <div className="info-text">
                    <h6>Our Mailbox:</h6>
                    <Link href="mailto:betheretech@outlook.com"><p>betheretech@outlook.com</p></Link>
                    <Link href="mailto:betheretechllc@gmail.com"> <p>betheretechllc@gmail.com</p></Link>

                  </div>
                </div>
                <div className="contact-info box-style1">
                  <i className="flaticon-phone-1" />
                  <div className="info-text">
                    <h6>Our Phone:</h6>
                    <Link href="tel:+1 (703) 763-1718"> <p>+1 (703) 763-1718</p></Link>
                  </div>
                </div>
                <div className="contact-info box-style1">
                  <i className="flaticon-world-globe" />
                  <div className="info-text">
                    <h6>Our Social Media:</h6>
                    <div className="ft-list-icon">
                      <Link className="twitter" href="#">
                        <i className="ss fab fa-twitter" />
                      </Link>
                      <Link className="facebook" href="https://www.facebook.com/Bethere Tech LLC">
                        <i className="ss fab fa-facebook-f" />
                      </Link>

                      <Link className="instagram" href="#">
                        <i className="ss fab fa-instagram" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <ContactFrom />
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