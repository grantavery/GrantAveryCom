import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const LinksPage = () => (
  <Layout>
    <SEO title="Links" />
    <h1>Links</h1>
    <div>
      <p>Feel free to check out the links below for other places you can find me:</p>

      <p><a href='https://github.com/GrantAvery/GrantAvery'>GitHub</a></p>

      <p><a href='https://www.linkedin.com/in/grant-m-avery/'>LinkedIn</a></p>

      <p>
        (It looks like these sites are all strong proponents of PascalCase&nbsp;
        <span role="img" aria-label="smiley face">😃</span>
        )
      </p>
    </div>
  </Layout>
)

export default LinksPage
