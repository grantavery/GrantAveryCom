import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <h1>Home</h1>
    <div>
      <p>
        Hi, I'm a software developer specializing in C#, Angular, and Swift. 
        In a sentence, I build websites and mobile apps, and am always learning new things.
      </p>

      <p>
      I am passionate about developing my interests, which include computer programming, 
      web design, literature, photography, technology, and much more. 
      I graduated from Davenport University with a B.S. in Computer Information Systems, 
      which provided me with a solid understanding of OOP languages like C# and Java, 
      front-end development (.NET MVC, Angular), and SQL databases. In my work at Spectrum Health as a software development intern 
      and later trainee, I expanded my skillset to include Javascript frameworks/libraries like React and jQuery, 
      back-end technologies like .NET Core, as well as Swift and Java for native mobile app development.
      Additionally, I've made several side projects⏤like this website⏤which you can learn more about on 
      my <a href='https://github.com/grantavery/' target='_blank' rel='noreferrer'>GitHub</a>.
      </p>
    </div>
  </Layout>
)

export default IndexPage
