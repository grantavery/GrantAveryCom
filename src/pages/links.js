import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import LinkBox from '../components/link-box';
import githubLogo from '../images/linkedin-logo.png';
import linkedinLogo from '../images/github-logo.png';
import { useStaticQuery, graphql } from 'gatsby';

const LinksPage = () => {
  const data = useStaticQuery(graphql`
    query LinksPageQuery {
      blogs: allAirtable(
        filter: {data: {contentName: {eq: "LinksPage-Body"}}}
          ) {
        nodes {
          data {
            contentName,
            contentBody {
              childMarkdownRemark {
                html,
                rawMarkdownBody
              }
            }
          }
          recordId
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title='Links' />
      <h1>Links</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: data.blogs.nodes[0].data.contentBody.childMarkdownRemark.rawMarkdownBody,
        }}
      />
      <br/>

      <div className='links-container'>
        <LinkBox linkUrl='https://github.com/grantavery/' title='GitHub'
          description="Have a look at some of the coding projects I've worked on."
          siteImgUrl={linkedinLogo} />

        <LinkBox linkUrl='https://www.linkedin.com/in/grant-m-avery/' title='LinkedIn'
          description='Learn more about my experience, skills, and maybe even make a connection!'
          siteImgUrl={githubLogo}/>
      </div>
    </Layout>
  );
};

export default LinksPage
