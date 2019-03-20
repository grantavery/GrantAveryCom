import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <h1>Home</h1>
    <div>
      <p>Hi, I’m a software developer currently attending Davenport University. 
        I build websites and mobile apps for Spectrum Health and others, 
        and am always learning new things.
      </p>

      <p>I am passionate about developing my interests, 
        which include computer programming, web design, literature, 
        photography, technology, and much more. 
        I am already versed in C#/.NET and Java programming, 
        as well as front-end HTML and CSS. 
        I've also been broadening my competence in Javascript 
        (mostly Angular along with some jQuery, React, and vanilla) 
        and front-end enhancements like Sass styling. 
        In addition to web development, I have experience programming 
        iOS and Android mobile apps.
      </p>
    </div>
  </Layout>
)

export default IndexPage
