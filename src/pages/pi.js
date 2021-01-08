import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PiComponent from '../components/pi';
import { useStaticQuery, graphql } from 'gatsby';

const PiPage = () => {
  const data = useStaticQuery(graphql`
    query PiPageQuery {
      blogs: allAirtable(
        filter: { table: { eq: "Content" }, data: {contentName: {eq: "PiPage-Body"}}}, limit: 1
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
      <SEO title='3142 Digits of Pi' />
      <h1>3,142 Digits of Pi</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: data.blogs.nodes[0].data.contentBody.childMarkdownRemark.html,
        }}
      />
      <div>
        <PiComponent></PiComponent>
      </div>
    </Layout>
  );
};

export default PiPage
