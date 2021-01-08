import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexPageQuery {
      blogs: allAirtable(
        filter: { table: { eq: "Content" }, data: {contentName: {eq: "HomePage-Body"}}}, limit: 1
          ) {
        nodes {
          data {
            contentName,
            contentBody {
              childMarkdownRemark {
                html
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
      <SEO title='Home' />
      <h1>Home</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: data.blogs.nodes[0].data.contentBody.childMarkdownRemark.html,
        }}
      />
    </Layout>
  );
};

export default IndexPage
