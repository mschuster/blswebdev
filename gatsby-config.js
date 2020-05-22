module.exports = {
  siteMetadata: {
    title: `Prototyp BLS Web Development Homepage`,
    description: ``,
    author: `Team BLS`,
    menuLinks:[
      {
        name:'Startseite',
        link:'/'
      },
    {
      name: 'Über Uns',
      link:'/about'
    },    
    {
      name: 'Portfolio',
      link:'/portfolio'
    },
    {
      name: 'Kontakt',
      link:'/contact'
    },
    {
      name: 'Dienstleistungen',
      link:'/services'
    },
    {
      name: 'Impressum',
      link:'/impressum'
    },
  ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio-pages`,
        path: `${__dirname}/src/portfolio-pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
