import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import PiComponent from '../components/pi';
import { useStaticQuery, graphql } from 'gatsby';

const PiPage = () => {
  const data = useStaticQuery(graphql`
    query PiPageQuery {
      allContentfulPage(filter: {title: {eq: "3,142 Digits of Pi"}}, limit: 1) {
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
      <Seo title={node.title} />
      <h1>{node.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: node.body.childMarkdownRemark.html,
        }}
      />
      <div>
        <PiComponent></PiComponent>
      </div>
    </Layout>
  );
};

export default PiPage
