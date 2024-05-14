import ContactFrom from '@/component/ContactFrom'
import Link from 'next/link'
import React from 'react'

const GraphicsDesign = () => {
  return (
    <div id="content" className="site-content">
    <div className="page-header flex-middle">
      <div className="container">
        <div className="inner flex-middle">
          <h1 className="page-title">Graphics Design</h1>
          <ul id="breadcrumbs" className="breadcrumbs none-style">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
             <Link href="/services">Services</Link>
            </li>
            <li className="active">Web Development</li>
          </ul>
        </div>
      </div>
    </div>
    <section className="service-web mb-0 pb-0">
      <div className="container">
        <div className="row">
        <div className="col-lg-7">
            <div className="service-process mp0">
              <div className="ot-heading">
                <span>{"//"} about service</span>
                <h2 className="main-heading">
                Welcome To Bethere Tech LLC Graphics Design
                </h2>
                <p>Welcome to Bethere Tech LLC, where creativity meets innovation in graphic design. Our team of talented designers specializes in creating visually stunning and impactful designs that help businesses stand out in today{"'"}s competitive market.</p>
              </div>
              
            </div>
          </div>
          <div className="col-lg-4  mb-5 mb-lg-0 align-self-center offset-xl-1">
            <img src="/img/service/graphics.png" alt="" />
          </div>
          
        </div>
      </div>
    </section>

    <section className="service-web">
      <div className="container">
        <div className="row">
          
          <div className="col-lg-12">
            <div className="service-process m-3">
              <div className="ot-heading text-center">
              <span>{"//"} We Are Offered</span>
                <h2 className="main-heading">
                  We Provide Best 
                  Graphics Design
                </h2>
              </div>
              <div className="row">
                <div className="col-md-4 ">
                  <div className="process-box bbs">
                    <div className="step">01.</div>
                    <h6 className="mb-0">Brand Identity Design</h6>
                    <p>
                    Your brand is more than just a logo – it’s the visual representation of your company’s values, personality, and unique selling proposition. Our services help establish a strong and memorable brand presence through logos, color schemes, typography, and visual elements that resonate with your target audience.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="process-box bbs">
                    <div className="step">02.</div>
                    <h6 className="mb-0">Print Design</h6>
                    <p>
                    From business cards and brochures to posters and packaging, our print design services cover all your offline marketing needs. Whether you’re looking to promote a product, event, or campaign, our designers create eye-catching designs that leave a lasting impression on your audience. </p>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="process-box bbs">
                    <div className="step">03.</div>
                    <h6 className="mb-0">Digital Design</h6>
                    <p>
                    In today’s digital age, having a strong online presence is essential for success. Our digital design services encompass everything from website graphics and social media assets to digital ads and email templates, helping you attract, engage, and convert customers across various digital channels.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="process-box bbs">
                    <div className="step">04.</div>
                    <h6 className="mb-0">UI/UX Design</h6>
                    <p>
                    User experience is a crucial factor in the success of any digital product. Our UI/UX design services focus on creating intuitive interfaces and seamless user experiences that enhance usability, drive engagement, and differentiate your brand in the crowded digital landscape.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="process-box bbs" >
                    <div className="step">05.</div>
                    <h6 className="mb-0">Illustration</h6>
                    <p>
                    
                    llustrations add a unique touch to your marketing materials and help convey complex ideas in a visually appealing manner. Whether you need custom illustrations for your website, blog, or marketing, our talented illustrators bring your ideas to life with creativity and flair.
                  </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section className="service-web-video">
      <div className="container">
        <div className="row">
        <div className=" col-xl-6 col-lg-6 split-right-img">
          <ContactFrom/>
          </div>
          <div className="offset-xl-1 col-xl-5 col-lg-6">
            <div className="tab-video">
              <div className="ot-heading">
                <span>{"//"} Free Consultation</span>
                <h2 className="main-heading">
                First Impressions Matter Because You May Not Get Another Chance To Impress Your Customers
                </h2>
              </div>
              <div className="space-15" />
           <p className='text-justify'>In the realm of IT, the first impression you make on clients can significantly influence their perception of your company and its services. This statement stresses the critical role of the initial encounter in shaping client relationships. It highlights the need for IT companies to prioritize professionalism, expertise, and excellent communication right from the start. By recognizing the importance of first impressions, IT firms can strive to create positive experiences that lay the groundwork for trust, collaboration, and long-term partnerships with their clients.





</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    <section className='faq'>
    <div className="container">
  <div className="row">
    <div className="col-lg-12 text-center">
      <div className="ot-heading">
        <span>{"//"} FAQ</span>
        <h2 className="main-heading">
          Read Most <br />
          Frequent Questions
        </h2>
      </div>
      <div className="space-25" />
    </div>
  </div>
  <div className="row">
    <div className="col-lg-6">
      <div className="ot-accordions">
        <div className="acc-item current">
          <span className="acc-toggle">
          What graphic design services do you offer?
            <i className="down flaticon-download-arrow" />
            <i className="up flaticon-up-arrow" />
          </span>
          <div className="acc-content active" style={{ display: "block" }}>
            <p>
            We offer a comprehensive range of graphic design services, including logo design, branding, print design, digital graphics, packaging design, and more.
            </p>
          </div>
        </div>
        <div className="acc-item">
          <span className="acc-toggle">
          Can you create logos and branding materials?
            <i className="down flaticon-download-arrow" />
            <i className="up flaticon-up-arrow" />
          </span>
          <div className="acc-content" style={{}}>
            <p>
            Yes, our talented designers can create unique logos and branding materials that effectively communicate your brand identity and resonate with your target audience.
            </p>
          </div>
        </div>
        <div className="acc-item">
          <span className="acc-toggle">
          Do you design marketing collateral such as brochures and flyers?
            <i className="down flaticon-download-arrow" />
            <i className="up flaticon-up-arrow" />
          </span>
          <div className="acc-content" style={{}}>
            <p>
            Absolutely, we excel in designing eye-catching marketing collateral such as brochures, flyers, posters, banners, business cards, and other promotional materials to help you stand out from the competition.
            </p>
          </div>
        </div>
        <div className="acc-item">
          <span className="acc-toggle">
          What is your process for collaborating on graphic design projects?
            <i className="down flaticon-download-arrow" />
            <i className="up flaticon-up-arrow" />
          </span>
          <div className="acc-content" style={{}}>
            <p>
            Our collaborative design process involves understanding your requirements, presenting initial concepts for feedback, revising designs based on your input, and delivering final designs that exceed your expectations.
            </p>
          </div>
        </div>
        <div className="acc-item">
          <span className="acc-toggle">
          Can you work with existing brand guidelines?
            <i className="down flaticon-download-arrow" />
            <i className="up flaticon-up-arrow" />
          </span>
          <div className="acc-content" style={{}}>
            <p>
            Yes, we can work within your existing brand guidelines to ensure consistency across all design materials and reinforce your brand identity effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-6">
      <img src='/img/service/faq.png'/>
    </div>
  </div>
</div>
</section>


  </div>
  
  )
}

export default GraphicsDesign