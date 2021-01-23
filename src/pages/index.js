import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HomePageQuery {
      allContentfulPage(filter: {title: {eq: "Home"}}, limit: 1) {
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
    </Layout>
  );
};

export default IndexPage
