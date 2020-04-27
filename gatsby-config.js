module.exports = {
  siteMetadata: {
    title: `Code Revamp`,
    name: `Code Revamp`,
    siteUrl: `http://coderevamp.com/`,
    description: `A Houssam Yahiaoui Technical Blog.`,
    hero: {
      heading: `Let's write some 🆒 code ~!`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/_hcodex`,
      },
      {
        name: `github`,
        url: `https://github.com/houssem-yahiaoui`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/houssemyahiaoui/`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [],
      },
    },
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        mailchimp: true,
        sources: {
          local: true
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Code Revamp`,
        short_name: `Code Revamp`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://coderevamp.us8.list-manage.com/subscribe/post?u=0eb44a3f2b3dfcbf457e9790d&amp;id=a7fc6d4de2', // add your MC list endpoint here; see plugin repo for instructions
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-164605774-1`
      }
    }
  ],
};
