import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import timeywimey from '../images/wibbly-wobbly-timey-wimey-stuff.jpg'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You may have entered a time hole. Please try a different page.</p>
    <img src={timeywimey} className="image-404"></img>
  </Layout>
)

export default NotFoundPage
