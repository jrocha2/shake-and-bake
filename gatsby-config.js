require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "John Bakes",
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-material-ui",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: "john.rocha5",
        instagram_id: "17841401642804110",
        access_token: process.env.IG_ACCESS_TOKEN
      },
    },
  ],
};
