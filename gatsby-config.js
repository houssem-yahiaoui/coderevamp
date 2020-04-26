module.exports = {
  siteMetadata: {
    title: `Code Revamp`,
    name: `Code Revamp`,
    siteUrl: `http://coderevamp.com/`,
    description: `Code Revamp is a simply blog by Houssam Yahiaoui who tries to explain things in Javscript.`,
    hero: {
      heading: `Welcome to Code Revamp, It's simply another Technical Blog that explains stuff in Javascript`,
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
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
