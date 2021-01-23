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
      allContentfulPage(filter: {title: {eq: "Links"}}, limit: 1) {
        nodes {
          title
          body {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  `);

  const node = data.allContentfulPage.nodes[0];

  return (
    <Layout>
      <SEO title={node.title} />
      <h1>{node.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: node.body.childMarkdownRemark.html,
        }}
      />

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
