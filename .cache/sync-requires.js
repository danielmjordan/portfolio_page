const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-hashinteractive-gatsby-theme-reactor-src-templates-project-js": hot(preferDefault(require("/Users/danieljordan/Desktop/Projects/portfolio-page/node_modules/@hashinteractive/gatsby-theme-reactor/src/templates/project.js"))),
  "component---node-modules-hashinteractive-gatsby-theme-reactor-src-templates-default-js": hot(preferDefault(require("/Users/danieljordan/Desktop/Projects/portfolio-page/node_modules/@hashinteractive/gatsby-theme-reactor/src/templates/default.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/danieljordan/Desktop/Projects/portfolio-page/.cache/dev-404-page.js")))
}

