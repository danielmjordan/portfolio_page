module.exports = {
  plugins: [
    '@hashinteractive/gatsby-theme-reactor',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /src/,
          exclude: /node_modules/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Open Sans']
        }
      }
    }
  ],
  siteMetadata: {
    title: `Daniel M. Jordan`
  }
}