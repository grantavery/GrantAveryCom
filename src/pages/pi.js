import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PiComponent from '../components/pi'

const PiPage = () => (
  <Layout>
    <SEO title="3142 Digits of Pi" />
    <h1>3142 Digits of Pi</h1>
    <p>This was simply a fun exercise with React components and API calls in GatsbyJS. 
      It utilizes Google's <a href="https://pi.delivery/">Pi API</a>, 
      which unfortunately only allows requests of 1000 digits (or less) at a time. 
      I opted to grab 3142 digits and call it good.</p>
    <div>
      <PiComponent></PiComponent>
    </div>
  </Layout>
)

export default PiPage
