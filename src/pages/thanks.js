import React from "react";

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'

export default () => (
  <Layout>
    <div>
     <SEO title="Thank you!" />
      <h1>Thank you!</h1>
      <p>Your message was successfully sent. I'll get back to you as soon as I can.</p>
      <Link to='/'>Back to Home</Link>
    </div>
  </Layout>
);