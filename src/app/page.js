import Link from "next/link";
import MainBaner from "@/component/MainBaner";
import Services from "@/component/Services";
import Partners from "@/component/Partners";


export default function Home() {
  return (


    <div id="content" className="site-content">
      <MainBaner/>
      <div className="padding-half bg-light-1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <Partners/>
            </div>
          </div>
        </div>
      </div>
      <section className="over-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 align-self-center">
              <div className="ot-heading">
                <span>{'//'} about company</span>
                <h2 className="main-heading">
                Empowering Your Business Through Innovative IT Solutions
                </h2>
              </div>
              <p className="mb-15">
              At ssgeekgroup, we blend innovative IT solutions with expertise and reliability to transform businesses. Our customer-centric approach ensures personalized service tailored to your unique needs. From custom software development to cybersecurity, we leverage the latest technologies for growth. With a proven track record and collaborative ethos, trust us to exceed your expectations and drive your business forward.
              </p>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="icon-box-s1">
                    <div className="icon-main">
                      <span className="flaticon-medal" />
                    </div>
                    <h5>Experience</h5>
                    <div className="line-box" />
                    <p>Our great team of more than 1400 software experts.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="icon-box-s1">
                    <div className="icon-main">
                      <span className="flaticon-gear" />
                    </div>
                    <h5>Quick Support</h5>
                    <div className="line-box" />
                    <p>We’ll help you test bold new ideas while sharing your.</p>
                  </div>
                </div>
                <div className="space-15" />
              </div>
            </div>
            <div className="offset-lg-1 col-lg-6 col-md-12 align-self-center">
              <div className="about-right">
                <div className="img-small">
                  <img
                    className="img-small-1"
                    src="images/home-about-small-1.jpg"
                    alt=""
                  />
                  <img
                    className="img-small-2"
                    src="images/home-about-small-2.jpg"
                    alt=""
                  />
                </div>
                <div className="home-about-video d-flex justify-content-center">
                  <div className="video-btn align-self-center">
                    <a href="https:{'//'}vimeo.com/94686522" className="btn-play">
                      <i className="fas fa-play" />
                      <span className="circle-1" />
                      <span className="circle-2" />
                    </a>
                  </div>
                </div>
                <div className="home-about-btn">
                  <div className="ot-button">
                    <Link href="/about-us" className="btn-details">
                      <i className="flaticon-right-arrow-1" /> LEANR MORE ABOUT US
                    </Link>
                    <div className="space-15" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="ot-heading">
                <span className="text-primary-light">{'//'} why choose us</span>
                <h2 className="main-heading text-white">
                  Boost Business Traffic With Our Services
                </h2>
              </div>
              <div className="space-20" />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="serv-box-2 s2">
                <span className="big-number">01</span>
                <div className="icon-main">
                  <span className="flaticon-tablet" />
                </div>
                <div className="content-box">
                  <h5>Seo Optimization</h5>
                  <div>
                  Elevate visibility, boost rankings, enhance online presence effectively with precision.
                  </div>
                  <a href="why-choose-us.html" className="btn-details">
                    <i className="flaticon-right-arrow-1" />Get The Serivice
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="serv-box-2 s2">
                <span className="big-number">02</span>
                <div className="icon-main">
                  {" "}
                  <span className="flaticon-ui" />
                </div>
                <div className="content-box">
                  <h5>Pay Per Click</h5>
                  <div>
                    Targeted advertising maximizes ROI, drives qualified traffic efficiently.
                  </div>
                  <a href="why-choose-us.html" className="btn-details">
                    <i className="flaticon-right-arrow-1" /> Get The Serivice
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="serv-box-2 s2">
                <span className="big-number">03</span>
                <div className="icon-main">
                  <span className="flaticon-report" />
                </div>
                <div className="content-box">
                  <h5>Analytics Report
                  </h5>
                  <div>
                  Data-driven insights fuel informed decisions, optimize performance comprehensively.
                  </div>
                  <a href="why-choose-us.html" className="btn-details">
                    <i className="flaticon-right-arrow-1" /> Get The Serivice
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="serv-box-2 s2">
                <span className="big-number">04</span>
                <div className="icon-main">
                  <span className="flaticon-shield" />
                </div>
                <div className="content-box">
                  <h5>Video Marketing</h5>
                  <div>
                  Engage, captivate, convert audiences with compelling visual narratives effectively.
                  </div>
                  <a href="why-choose-us.html" className="btn-details">
                    <i className="flaticon-right-arrow-1" /> Get The Serivice
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 pb-290">
        <div className="container">
          <div className="row mt--130">
            <div className="col-md-6 col-sm-12 mb-4 mb-md-0">
              <div className="misc-box text-white misc-box-bg1">
                <div className="ot-counter">
                  <div>
                    <span className="num" data-to={15} data-time={2000}>
                      0
                    </span>
                    <span>+</span>
                  </div>
                </div>
                <h5>Countries Worldwide</h5>
                <p>
                  To succeed, every software solution must be deeply integrated
                  into the existing tech environment..
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="misc-box misc-box-bg2">
                <div className="ot-counter">
                  <div>
                    <span className="num" data-to={23} data-time={2000}>
                      0
                    </span>
                    <span>k</span>
                  </div>
                </div>
                <h5>Happy Customers</h5>
                <p>
                  To succeed, every software solution must be deeply integrated
                  into the existing tech environment..
                </p>
              </div>
            </div>
          </div>
          <div className="space-120" />
          <div className="row">
            <div className="col-md-8 col-sm-8 mb-4 mb-sm-0">
              <div className="ot-heading mb-0">
                <span>{'//'} our service</span>
                <h2 className="main-heading">
                  We Offer a Wide <br />
                  Variety of IT Services
                </h2>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 text-sm-right align-self-end">
              <div className="ot-button">
                <Link href="/services" className="octf-btn octf-btn-primary">
                  all sevices
                </Link>
              </div>
              <div className="space-10" />
            </div>
          </div>
          <div className="space-55" />
          <Services/>
        </div>
      </section>
      <section className="bg-light-1 no-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mt--170">
              <div className="cta">
                <div className="row">
                  <div className="col-md-9 text-md-left text-center mb-4 mb-md-0">
                    <div className="ot-heading">
                      <span>{'//'} We Carry more Than Just Good Coding Skills</span>
                      <h2 className="main-heading">Let{`'`}s Build Your Website!</h2>
                    </div>
                  </div>
                  <div className="col-md-3 text-md-right text-center align-self-end">
                    <a
                      href="tel:+1 7037631718"
                      className="octf-btn btn-border"
                      role="button"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-100" />
       
        <div className="space-40" />
      </section>
      <section className="news-why">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="ot-heading mb-0">
          <span>{'//'} our recent news</span>
          <h2 className="main-heading">Read Our Latest News</h2>
        </div>
      </div>
      <div className="col-md-6 text-right sm-text-left sm-mt-30 align-self-end">
        <div className="ot-button">
          <a href="blog.html" className="octf-btn octf-btn-primary">
            All News
          </a>
        </div>
        <div className="space-10" />
      </div>
    </div>
    <div className="space-40" />
    <div className="post-grid pgrid">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <article className="post-box blog-item">
            <div className="post-inner">
              <div className="entry-media">
                <div className="post-cat">
                  <span className="posted-in">
                    <a href="#" rel="category tag">
                      Design
                    </a>
                    <a href="#" rel="category tag">
                      Development
                    </a>
                  </span>
                </div>
                <a href="post.html">
                  <img src="images/blog1-601x520.jpg" alt="" />
                </a>
              </div>
              <div className="inner-post">
                <div className="entry-header">
                  <div className="entry-meta">
                    <span className="posted-on">
                      _ <a href="#">November 21, 2019</a>
                    </span>
                    <span className="byline">
                      _{" "}
                      <a className="url fn n" href="#">
                        Tom Black
                      </a>
                    </span>
                    <span className="comment-num">
                      _ <a href="#">3 Comments</a>
                    </span>
                  </div>
                  {/* .entry-meta */}
                  <h3 className="entry-title">
                    <a href="post.html">Plan Your Project with Your Software</a>
                  </h3>
                </div>
                {/* .entry-header */}
                <div className="btn-readmore">
                  <a href="post.html">
                    <i className="flaticon-right-arrow-1" />
                    LEARN MORE
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <article className="post-box blog-item">
            <div className="post-inner">
              <div className="entry-media">
                <div className="post-cat">
                  <span className="posted-in">
                    <a href="#" rel="category tag">
                      Design
                    </a>
                    <a href="#" rel="category tag">
                      Development
                    </a>
                  </span>
                </div>
                <a href="post.html">
                  <img src="images/blog4-601x520.jpg" alt="" />
                </a>
              </div>
              <div className="inner-post">
                <div className="entry-header">
                  <div className="entry-meta">
                    <span className="posted-on">
                      _ <a href="#">November 21, 2019</a>
                    </span>
                    <span className="byline">
                      _{" "}
                      <a className="url fn n" href="#">
                        Tom Black
                      </a>
                    </span>
                    <span className="comment-num">
                      _ <a href="#">0 Comments</a>
                    </span>
                  </div>
                  {/* .entry-meta */}
                  <h3 className="entry-title">
                    <a href="post.html">You have a Great Business Idea?</a>
                  </h3>
                </div>
                {/* .entry-header */}
                <div className="btn-readmore">
                  <a href="post.html">
                    <i className="flaticon-right-arrow-1" />
                    LEARN MORE
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <article className="post-box blog-item">
            <div className="post-inner">
              <div className="entry-media">
                <div className="post-cat">
                  <span className="posted-in">
                    <a href="#" rel="category tag">
                      Development
                    </a>
                  </span>
                </div>
                <a href="post.html">
                  <img src="images/blog3-601x520.jpg" alt="" />
                </a>
              </div>
              <div className="inner-post">
                <div className="entry-header">
                  <div className="entry-meta">
                    <span className="posted-on">
                      _ <a href="#">September 24, 2019</a>
                    </span>
                    <span className="byline">
                      _{" "}
                      <a className="url fn n" href="#">
                        Tom Black
                      </a>
                    </span>
                    <span className="comment-num">
                      _ <a href="#">3 Comments</a>
                    </span>
                  </div>
                  {/* .entry-meta */}
                  <h3 className="entry-title">
                    <a href="post.html">Building Data Analytics Software</a>
                  </h3>
                </div>
                {/* .entry-header */}
                <div className="btn-readmore">
                  <a href="post.html">
                    <i className="flaticon-right-arrow-1" />
                    LEARN MORE
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>




  );
}
