import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <>
    <div id="content" className="site-content">
      <div className="page-header flex-middle">
        <div className="container">
          <div className="inner flex-middle">
            <h1 className="page-title">Blogs </h1>
            <ul id="breadcrumbs" className="breadcrumbs none-style">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="active">Blogs </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="entry-content">
      <div className="container">
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
        <div className="ot-button text-center mt-5">
          <a href="#" className="octf-btn octf-btn-primary">
            Load More
          </a>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default Blog