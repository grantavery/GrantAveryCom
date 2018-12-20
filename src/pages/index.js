import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' keywords={['gatsby', 'application', 'react']} />
    <h1>Home</h1>
    <p>Hi, I’m a software developer currently attending Davenport University. I build websites and mobile apps for Spectrum Health and others, and am always learning new things.</p>

    <p>Feel free to check out the links below for other places you can find me:</p>

    <p><a href='https://www.linkedin.com/in/grant-m-avery/'>LinkedIn</a></p>

    <p><a href='https://github.com/GrantAvery'>GitHub</a></p>

    <p><a href='http://grant-avery.brandyourself.com/'>My BrandYourself profile</a></p>

    <p>An old <a href='https://grantaveryblog.wordpress.com/'>WordPress blog</a> from high school</p>
  </Layout>
)

export default IndexPage
