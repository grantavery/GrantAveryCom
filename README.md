<h1 align="center">
  GrantAvery.com
</h1>

You can view this site at [grantavery.com](https://www.grantavery.com/). It uses [GatsbyJS](https://www.gatsbyjs.org/) to bundle the pages and content, and then on push to GitHub, [netlify](https://www.netlify.com/) publishes it to update the live site.


## Local Dev:

### Gatsby setup
```sh
npm install -g gatsby-cli
```

### Change directories into site folder

```sh
cd grantaverycom/
```

### Install dependencies

```sh
npm install
```

### Start development server

```sh
gatsby develop
```

Available at: `http://localhost:8000`!

*Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).*

### Create a production build

```sh
gatsby build
```

### Serve the production build locally

```sh
gatsby serve
```


## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/GrantAvery/GrantAveryCom)


## Gatsby Info (taken from their starter project README):

### Create a new site
```sh
gatsby new grantaverycom
```

### Different files
  
-   **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

-   **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

-   **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

-   **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

### Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

-   **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

-   **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.
