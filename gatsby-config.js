require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "John Bakes",
    email: "john@cutcopypastry.com",
    instagram_username: "john.rocha5"
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-material-ui",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Cut, Copy, Pastry",
        icon: "static/images/page-icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./static/images/",
      },
      __key: "images",
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        include: "/svg/"
      }
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: "john.rocha5",
        instagram_id: "17841401642804110",
        access_token: process.env.GATSBY_IG_ACCESS_TOKEN
      },
    },
  ],
};
