import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import LinkBox from '../components/link-box';
import githubLogo from '../images/linkedin-logo.png';
import linkedinLogo from '../images/github-logo.png';

const LinksPage = () => (
  <Layout>
    <SEO title='Links' />
    <h1>Links</h1>
    <p>Feel free to check out the links below for other places you can find me:</p>

    <div className='links-container'>
      <LinkBox linkUrl='https://github.com/grantavery/' title='GitHub'
        description="Have a look at some of the coding projects I've worked on."
        siteImgUrl={linkedinLogo} />

      <LinkBox linkUrl='https://www.linkedin.com/in/grant-m-avery/' title='LinkedIn'
        description='Learn more about my experience, skills, and maybe even make a connection!'
        siteImgUrl={githubLogo}/>
    </div>
  </Layout>
)

export default LinksPage
