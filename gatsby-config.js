require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Grant Avery',
    description: 'Grant Avery\'s personal website',
    author: 'Grant Avery',
    menuLinks: [
      {
        name: 'Home',
        link: '/'
      },
      {
        name: 'Links',
        link: '/links'
      },
      {
        name: 'Contact',
        link: '/contact'
      },
    ]
  },
  plugins: [
    {
      //https://www.gatsbyjs.com/plugins/gatsby-source-airtable/
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `${process.env.GATSBY_AIRTABLE_KEY}`,
        tables: [
          {
            baseId: `appeMzFyierjx6toV`,
            tableName: `Content`,
            tableView: `Grid view`,
            queryName: ``,
            mapping: { contentBody: `text/markdown` },
          },
          // We can add other bases/tables here, too!
          //{
            //baseId: `AIRTABLE_BASE_ID`,
            //tableName: `Sides`
          //}
        ]
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'grant-avery-com',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/xkcd-question-man.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
