/**
 * @type {import('gatsby').GatsbyConfig}
 * 
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `jcgallery1`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-image", 
    // "gatsby-plugin-sitemap", 
    {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "background_color": '#663399',
      "theme_color": '#663399',
      "display": 'minimal-ui',
      "icon": "src/assets/images/jedi.svg"
    }
  },
   "gatsby-plugin-sharp", 
   "gatsby-transformer-sharp", 
   "gatsby-plugin-sass",
   "gatsby-plugin-offline",
 
  {
    resolve: `gatsby-plugin-cloudinary-image-gallery`,
    options: {
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.CLOUDINARY_API_KEY,
      apiSecret: process.env.CLOUDINARY_API_SECRET,
      folders: ["gallery1", "gallery2", "gallery3"],
    },
  },

]
};