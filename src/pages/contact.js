import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>

    <form className="contact-form" name="GrantAveryCom contact form" method="post"
      data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="bot-field" />
        <div className="field half first">
            <label htmlFor="name">Name:</label><br/>
            <input type="text" name="name" id="name" />
        </div>
        <div className="field half">
            <label htmlFor="email">Email:</label><br/>
            <input type="text" name="email" id="email" />
        </div>
        <div className="field">
            <label htmlFor="message">Message:</label><br/>
            <textarea name="message" id="message" rows="6"></textarea>
        </div>
        <div data-netlify-recaptcha="true" netlify-recaptcha data-netlify-recaptcha></div>
        <div className="actions">
            <button type="submit" value="Send" className="page-btn">Send</button>
        </div>
    </form>
  </Layout>
)

export default ContactPage
