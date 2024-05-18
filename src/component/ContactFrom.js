"use client"
import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/js/acro.js';   // (This is external js url)
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://betheretech.com/mailsend.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setFormStatus(result.message);
    } catch (error) {
      setFormStatus('Failed to send message.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="wpcf7">
      <div className="main-form">
        <h2>Click here to send us a message</h2>
        <p className="font14">
          Your email address will not be published. Required fields are marked *
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
            value={formData.name}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.message}
            onChange={handleChange}
            cols={40}
            rows={10}
            className=""
            aria-invalid="false"
            placeholder="Message..."
            required=""
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
        <div className="status-message">{formStatus}</div>
      </div>
    </form>
  );
};

export default ContactForm;
