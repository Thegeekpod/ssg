"use client"
import React, { useEffect } from 'react'
const ContactFrom = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/js/acro.js';   //(This is external js url)
    script.async = true;
    document.body.appendChild(script);
  }, [])
  return (
    <form
    id="ajax-form"
    name="ajax-form"
    action="https://templates.thememodern.com/engitech/contact.php"
    method="post"
    className="wpcf7"
  >
    <div className="main-form">
      <h2>Click here to send us a message</h2>
      <p className="font14">
        Your email address will not be published. Required fields are
        marked *
      </p>
      <p>
        <label htmlFor="name">
          {" "}
          <span className="error" id="err-name">
            please enter name
          </span>
        </label>
        <input
          type="text"
          name="name"
          defaultValue=""
          size={40}
          className=""
          aria-required="true"
          aria-invalid="false"
          placeholder="Your Name *"
          required=""
        />
      </p>
      <p>
        <label htmlFor="email">
          <span className="error" id="err-email">
            please enter e-mail
          </span>
          <span className="error" id="err-emailvld">
            e-mail is not a valid format
          </span>
        </label>
        <input
          type="email"
          name="email"
          id="email"
          defaultValue=""
          size={40}
          className=""
          aria-required="true"
          aria-invalid="false"
          placeholder="Your Email *"
          required=""
        />
      </p>
      <p>
        <label htmlFor="message" />
        <textarea
          name="message"
          id="message"
          cols={40}
          rows={10}
          className=""
          aria-invalid="false"
          placeholder="Message..."
          required=""
          defaultValue={""}
        />
      </p>
      <p>
        <button
          type="submit"
          id="send"
          className="octf-btn octf-btn-light"
        >
          Send Message
        </button>
      </p>
      <div className="clear" />
      <div className="error" id="err-form">
        There was a problem validating the form please check!
      </div>
      <div className="error" id="err-timedout">
        The connection to the server timed out!
      </div>
      <div className="error" id="err-state" />
    </div>
  </form>
  )
}

export default ContactFrom