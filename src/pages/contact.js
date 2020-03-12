import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>
    <div>
      <form
        className="contact-form"
        name="GrantAveryCom contact form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="https://formspree.io/grant.m.avery+contact@gmail.com"
      >
        <noscript>
          <p>This form won’t work with Javascript disabled</p>
        </noscript>
        <div hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field"/>
          </label>
        </div>
        <div className="field half first">
          <label htmlFor="name">Name:<br />
            <input type="text" name="name" id="name"/>
          </label>
        </div>
        <div className="field half">
          <label htmlFor="email">Email:<br />
            <input type="text" name="email" id="email"/>
          </label>
        </div>
        <div className="field" id="contact-recaptcha">
          <label htmlFor="message">Message:<br />
            <textarea name="message" id="message" rows="6"/>
          </label>
        </div>
        <div className="actions">
          <button type="submit" value="Send" className="page-btn">Send</button>
        </div>
      </form>
    </div>
  </Layout>
)

export default ContactPage