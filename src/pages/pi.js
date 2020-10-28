import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PiComponent from '../components/pi';

const PiPage = () => (
  <Layout>
    <SEO title='3142 Digits of Pi' />
    <h1>3142 Digits of Pi</h1>
    <p>This was simply a fun exercise with using a React component to retrieve digits of Pi 
      via a custom NodeJS API, which in turn gets its data from Google's <a href='https://pi.delivery/'>Pi API</a>. 
      Google's API only allows requests for a maximum of 1000 digits at a time, so my Node API abstracts some logic to 
      pull as many digits as I'd like, in this case 3142.</p>
    <div>
      <PiComponent></PiComponent>
    </div>
  </Layout>
)

export default PiPage
