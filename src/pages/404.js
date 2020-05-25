import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import timeywimey from '../images/wibbly-wobbly-timey-wimey-stuff.jpg';

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Page Not Found' />
    <h1>404 Page Not Found</h1>
    <p>You may have entered a time hole, please try a different page.</p>
    <img src={timeywimey} className='image-404' alt='In block text, the words, "wibbly wobbly timey wimey stuff"'></img>
  </Layout>
)

export default NotFoundPage
