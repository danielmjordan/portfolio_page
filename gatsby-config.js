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
    }
  ],
  siteMetadata: {
    title: `Daniel M. Jordan`
  }
}