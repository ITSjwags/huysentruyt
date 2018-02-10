module.exports = {
  pathPrefix: `/huysentruyt`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [require('autoprefixer')()]
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Lora\:400,700`,
          `Montserrat\:400,700,900`
        ]
      }
    }
  ],
}
