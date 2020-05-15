import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Recaptcha from 'react-google-recaptcha';
import { navigate } from 'gatsby-link';

const RECAPTCHA_KEY = '6LfLXfcUAAAAAMlZr_sR8HfmsM7EhUfJGO8U0Swd';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}
export default class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '', gotRecaptcha: false };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleRecaptcha = value => {
    this.setState({ 'g-recaptcha-response': value });
    this.setState({ gotRecaptcha: true });
  };
  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    if (this.state.name === '' || this.state.email === '' || this.state.message === '')
    {
      alert('Error: Please make sure every field is filled out.');
    }
    else if (!this.validateEmail(this.state.email)) {
      alert('Error: Please make sure the provided email is in the correct format.');
    }
    else if (this.state.gotRecaptcha === false) {
      alert('Error: Please make sure you\'ve clicked the reCAPTCHA checkbox.');
    }
    else {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...this.state
        })
      })
        .then(() => navigate(form.getAttribute('action')))
        .catch(error => alert('Error: Please make sure every field is filled out. ' + error));
    }
  };
  validateEmail = value => {
    // Regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript, and removed 4 extra escape characters (\)
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  };
  render() {
    const { name, email, message } = this.state;

    return (
      <Layout>
        <div>
          <SEO title='Contact' />
          <h1>Contact</h1>
          <form
            className='contact-form'
            name='GrantAvery.com contact form'
            method='post'
            action='/thanks/'
            data-netlify='true'
            data-netlify-honeypot='bot-field'
            data-netlify-recaptcha='true'
            onSubmit={this.handleSubmit}>
            <noscript>
              <p>This form won’t work with Javascript disabled</p>
            </noscript>
            <div hidden>
              <label>
                Don’t fill this out:{' '}
                <input name='bot-field' onChange={this.handleChange} />
              </label>
            </div>
            <div className='field half first'>
              <label htmlFor='name'>Name:<br />
                <input type='text' name='name' id='name' value={name} onChange={this.handleChange} required />
              </label>
            </div>
            <div className='field half'>
              <label htmlFor='email'>Email:<br />
                <input type='text' name='email' id='email' value={email} onChange={this.handleChange} required validate={this.validateEmail} />
              </label>
            </div>
            <div className='field' id='contact-recaptcha'>
              <label htmlFor='message'>Message:<br />
                <textarea name='message' id='message' rows='6' value={message} onChange={this.handleChange} required />
              </label>
            </div>
            <Recaptcha
              className='field'
              ref='recaptcha'
              sitekey={RECAPTCHA_KEY}
              onChange={this.handleRecaptcha}
            />
            <div className='actions'>
              <button type='submit' value='Send' className='page-btn'>Send</button>
            </div>
          </form>
        </div>
      </Layout>
    );
  }
}