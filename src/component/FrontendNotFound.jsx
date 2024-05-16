import Link from 'next/link'
import React from 'react'

const FrontendNotFound = () => {
  return (
    <div id="content" className="site-content">
    <div className="container">
      <div className="error-404 not-found text-center">
        <h2>
          <img className="error-image" src="images/404-error.png" alt={404} />
        </h2>
        <h1>Sorry! Page Not Found!</h1>
        <div className="content-404">
          <p>
            Oops! The page you are looking for does not exist. Please return to
            the site is homepage.
          </p>
          
          <Link className="octf-btn" href="/">
            Take Me Home
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FrontendNotFound